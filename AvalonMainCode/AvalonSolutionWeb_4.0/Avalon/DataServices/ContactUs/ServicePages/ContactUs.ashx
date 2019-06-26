<%@ WebHandler Language="C#" Class="ContactUs" %>

using System;
using System.Web;
using System.IO;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Http;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using JewelExchangeEntities.DTO;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Application.Model.RetailerDTO;
using ASHI.Common;
using System.Web.Services;
using ASHI.Customer.Business;

public class ContactUs : IHttpHandler, IRequiresSessionState
{
    Int32 _ContactUsNo = 0;
    Utility outility = new Utility();
    SiteSettings sitesettings = new SiteSettings();
    string Salutation = string.Empty;
    string FirstName = string.Empty;
    string LastName = string.Empty;
    string Company = string.Empty;
    string JobTitle = string.Empty;
    string Address1 = string.Empty;
    string Address2 = string.Empty;
    string City = string.Empty;
    string State = string.Empty;
    string Zip = string.Empty;
    string Phone = string.Empty;
    string Subject = string.Empty;
    string Email = string.Empty;
    string Website = string.Empty;
    string BuyingGroup = string.Empty;
    string Comments = string.Empty;
    string ReCaptcha_Secret = string.Empty;
    string sResponse = string.Empty;
    string ipAddress = string.Empty;
    string ipLocation = string.Empty;

    ContactUsManager objContactUsManager = new ContactUsManager();

    public void ProcessRequest(HttpContext context)
    {

        sitesettings = outility.intializeSiteSetting();
        Salutation = context.Request.QueryString["Salutation"] != null ? Convert.ToString(context.Request.QueryString["Salutation"]) : string.Empty;
        FirstName = context.Request.QueryString["FirstName"] != null ? Convert.ToString(context.Request.QueryString["FirstName"]) : string.Empty;
        LastName = context.Request.QueryString["LastName"] != null ? Convert.ToString(context.Request.QueryString["LastName"]) : string.Empty;
        Company = context.Request.QueryString["Company"] != null ? Convert.ToString(context.Request.QueryString["Company"]) : string.Empty;
        JobTitle = context.Request.QueryString["JobTitle"] != null ? Convert.ToString(context.Request.QueryString["JobTitle"]) : string.Empty;
        Address1 = context.Request.QueryString["Address1"] != null ? Convert.ToString(context.Request.QueryString["Address1"]) : string.Empty;
        Address2 = context.Request.QueryString["Address2"] != null ? Convert.ToString(context.Request.QueryString["Address2"]) : string.Empty;
        City = context.Request.QueryString["City"] != null ? Convert.ToString(context.Request.QueryString["City"]) : string.Empty;
        State = context.Request.QueryString["State"] != null ? Convert.ToString(context.Request.QueryString["State"]) : string.Empty;
        Zip = context.Request.QueryString["Zip"] != null ? Convert.ToString(context.Request.QueryString["Zip"]) : string.Empty;
        Phone = context.Request.QueryString["Phone"] != null ? Convert.ToString(context.Request.QueryString["Phone"]) : string.Empty;
        Email = context.Request.QueryString["Email"] != null ? Convert.ToString(context.Request.QueryString["Email"]) : string.Empty;
        Website = context.Request.QueryString["Website"] != null ? Convert.ToString(context.Request.QueryString["Website"]) : string.Empty;
        BuyingGroup = context.Request.QueryString["BuyingGroup"] != null ? Convert.ToString(context.Request.QueryString["BuyingGroup"]) : string.Empty;
        Subject = context.Request.QueryString["Subject"] != null ? Convert.ToString(context.Request.QueryString["Subject"]) : string.Empty;
        Comments = context.Request.QueryString["Comments"] != null ? Convert.ToString(context.Request.QueryString["Comments"]) : string.Empty;
        sResponse = context.Request.QueryString["response"] != null ? Convert.ToString(context.Request.QueryString["response"]) : string.Empty;
        ipAddress = outility.GetUserIP();
        ipLocation = outility.getIPLocation(this.outility.GetUserIP());

        string jsonResponse = string.Empty;
        if (Validate(context, sResponse))
        {
            try
            {
                sendUserEmail();
                jsonResponse = "success";

            }
            catch (Exception ex)
            {
                System.Web.HttpContext.Current.Response.Write(" Senduseremail ->" + ex.ToString());
            }
            try
            {
                sendCompanyEmail();
                jsonResponse = "success";
            }
            catch (Exception ex)
            {
                System.Web.HttpContext.Current.Response.Write(" sendCompanyEmail ->" + ex.ToString());
            }
        }
        else
        {
            jsonResponse = "fail";
        }
        objContactUsManager.SaveNewContactRequestDetails(Salutation, FirstName, LastName, Company,JobTitle, Address1,
                                                          Address2, City,State, Zip, Phone, Email,Website,BuyingGroup,
                                                          Subject, Comments, ipAddress, ipLocation);

       
        JavaScriptSerializer jss = new JavaScriptSerializer();
         string responseString = jss.Serialize(jsonResponse);
        context.Response.Write(responseString);
       
    }




    protected void sendUserEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = "";
        String sMailTo = Email;
        sMailFrom = Constants.CONTACT_US_EMAIL;
        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        Mailer.Subject = replaceLocalVariable("Thank You for contacting Avalon Solution");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/ContactUs_User.html"));

        Mailer.IsBodyHtml = true;
        ut.SendEmail(Mailer);
    }

    protected void sendCompanyEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = String.Empty;
        
        String sMailTo = "";
        sMailTo = Constants.CONTACT_US_EMAIL;


        sMailFrom = Convert.ToString(new MailAddress(sMailTo, "On behalf of " + Company.Trim()));

        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        Mailer.Headers.Add("Reply-To", "AVALON SOLUTION");
        Mailer.Subject = replaceLocalVariable("Avalon Solution – Contact Us Request |" + " " + "[Company Name] -" + " " + "[Salutation] [First Name] [Last Name] – [Position] – [DATE]");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/ContactUs_Ashi.html"));

        Mailer.IsBodyHtml = true;
        ut.SendEmail(Mailer);
    }


    //Google ReCaptcha Validate Method
    public bool Validate(HttpContext context, string grecaptcha)
    {
        //string Response = context.Request[grecaptcha];//Getting Response String Append to Post Method
    
        ReCaptcha_Secret = (string)System.Configuration.ConfigurationManager.AppSettings["reCaptchaSecretKey"];
        string Response = grecaptcha;

        bool Valid = false;
        ReCaptcha_Secret = (string)System.Configuration.ConfigurationManager.AppSettings["reCaptchaSecretKey"];
        //Request to Google Server
        HttpWebRequest req = (HttpWebRequest)WebRequest.Create
        ("https://www.google.com/recaptcha/api/siteverify?secret=" + ReCaptcha_Secret + "&response=" + Response);
        try
        {
            //Google recaptcha Response
            using (WebResponse wResponse = req.GetResponse())
            {

                using (StreamReader readStream = new StreamReader(wResponse.GetResponseStream()))
                {
                    string jsonResponse = readStream.ReadToEnd();

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    MyObject data = js.Deserialize<MyObject>(jsonResponse);// Deserialize Json

                    Valid = Convert.ToBoolean(data.success);
                }
            }

            return Valid;
        }
        catch (WebException ex)
        {
            throw ex;
        }
    }
    public class MyObject
    {
        public string success { get; set; }
    }
    
    protected String replaceLocalVariable(string strBody)
    {


        string cDate = DateTime.Today.ToString("MMM") + " " + DateTime.Today.ToString("dd") + ", " + DateTime.Today.ToString("yyyy");

        strBody = strBody.Replace("[UserName]", FirstName + " " + LastName);
        strBody = strBody.Replace("[EmailAddress]", Email);
        strBody = strBody.Replace("[Salutation]", Salutation);
        strBody = strBody.Replace("[First Name]", FirstName);
        strBody = strBody.Replace("[Last Name]", LastName);
        strBody = strBody.Replace("[Comments]", Comments);
        strBody = strBody.Replace("[Company]", Company);
        strBody = strBody.Replace("[Company Name]", Company);
        strBody = strBody.Replace("[Position]", JobTitle);
        strBody = strBody.Replace("[Address1]", Address1);
        strBody = strBody.Replace("[Address2]", Address2);
        strBody = strBody.Replace("[Request Date]", cDate);
        strBody = strBody.Replace("[Selected Value]", BuyingGroup);
        strBody = strBody.Replace("[RequestEmailId]", Email);
        strBody = strBody.Replace("[Email Address]", Email);
        strBody = strBody.Replace("[Email Sent Date]", cDate);
        strBody = strBody.Replace("[Subject]", Subject);
        strBody = strBody.Replace("[City]", City);
        strBody = strBody.Replace("[State]", State);
        strBody = strBody.Replace("[Zip]", Zip);
        strBody = strBody.Replace("[Telephone]", Phone);
        strBody = strBody.Replace("[IP Location]", outility.getIPLocation(this.outility.GetUserIP()));
        strBody = strBody.Replace("[IP Address]", outility.GetUserIP());
        strBody = strBody.Replace("[WebRoot]", Constants.AvalonDataDesinTemplatesPath);
        strBody = strBody.Replace("[Website URL]", Website);
        strBody = strBody.Replace("[DATE]", cDate);
        
        
        return strBody;
    }

    private String readHtmlPage(string url)
    {
        String result = "";
        WebResponse objResponse;
        if (url == null)
        {
            //String error = "Not a valid page to be sent.";
        }
        else
        {
            WebRequest objRequest = System.Net.HttpWebRequest.Create(url);
            objResponse = objRequest.GetResponse();
            using (StreamReader sr = new StreamReader(objResponse.GetResponseStream()))
            {
                result = sr.ReadToEnd();
                // Close and clean up the StreamReader
                sr.Close();
            }
        }
        return result;
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}