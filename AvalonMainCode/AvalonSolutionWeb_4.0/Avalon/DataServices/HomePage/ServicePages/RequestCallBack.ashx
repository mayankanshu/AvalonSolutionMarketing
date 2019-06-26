<%@ WebHandler Language="C#" Class="RequestCallBack" %>

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

public class RequestCallBack : IHttpHandler, IRequiresSessionState
{
    Utility outility = new Utility();
    SiteSettings sitesettings = new SiteSettings();
    ContactUsManager objContactUsManager = new ContactUsManager();

    string Name = string.Empty;
    string Company = string.Empty;
    string Phone = string.Empty;
    string Email = string.Empty;
    string ipAddress = string.Empty;
    string ipLocation = string.Empty;
    
    public void ProcessRequest (HttpContext context) 
    {
        
        sitesettings = outility.intializeSiteSetting();
        
        Name = context.Request.QueryString["Name"] != null ? Convert.ToString(context.Request.QueryString["Name"]) : string.Empty;
        Company = context.Request.QueryString["Company"] != null ? Convert.ToString(context.Request.QueryString["Company"]) : string.Empty;
        Phone = context.Request.QueryString["Phone"] != null ? Convert.ToString(context.Request.QueryString["Phone"]) : string.Empty;
        Email = context.Request.QueryString["Email"] != null ? Convert.ToString(context.Request.QueryString["Email"]) : string.Empty;
        ipAddress = outility.GetUserIP();
        ipLocation = outility.getIPLocation(this.outility.GetUserIP());

        objContactUsManager.InsertRequestCallBack(Name, Company, Phone, Email, ipAddress, ipLocation);
        sendUserEmail();
        sendCompanyEmail();
        string messgage = "success";
        JavaScriptSerializer jss = new JavaScriptSerializer();
        string responseString = jss.Serialize(messgage);
        context.Response.Write(responseString);
    
    }
    
    protected void sendUserEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = "";
        String sMailTo = Email;
        sMailFrom = Constants.CONTACT_US_EMAIL;
        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        Mailer.Subject = replaceLocalVariable("Thank You for Requesting a Call Back from Avalon Solution");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/CallBack_User.html"));

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
        Mailer.Subject = replaceLocalVariable("Call Back Request from" + " " + Company + " " + "for Avalon Solution");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/CallBack_Ashi.html"));

        Mailer.IsBodyHtml = true;
        ut.SendEmail(Mailer);
    }


    protected String replaceLocalVariable(string strBody)
    {


        string cDate = DateTime.Today.ToString("MMM") + " " + DateTime.Today.ToString("dd") + ", " + DateTime.Today.ToString("yyyy");

        strBody = strBody.Replace("[Full Name]", Name);
        strBody = strBody.Replace("[Company Name]", Company);
        strBody = strBody.Replace("[Company]", Company);
        strBody = strBody.Replace("[DATE]", cDate);
        strBody = strBody.Replace("[Email Address]", Email);
        strBody = strBody.Replace("[Email Sent Date]", cDate);
        strBody = strBody.Replace("[Telephone]", Phone);
        strBody = strBody.Replace("[IP Location]", outility.getIPLocation(this.outility.GetUserIP()));
        strBody = strBody.Replace("[IP Address]", outility.GetUserIP());
        strBody = strBody.Replace("[WebRoot]", Constants.AvalonDataDesinTemplatesPath);
        strBody = strBody.Replace("[Request Date]", cDate);


       



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
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}