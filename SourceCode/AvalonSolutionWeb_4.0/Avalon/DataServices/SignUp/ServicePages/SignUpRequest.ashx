<%@ WebHandler Language="C#" Class="SignUpRequest" %>

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

public class SignUpRequest : IHttpHandler, IRequiresSessionState
{
    Utility outility = new Utility();
    SiteSettings sitesettings = new SiteSettings();
    SignUpRequestManager objSignUpRequestManager = new SignUpRequestManager();

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
    string Phone1 = string.Empty;
    string Mobile = string.Empty;
    string Email = string.Empty;
    string Website = string.Empty;
    string BuyingGroup = string.Empty;
    string WebPlan = string.Empty;
    string WebDesignerNumber = string.Empty;
    string Comments = string.Empty;
    string ReCaptcha_Secret = string.Empty;
    string sResponse = string.Empty;
    string ipAddress = string.Empty;
    string ipLocation = string.Empty;
    string existingDomainname = string.Empty;
    string yearsInbuisness = string.Empty;
    string supplier1 = string.Empty;
    string supplier2 = string.Empty;
    string supplier3 = string.Empty;
    string storeHoursDays1 = string.Empty;
    string storeHoursDays2 = string.Empty;
    string storeHoursDays3 = string.Empty;
    string companyLogo = string.Empty;
    string storePictres = string.Empty;





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
        Phone1 = context.Request.QueryString["Phone1"] != null ? Convert.ToString(context.Request.QueryString["Phone1"]) : string.Empty;
        Mobile = context.Request.QueryString["Mobile"] != null ? Convert.ToString(context.Request.QueryString["Mobile"]) : string.Empty;
        Email = context.Request.QueryString["Email"] != null ? Convert.ToString(context.Request.QueryString["Email"]) : string.Empty;
        Website = context.Request.QueryString["Website"] != null ? Convert.ToString(context.Request.QueryString["Website"]) : string.Empty;
        BuyingGroup = context.Request.QueryString["BuyingGroup"] != null ? Convert.ToString(context.Request.QueryString["BuyingGroup"]) : string.Empty;
        WebPlan = context.Request.QueryString["WebPlan"] != null ? Convert.ToString(context.Request.QueryString["WebPlan"]) : string.Empty;
        if(WebPlan.ToUpper() == "Bronze".ToUpper())
        {
            WebPlan = "Starter";
        }
        WebDesignerNumber = context.Request.QueryString["WebDesignerNumber"] != null ? Convert.ToString(context.Request.QueryString["WebDesignerNumber"]) : string.Empty;
        Comments = context.Request.QueryString["Comments"] != null ? Convert.ToString(context.Request.QueryString["Comments"]) : string.Empty;
        sResponse = context.Request.QueryString["response"] != null ? Convert.ToString(context.Request.QueryString["response"]) : string.Empty;
        existingDomainname = context.Request.QueryString["existingDomainName"] != null ? Convert.ToString(context.Request.QueryString["existingDomainName"]) : string.Empty;
        yearsInbuisness = context.Request.QueryString["buisnessInYears"] != null ? Convert.ToString(context.Request.QueryString["buisnessInYears"]) : string.Empty;
        supplier1 = context.Request.QueryString["supplier1"] != null ? Convert.ToString(context.Request.QueryString["supplier1"]) : string.Empty;
        supplier2 = context.Request.QueryString["supplier2"] != null ? Convert.ToString(context.Request.QueryString["supplier2"]) : string.Empty;
        supplier3 = context.Request.QueryString["supplier3"] != null ? Convert.ToString(context.Request.QueryString["supplier3"]) : string.Empty;
        storeHoursDays1 = context.Request.QueryString["StoreHoursDays1"] != null ? Convert.ToString(context.Request.QueryString["StoreHoursDays1"]) : string.Empty;
        storeHoursDays2 = context.Request.QueryString["StoreHoursDays2"] != null ? Convert.ToString(context.Request.QueryString["StoreHoursDays2"]) : string.Empty;
        storeHoursDays3 = context.Request.QueryString["StoreHoursDays3"] != null ? Convert.ToString(context.Request.QueryString["StoreHoursDays3"]) : string.Empty;
        companyLogo = context.Request.QueryString["companyLogo"] != null ? Convert.ToString(context.Request.QueryString["companyLogo"]) : string.Empty;
        storePictres = context.Request.QueryString["storePictures"] != null ? Convert.ToString(context.Request.QueryString["storePictures"]) : string.Empty;
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


        HttpPostedFile postedFile = context.Request.Files["CompanyLogo"];

        //Check if File is available.
        if (postedFile != null && postedFile.ContentLength > 0)
        {
            //Save the File.
            string filePath = System.Web.HttpContext.Current.Server.MapPath("~/CompanyLogo/") + Path.GetFileName(postedFile.FileName);
            postedFile.SaveAs(filePath);

        }






        objSignUpRequestManager.SaveNewSignUpRequestDetails(Salutation, FirstName, LastName, Company,
                                                            JobTitle, Address1, Address2, City, State,
                                                            Zip, Phone1, Mobile, Email, Website, BuyingGroup,
                                                            WebPlan, WebDesignerNumber, Comments, ipAddress, ipLocation, existingDomainname, yearsInbuisness, supplier1, supplier2, supplier3, storeHoursDays1, storeHoursDays2, storeHoursDays3, companyLogo, storePictres);

        //sendUserEmail();
        //sendCompanyEmail();
        JavaScriptSerializer jss = new JavaScriptSerializer();
        string responseString = jss.Serialize(jsonResponse);
        context.Response.Write(responseString);

    }


    protected void sendUserEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = "";
        String sMailTo = Email;
        sMailFrom = Constants.Sign_UP_EMAIL;
        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        Mailer.Subject = replaceLocalVariable("Thank You for Signing Up for Avalon Solution Website Program at" + "  " + WebPlan + " " + " Plan ");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/SignUp_User.html"));

        Mailer.IsBodyHtml = true;
        ut.SendEmail(Mailer);
    }

    protected void sendCompanyEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = Constants.CONTACT_US_EMAIL;

        String sMailTo = "";
        sMailTo = Constants.Sign_UP_EMAIL;

        sMailFrom = Convert.ToString(new MailAddress(sMailFrom, "On behalf of " + Company.Trim()));

        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        Mailer.Headers.Add("Reply-To", "AVALON SOLUTION");
        Mailer.Subject = replaceLocalVariable("Avalon Solution - Website Sign Up Request for" + " " + WebPlan + " " + "Plan" + " " + Company + " " + "-" + " " + Salutation + " " + FirstName + " " + LastName + " " + JobTitle + " " + "[DATE]");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/SignUp_Ashi.html"));

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
        if(WebPlan.ToUpper() == "Bronze".ToUpper())
        {
            WebPlan = "Starter";
        }
        strBody = strBody.Replace("[UserName]", FirstName + " " + LastName);
        strBody = strBody.Replace("[EmailId]", Email);
        strBody = strBody.Replace("[Website Plan]", WebPlan);
        strBody = strBody.Replace("[Plan Name]", WebPlan);
       
        strBody = strBody.Replace("[BuyingGroup]", BuyingGroup.Replace(",",", "));
        strBody = strBody.Replace("[Website Design]", WebDesignerNumber);

        strBody = strBody.Replace("[Salutation]", Salutation);
        strBody = strBody.Replace("[First Name]", FirstName);
        strBody = strBody.Replace("[Last Name]", LastName);
        strBody = strBody.Replace("[Comments]", Comments);
        strBody = strBody.Replace("[Company]", Company);
        strBody = strBody.Replace("[Company Name]", Company);
        strBody = strBody.Replace("[Position]", JobTitle);
        strBody = strBody.Replace("[Address1]", Address1);
        strBody = strBody.Replace("[Address2]", Address2);
        strBody = strBody.Replace("[DATE]", cDate);
        strBody = strBody.Replace("[Date of Request]", cDate);

        strBody = strBody.Replace("[Selected Value]", BuyingGroup.Replace(",",", "));
        strBody = strBody.Replace("[RequestEmailId]", Email);
        strBody = strBody.Replace("[Email Address]", Email);
        strBody = strBody.Replace("[Email Sent Date]", cDate);

        strBody = strBody.Replace("[WebPlan]", WebPlan);
        strBody = strBody.Replace("[WebDesignerNumber]", WebDesignerNumber);
        strBody = strBody.Replace("[City]", City);
        strBody = strBody.Replace("[State]", State);
        strBody = strBody.Replace("[Zip]", Zip);
        strBody = strBody.Replace("[Telephone]", Phone1);
        strBody = strBody.Replace("[Mobile]", Mobile);
        strBody = strBody.Replace("[IP Location]", outility.getIPLocation(this.outility.GetUserIP()));
        strBody = strBody.Replace("[Geographic Location]", outility.getIPLocation(this.outility.GetUserIP()));
        strBody = strBody.Replace("[IP Address]", outility.GetUserIP());
        strBody = strBody.Replace("[WebRoot]", Constants.AvalonDataDesinTemplatesPath);
        strBody = strBody.Replace("[Website URL]", Website);
        strBody = strBody.Replace("[Request Date]", cDate);
        strBody = strBody.Replace("[Existing Domain]", existingDomainname);
        strBody = strBody.Replace("[Est Years]", yearsInbuisness);
        strBody = strBody.Replace("[Supplier1]", supplier1);
        strBody = strBody.Replace("[Supplier2]", supplier2);
        strBody = strBody.Replace("[Supplier3]", supplier3);
        strBody = strBody.Replace("[StoreHoursDays1]", storeHoursDays1);
        strBody = strBody.Replace("[StoreHoursDays2]", storeHoursDays2);
        strBody = strBody.Replace("[StoreHoursDays3]", storeHoursDays3);
        strBody = strBody.Replace("[Company Logo]", companyLogo);
        strBody = strBody.Replace("[StorePic]", storePictres);


        //Logo Path
        strBody = strBody.Replace("[CLIENT_LOGO_URL]", sitesettings.ClientLogoUrl);
        strBody = strBody.Replace("[CLIENT_WEBSTORE_URL]", SiteSettings.CLIENTWEBURL);
        //Company Info
        strBody = strBody.Replace("$COMPANY_NAME$", SiteSettings.COMPANY_NAME);
        // strBody = strBody.Replace("$CLIENTURL$", sitesettings.CLIENTURL); 
        //strBody = strBody.Replace("$MICRO_WEBSITE_URL$", Constants.Web_Root + "/" + ClientUrl);
        strBody = strBody.Replace("$COMPANY_EMAIL1$", SiteSettings.EMAILID);
        //strBody = strBody.Replace("$COMPANY_EMAIL2$", Constants.CustomerServiceEmailAddress);
        strBody = strBody.Replace("$COMPANY_ADDRESS1$", SiteSettings.ADDRESS1);
        strBody = strBody.Replace("$ADDRESS_ADDRESS2$", SiteSettings.ADDRESS2);
        strBody = strBody.Replace("$COMPANY_CITY$", SiteSettings.CITY);
        strBody = strBody.Replace("$COMPANY_STATE$", SiteSettings.STATENAME);
        strBody = strBody.Replace("$COMPANY_ZIP$", SiteSettings.ZIP);
        strBody = strBody.Replace("$COMPANY_PHONE1$", SiteSettings.PHONE1);
        strBody = strBody.Replace("$COMPANY_STOREDAYS_1", SiteSettings.STOREHOURS1);
        strBody = strBody.Replace("$COMPANY_STOREDAYS_2", SiteSettings.STOREHOURS2);
        strBody = strBody.Replace("$COMPANY_STOREDAYS_3", SiteSettings.STOREHOURS3);
        strBody = strBody.Replace("$ClientLogoUrl$", sitesettings.ClientLogoUrl);
        strBody = strBody.Replace("$CLIENT_WEBSTORE_URL$", SiteSettings.CLIENTWEBURL);



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