<%@ WebHandler Language="C#" Class="SupplierRequest" %>

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

public class SupplierRequest : IHttpHandler, IRequiresSessionState
{
    Utility outility = new Utility();
    SiteSettings sitesettings = new SiteSettings();

    SupplierRequestManager objSupplierRequestManager = new SupplierRequestManager();

    string RetailCompName = string.Empty;
    string RetailAddress1 = string.Empty;
    string RetailAddress2 = string.Empty;
    string RetailCity = string.Empty;
    string RetailState = string.Empty;
    string RetailZip = string.Empty;
    string RetailerCountry = string.Empty;
    string RetailerPhone = string.Empty;
    string RetailerExtn = string.Empty;
    string RetailerEmailId = string.Empty;
    string RetailerWebsite = string.Empty;
    string SupplierCompName = string.Empty;
    string SupplierAddress1 = string.Empty;
    string SupplierAddress2 = string.Empty;
    string SupplierCity = string.Empty;
    string SupplierState = string.Empty;
    string SupplierZip = string.Empty;
    string SupplierCountry = string.Empty;
    string SupplierPhone = string.Empty;
    string SupplierExtn = string.Empty;
    string SupplierFax = string.Empty;
    string SupplierEmailId = string.Empty;
    string SupplierWebsite = string.Empty;

    string SupplierContTitle = string.Empty;
    string SupplierContName = string.Empty;
    string SupplierConPos = string.Empty;
    string SupplierConMob = string.Empty;
    string SupplierConEmailId = string.Empty;

    string ReqToEmailId = string.Empty;
    string ReqCCEmailId = string.Empty;
    string Comments = string.Empty;
    string ReCaptcha_Secret = string.Empty;
    string sResponse = string.Empty;
    string ipAddress = string.Empty;
    string ipLocation = string.Empty;




    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";

        //deserialize the object
        JavaScriptSerializer jss = new JavaScriptSerializer();


        if (!string.IsNullOrEmpty(context.Request["RetailerCompName"]))
        {
            RetailCompName = context.Request["RetailerCompName"];
        }


        RetailCompName = context.Request["RetailerCompName"] != null ? Convert.ToString(context.Request["RetailerCompName"]) : string.Empty;
        RetailAddress1 = context.Request["RetailerAddress1"] != null ? Convert.ToString(context.Request["RetailerAddress1"]) : string.Empty;
        RetailAddress2 = context.Request["RetailerAddress2"] != null ? Convert.ToString(context.Request["RetailerAddress2"]) : string.Empty;
        RetailCity = context.Request["RetailerCity"] != null ? Convert.ToString(context.Request["RetailerCity"]) : string.Empty;
        RetailState = context.Request["ddlRetailStates"] != null ? Convert.ToString(context.Request["ddlRetailStates"]) : string.Empty;
        RetailZip = context.Request["RetailerZip"] != null ? Convert.ToString(context.Request["RetailerZip"]) : string.Empty;
        RetailerCountry = context.Request["RetailerCountry"] != null ? Convert.ToString(context.Request["RetailerCountry"]) : string.Empty;
        RetailerPhone = context.Request["RetailerPhone"] != null ? Convert.ToString(context.Request["RetailerPhone"]) : string.Empty;
        RetailerExtn = context.Request["RetailerPhoneExtn"] != null ? Convert.ToString(context.Request["RetailerPhoneExtn"]) : string.Empty;
        RetailerEmailId = context.Request["RetailerEmailID"] != null ? Convert.ToString(context.Request["RetailerEmailID"]) : string.Empty;
        RetailerWebsite = context.Request["RetailerWebsite"] != null ? Convert.ToString(context.Request["RetailerWebsite"]) : string.Empty;

        SupplierCompName = context.Request["SupplierCompName"] != null ? Convert.ToString(context.Request["SupplierCompName"]) : string.Empty;
        SupplierAddress1 = context.Request["SupplierAddress1"] != null ? Convert.ToString(context.Request["SupplierAddress1"]) : string.Empty;
        SupplierAddress2 = context.Request["SupplierAddress2"] != null ? Convert.ToString(context.Request["SupplierAddress2"]) : string.Empty;
        SupplierCity = context.Request["SupplierCity"] != null ? Convert.ToString(context.Request["SupplierCity"]) : string.Empty;
        SupplierState = context.Request["ddlSupplierStates"] != null ? Convert.ToString(context.Request["ddlSupplierStates"]) : string.Empty;
        SupplierZip = context.Request["SupplierZip"] != null ? Convert.ToString(context.Request["SupplierZip"]) : string.Empty;
        SupplierCountry = context.Request["SupplierCountry"] != null ? Convert.ToString(context.Request["SupplierCountry"]) : string.Empty;
        SupplierPhone = context.Request["SupplierPhone"] != null ? Convert.ToString(context.Request["SupplierPhone"]) : string.Empty;
        SupplierExtn = context.Request["SupplierPhoneExtn"] != null ? Convert.ToString(context.Request["SupplierPhoneExtn"]) : string.Empty;
        SupplierFax = context.Request["SupplierFax"] != null ? Convert.ToString(context.Request["SupplierFax"]) : string.Empty;
        SupplierEmailId = context.Request["SupplierEmailId"] != null ? Convert.ToString(context.Request["SupplierEmailId"]) : string.Empty;
        SupplierWebsite = context.Request["SupplierWebsite"] != null ? Convert.ToString(context.Request["SupplierWebsite"]) : string.Empty;
        SupplierContTitle = context.Request["SupplierContPerTitle"] != null ? Convert.ToString(context.Request["SupplierContPerTitle"]) : string.Empty;
        SupplierContName = context.Request["SupplierContName"] != null ? Convert.ToString(context.Request["SupplierContName"]) : string.Empty;
        SupplierConPos = context.Request["SupplierContPos"] != null ? Convert.ToString(context.Request["SupplierContPos"]) : string.Empty;
        SupplierConMob = context.Request["SupplierContMob"] != null ? Convert.ToString(context.Request["SupplierContMob"]) : string.Empty;
        SupplierConEmailId = context.Request["SupplierContEmailId"] != null ? Convert.ToString(context.Request["SupplierContEmailId"]) : string.Empty;
        ReqToEmailId = context.Request["ReqEmailTo"] != null ? Convert.ToString(context.Request["ReqEmailTo"]) : string.Empty;
        ReqCCEmailId = context.Request["ReqEmailCC"] != null ? Convert.ToString(context.Request["ReqEmailCC"]) : string.Empty;
        Comments = context.Request["comment"] != null ? Convert.ToString(context.Request["comment"]) : string.Empty;
        sResponse = context.Request["response"] != null ? Convert.ToString(context.Request["response"]) : string.Empty;
        ipAddress = outility.GetUserIP();
        ipLocation = outility.getIPLocation(this.outility.GetUserIP());

        string jsonResponse = string.Empty;
        if (Validate(context, sResponse))
        {
            try
            {
                sendRetailerEmail();
            }
            catch (Exception ex)
            {
                System.Web.HttpContext.Current.Response.Write(" sendRetailerEmail ->" + ex.ToString());
            }
            try
            {
                sendSupplierEmail();
                jsonResponse = "success";
            }
            catch (Exception ex)
            {
                System.Web.HttpContext.Current.Response.Write(" sendSupplierEmail ->" + ex.ToString());
            }
            try
            {
                sendAvalonEmail();
                jsonResponse = "success";
            }
            catch (Exception ex)
            {
                System.Web.HttpContext.Current.Response.Write(" sendAvalonEmail ->" + ex.ToString());
            }

        }
        else
        {
            jsonResponse = "fail";
        }
        //objSupplierRequestManager.SaveSupplierRequestDetails(RetailCompName, RetailAddress1, RetailAddress2, RetailCity, RetailState, RetailZip, RetailerCountry, RetailerPhone,
        //                                                     RetailerExtn, RetailerEmailId, RetailerWebsite, SupplierCompName, SupplierAddress1, SupplierAddress2,
        //                                                     SupplierCity, SupplierState, SupplierZip, SupplierCountry, SupplierPhone, SupplierExtn, SupplierFax,
        //                                                     SupplierEmailId, SupplierWebsite, SupplierContTitle, SupplierContName, SupplierConPos, SupplierConMob,
        //                                                     SupplierConEmailId, ReqToEmailId, ReqCCEmailId, Comments, ipAddress, ipLocation);

        string responseString = jss.Serialize(jsonResponse);
        context.Response.Write(responseString);
    }


    protected void sendRetailerEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = "<JewelExchange>" + " " + Constants.CONTACT_US_EMAIL;
        String sMailTo = RetailerEmailId;
        string pageURL = string.Empty;
        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        Mailer.Subject = replaceLocalVariable("Supplier Inventory Access Request Submitted To" + " - " + SupplierCompName + " - " + SupplierCity + ", " + SupplierState + " - " + " " + "[DATE]");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/SupplierRequest/RetailerCopy.html"));
        //Mailer.Body = replaceLocalVariable(this.readHtmlPage());
        Mailer.IsBodyHtml = true;
        ut.SendEmail(Mailer);
    }

    protected void sendSupplierEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = "<Avalon Solution>" + " " + Constants.CONTACT_US_EMAIL;
        String sMailTo = "";
        sMailTo = ReqToEmailId;
        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        Mailer.Headers.Add("Reply-To", "Avalon Solution");

        //For Multiple Email Recipients
        //string[] CCId = ReqCCEmailId.Split(',');
        //if (CCId != null)
        //{
        //    foreach (string CCEmail in CCId)
        //    {
        //        Mailer.CC.Add(new MailAddress(CCEmail)); //Adding Multiple CC Email Id
        //    }
        //}
        //Mailer.CC.Add(SupplierConEmailId);
        if (SupplierConEmailId != "")
        {
            Mailer.CC.Add(SupplierConEmailId);
        }
        Mailer.Subject = replaceLocalVariable("Inventory Access Request Received From" + " " + RetailCompName + " - " + RetailCity + ", " + RetailState + " - " + " " + "[DATE]");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/SupplierRequest/SupplierCopy.html"));

        Mailer.IsBodyHtml = true;
        ut.SendEmail(Mailer);
    }

    protected void sendAvalonEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = "<JewelExchange>" + " " + Constants.CONTACT_US_EMAIL;
        String sMailTo = "";
        sMailTo = Constants.JewelExchange_EMAIL;
        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        Mailer.Subject = replaceLocalVariable("Supplier Inventory Access Request Submitted By" + " - " + RetailCompName + " - " + RetailCity + ", " + RetailState + " - " + " " + "[DATE]");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/SupplierRequest/AvalonCopy.html"));

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

        strBody = strBody.Replace("[RetailerName]", RetailCompName);
        strBody = strBody.Replace("[RetailAddress1]", RetailAddress1);
        strBody = strBody.Replace("[RetailAddress2]", RetailAddress2);
        strBody = strBody.Replace("[RetailCity]", RetailCity);
        strBody = strBody.Replace("[RetailState]", RetailState);
        strBody = strBody.Replace("[RetailZip]", RetailZip);
        strBody = strBody.Replace("[RetailerPhone]", RetailerPhone);
        strBody = strBody.Replace("[RetailerExtn]", RetailerExtn);
        strBody = strBody.Replace("[RetailerEmailId]", RetailerEmailId);
        strBody = strBody.Replace("[RetailerWebsite]", RetailerWebsite);

        strBody = strBody.Replace("[SupplierName]", SupplierCompName);
        strBody = strBody.Replace("[SupplierAddress1]", SupplierAddress1);
        strBody = strBody.Replace("[SupplierAddress2]", SupplierAddress2);
        strBody = strBody.Replace("[SupplierCity]", SupplierCity);
        strBody = strBody.Replace("[SupplierState]", SupplierState);
        strBody = strBody.Replace("[SupplierZip]", SupplierZip);
        strBody = strBody.Replace("[SupplierCountry]", SupplierCountry);
        strBody = strBody.Replace("[SupplierPhone]", SupplierPhone);
        strBody = strBody.Replace("[SupplierExtn]", SupplierExtn);
        strBody = strBody.Replace("[SupplierFax]", SupplierFax);
        strBody = strBody.Replace("[SupplierEmailId]", SupplierEmailId);
        strBody = strBody.Replace("[SupplierWebsite]", SupplierWebsite);

        if (SupplierContTitle != "Select")
        {
            strBody = strBody.Replace("[SupplierContTitle]", SupplierContTitle);
        }
        else
        {
            strBody = strBody.Replace("[SupplierContTitle]", "");
        }
        if (SupplierContName != "")
        {
            strBody = strBody.Replace("[SuppliersContPerName]", "Dear " + SupplierContName + ",");
            strBody = strBody.Replace("[SuppliersCont Per Name]", SupplierContName);
        }
        else
        {
            strBody = strBody.Replace("[SuppliersContPerName]", "");
            strBody = strBody.Replace("[SuppliersCont Per Name]", "");
        }
        if (SupplierConPos != "Select")
        {
            strBody = strBody.Replace("[SupplierConPos]", SupplierConPos);
        }
        else
        {
            strBody = strBody.Replace("[SupplierConPos]", "");
        }
        strBody = strBody.Replace("[SupplierConMob]", SupplierConMob);
        strBody = strBody.Replace("[SupplierConEmailId]", SupplierConEmailId);

        strBody = strBody.Replace("[Comments]", Comments);

        strBody = strBody.Replace("[DATE]", cDate);
        strBody = strBody.Replace("[RequestDate]", cDate);
        strBody = strBody.Replace("[IP Address]", outility.GetUserIP());
        strBody = strBody.Replace("[IP Location]", outility.getIPLocation(this.outility.GetUserIP()));

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
