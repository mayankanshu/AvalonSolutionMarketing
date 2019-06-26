<%@ WebHandler Language="C#" Class="ScheduleDemo" %>

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

public class ScheduleDemo : IHttpHandler, IRequiresSessionState
{
    Utility outility = new Utility();
    SiteSettings sitesettings = new SiteSettings();
    ContactUsManager objContactUsManager = new ContactUsManager();
    
    string FullName = string.Empty;
    string Company = string.Empty;
    string Phone = string.Empty;
    string Email = string.Empty;
    string WebsiteUrl = string.Empty;
    string DemoDate = string.Empty;
    string DemoTime = string.Empty;
    string Comments = string.Empty;
    string JobTitle = string.Empty;
    string TimeZone = string.Empty;
    string ipAddress = string.Empty;
    string ipLocation = string.Empty;
    
    public void ProcessRequest (HttpContext context)
    {
        FullName = context.Request.QueryString["FullName"] != null ? Convert.ToString(context.Request.QueryString["FullName"]) : string.Empty;
        Company = context.Request.QueryString["Company"] != null ? Convert.ToString(context.Request.QueryString["Company"]) : string.Empty;
        Phone = context.Request.QueryString["Phone"] != null ? Convert.ToString(context.Request.QueryString["Phone"]) : string.Empty;
        Email = context.Request.QueryString["Email"] != null ? Convert.ToString(context.Request.QueryString["Email"]) : string.Empty;
        WebsiteUrl = context.Request.QueryString["WebsiteUrl"] != null ? Convert.ToString(context.Request.QueryString["WebsiteUrl"]) : string.Empty;
        DemoDate = context.Request.QueryString["DemoDate"] != null ? Convert.ToString(context.Request.QueryString["DemoDate"]) : string.Empty;
        DemoTime = context.Request.QueryString["DemoTime"] != null ? Convert.ToString(context.Request.QueryString["DemoTime"]) : string.Empty;
        Comments = context.Request.QueryString["Comments"] != null ? Convert.ToString(context.Request.QueryString["Comments"]) : string.Empty;
        JobTitle = context.Request.QueryString["JobTitle"] != null ? Convert.ToString(context.Request.QueryString["JobTitle"]) : string.Empty;
        TimeZone = context.Request.QueryString["TimeZone"] != null ? Convert.ToString(context.Request.QueryString["TimeZone"]) : string.Empty;
        ipAddress = outility.GetUserIP();
        ipLocation = outility.getIPLocation(this.outility.GetUserIP());
        
        objContactUsManager.SaveNewDemoScheduleDetails(FullName, Email, Phone, Company, WebsiteUrl, DemoDate, DemoTime, Comments, JobTitle, TimeZone, ipAddress, ipLocation);
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
        Mailer.Subject = replaceLocalVariable("Thank You for Scheduling a Website Demo with Avalon Solution -" + " " + "[Demo Date]" + " " + DemoTime + " " + TimeZone);
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/WebsiteDemo_User.html"));

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
        Mailer.Subject = replaceLocalVariable("Website Demo is scheduled with Avalon Solution | " + " " + Company + " " + "-" +" "+ FullName + " " + "-" + " " + "[Demo Date]");
        Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/WebsiteDemo_Ashi.html"));

        Mailer.IsBodyHtml = true;
        ut.SendEmail(Mailer);
    }


    protected String replaceLocalVariable(string strBody)
    {
        string cDate = DateTime.Today.ToString("MMM") + " " + DateTime.Today.ToString("dd") + ", " + DateTime.Today.ToString("yyyy");
        
        DateTime dt = Convert.ToDateTime(DemoDate);
        string demoDateEmail = dt.ToString("MMM") + " " + dt.ToString("dd") + "," + " " +  dt.ToString("yyyy");

        strBody = strBody.Replace("[Demo Time Zone]", TimeZone);
        strBody = strBody.Replace("[Position]", JobTitle);
        strBody = strBody.Replace("[Full Name]", FullName);
        strBody = strBody.Replace("[Company Name]", Company);
        strBody = strBody.Replace("[Company]", Company);
        strBody = strBody.Replace("[DATE]", cDate);
        strBody = strBody.Replace("[Email Address]", Email);
        strBody = strBody.Replace("[Website URL]", WebsiteUrl);
        strBody = strBody.Replace("[Demo Date]", demoDateEmail);
        strBody = strBody.Replace("[Demo Time]", DemoTime);
        strBody = strBody.Replace("[Time Zone]", TimeZone);
        strBody = strBody.Replace("[Comments]", Comments);
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