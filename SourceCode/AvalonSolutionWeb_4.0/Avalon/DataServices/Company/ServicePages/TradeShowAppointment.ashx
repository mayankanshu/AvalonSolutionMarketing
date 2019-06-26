<%@ WebHandler Language="C#" Class="TradeShowAppointment" %>

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


public class TradeShowAppointment : IHttpHandler, IRequiresSessionState
{
    Utility outility = new Utility();
    SiteSettings sitesettings = new SiteSettings();
    TradeShowManager objTradeShowManager = new TradeShowManager();
    
    string ContactPerson = string.Empty;
    string StoreName = string.Empty;
    string City = string.Empty;
    string State = string.Empty;
    string Phone = string.Empty;
    string Email = string.Empty;
    string AppointmentDate = string.Empty;
    string AppointmentTime = string.Empty;
    string AvalonCustomer = string.Empty;
    string TradeShow = string.Empty;
    string Comments = string.Empty;
    string BoothNo = string.Empty;
    string ReCaptcha_Secret = string.Empty;
    string sResponse = string.Empty;
    string ipAddress = string.Empty;
    string ipLocation = string.Empty;
    
    public void ProcessRequest (HttpContext context) 
    {
        
        sitesettings = outility.intializeSiteSetting();

        ContactPerson = context.Request.QueryString["ContactPerson"] != null ? Convert.ToString(context.Request.QueryString["ContactPerson"]) : string.Empty;
        StoreName = context.Request.QueryString["StoreName"] != null ? Convert.ToString(context.Request.QueryString["StoreName"]) : string.Empty;
        City = context.Request.QueryString["City"] != null ? Convert.ToString(context.Request.QueryString["City"]) : string.Empty;
        State = context.Request.QueryString["State"] != null ? Convert.ToString(context.Request.QueryString["State"]) : string.Empty;
        Phone = context.Request.QueryString["Phone"] != null ? Convert.ToString(context.Request.QueryString["Phone"]) : string.Empty;
        Email = context.Request.QueryString["Email"] != null ? Convert.ToString(context.Request.QueryString["Email"]) : string.Empty;
        AppointmentDate = context.Request.QueryString["AppointmentDate"] != null ? Convert.ToString(context.Request.QueryString["AppointmentDate"]) : string.Empty;
        AppointmentTime = context.Request.QueryString["AppointmentTime"] != null ? Convert.ToString(context.Request.QueryString["AppointmentTime"]) : string.Empty;
        AvalonCustomer = context.Request.QueryString["AvalonCustomer"] != null ? Convert.ToString(context.Request.QueryString["AvalonCustomer"]) : string.Empty;
        TradeShow = context.Request.QueryString["TradeShow"] != null ? Convert.ToString(context.Request.QueryString["TradeShow"]) : string.Empty;
        Comments = context.Request.QueryString["Comments"] != null ? Convert.ToString(context.Request.QueryString["Comments"]) : string.Empty;
        BoothNo = context.Request.QueryString["BoothNo"] != null ? Convert.ToString(context.Request.QueryString["BoothNo"]) : string.Empty;
        sResponse = context.Request.QueryString["response"] != null ? Convert.ToString(context.Request.QueryString["response"]) : string.Empty;
        ipAddress = outility.GetUserIP();
        ipLocation = outility.getIPLocation(this.outility.GetUserIP());
        objTradeShowManager.SaveNewTradeShowAppointment(ContactPerson, StoreName, City, State, Phone, Email, AppointmentDate, AppointmentTime, AvalonCustomer, TradeShow, Comments, ipAddress, ipLocation);

        showname();
        
        string jsonResponse = string.Empty;
        
        if (Validate(context, sResponse))
        {
            try
            {
                sendUserEmail();
                //jsonResponse = "success";
                jsonResponse = TradeShow;

            }
            catch (Exception ex)
            {
                System.Web.HttpContext.Current.Response.Write(" Senduseremail ->" + ex.ToString());
            }
            try
            {
                sendCompanyEmail();
                jsonResponse = TradeShow;
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
      
        JavaScriptSerializer jss = new JavaScriptSerializer();
        string responseString = jss.Serialize(jsonResponse);
        context.Response.Write(responseString);
        
    }


    public void showname()
    {
        if (TradeShow == "Luxury Show" || TradeShow == "Luxury 2019 Las Vegas Show")
        {
            TradeShow = "Luxury Show";
        }
        else if (TradeShow == "JCK Show" || TradeShow == "JCK 2019 Las Vegas Show")
        {
            TradeShow = "Luxury / JCK Show";
        }
        else if (TradeShow == "AGS CONCLAVE 2018 SPRING SHOW")
        {
            TradeShow = "AGS Conclave 2018 Spring Show";
        }
    
    }

    
    
    protected void sendUserEmail()
    {
        Utility ut = new Utility();
        String sMailFrom = "";
        String sMailTo = Email;
        sMailFrom = Constants.CONTACT_US_EMAIL;
        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        if (AppointmentDate == "Will Stop By" || AppointmentDate == "Will Stop By" && AppointmentTime == "Will Stop By")
        {
            Mailer.Subject = replaceLocalVariable("Appointment Scheduled with Avalon Solution for the" + "  " + TradeShow + " " + "for Any Day");
        }
        else if (AppointmentTime == "Will Stop By")
        {
            Mailer.Subject = replaceLocalVariable("Appointment Scheduled with Avalon Solution for the" + "  " + TradeShow + " " + "on" + " " + AppointmentDate + " " + "for Any Time");
        }
        else
        {
            Mailer.Subject = replaceLocalVariable("Appointment Scheduled with Avalon Solution for the" + "  " + TradeShow + " " + "on" + " " + AppointmentDate + " " + "at" + " " + AppointmentTime);
        }
        if (TradeShow == "Luxury Show" || TradeShow == "Luxury / JCK Show")
        {
            Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/LuxuryAppointmentWithMap_User.html"));
        }
        else if (BoothNo != null && BoothNo != "")
        {
           Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/AppointmentWithBoothNo_User.html"));
        }
        else
        {
            Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/Appointment_User.html"));
        }

        Mailer.IsBodyHtml = true;
        ut.SendEmail(Mailer);
    }

    protected void sendCompanyEmail()
    {
        
        Utility ut = new Utility();
        String sMailFrom = String.Empty;

        String sMailTo = "";
        sMailTo = Constants.CONTACT_US_EMAIL;
        //sMailTo = "avalontester4@gmail.com";

        sMailFrom = Convert.ToString(new MailAddress(sMailTo, "On behalf of " + StoreName.Trim()));
        
        MailMessage Mailer = new System.Net.Mail.MailMessage(sMailFrom, sMailTo);
        com.ashidiamonds.service.Service1 obj = null;
        if (HttpContext.Current.Cache["SaleManData"] == null)
        {
            obj = new com.ashidiamonds.service.Service1();
            HttpContext.Current.Cache["SaleManData"] = (com.ashidiamonds.service.Service1)obj;
        }
        else
        {
            obj = (com.ashidiamonds.service.Service1)HttpContext.Current.Cache["SaleManData"];
        }
        //string statecode = State.Substring(0, 2);
        string SalesManEmail = obj.GetSalesManEmailIDByStateCode(Convert.ToString(State), "ContactUs", "IDC_B2B");
        //SalesManEmail = "avalontester2@gmail.com";
        if (string.IsNullOrWhiteSpace(SalesManEmail) && SalesManEmail == "")
        {
            SalesManEmail = System.Configuration.ConfigurationManager.AppSettings.Get("SalesmanAshi").ToString(); // "ORDERS@ASHIDIAMONDS.COM";
        }

        Mailer.CC.Add(SalesManEmail);
        Mailer.CC.Add("Shows@AshiDiamonds.com");
        Mailer.Headers.Add("Reply-To", "AVALON SOLUTION");
        if (AppointmentDate == "Will Stop By" || AppointmentDate == "Will Stop By" && AppointmentTime == "Will Stop By")
        {
            Mailer.Subject = replaceLocalVariable(StoreName + " " + "-" + " " + ContactPerson + " " + "-" + " " + "Appointment Scheduled with Avalon Solution for" + "  " + TradeShow + " " + "for Any Day");
            Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/Appointment_Ashi_forAnyDay.html"));
        }
        else if (AppointmentTime == "Will Stop By")
        {
            Mailer.Subject = replaceLocalVariable(StoreName + " " + "-" + " " + ContactPerson + " " + "-" + " " + "Appointment Scheduled with Avalon Solution for" + "  " + TradeShow + " " + "on" + " " + AppointmentDate + " " + "for Any Time");
            Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/Appointment_Ashi_forAnyTime.html"));
        }
        else
        {
            Mailer.Subject = replaceLocalVariable(StoreName + " " + "-" + " " + ContactPerson + " " + "-" + " " + "Appointment Scheduled with Avalon Solution for" + "  " + TradeShow + " " + "on" + " " + AppointmentDate + " " + "at" + " " + AppointmentTime);
            Mailer.Body = replaceLocalVariable(this.readHtmlPage(Constants.Web_Root + "/EmailPages/AvalonMarketing/Appointment_Ashi.html"));
        }
        
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
        strBody = strBody.Replace("[Booth No]", BoothNo);
        strBody = strBody.Replace("[Full Name]", ContactPerson);
        strBody = strBody.Replace("[Contact Person Name]", ContactPerson);
        strBody = strBody.Replace("[Contact Person]", ContactPerson);
        strBody = strBody.Replace("[ShowName]", TradeShow);
        strBody = strBody.Replace("[Email]", Email);
        strBody = strBody.Replace("[Comments]", Comments);
        strBody = strBody.Replace("[AppointmentDate]", AppointmentDate);
        strBody = strBody.Replace("[AppointmentTime]", AppointmentTime);
        strBody = strBody.Replace("[Company Name]", StoreName);
        strBody = strBody.Replace("[Store Name]", StoreName);

        strBody = strBody.Replace("[Comments]", Comments);
        strBody = strBody.Replace("[Show]", TradeShow);
        strBody = strBody.Replace("[Telephone]", Phone);
        strBody = strBody.Replace("[DATE]", cDate);
        strBody = strBody.Replace("[RequestEmailId]", Email);
        strBody = strBody.Replace("[Email Address]", Email);
        strBody = strBody.Replace("[Email Sent Date]", cDate);
        strBody = strBody.Replace("[City]", City);
        strBody = strBody.Replace("[State]", State);
        strBody = strBody.Replace("[Telephone]", Phone);
        strBody = strBody.Replace("[IP Location]", outility.getIPLocation(this.outility.GetUserIP()));
        strBody = strBody.Replace("[IP Address]", outility.GetUserIP());
        strBody = strBody.Replace("[WebRoot]", Constants.AvalonDataDesinTemplatesPath);
        strBody = strBody.Replace("[Request Date]", cDate);
        strBody = strBody.Replace("[Appointment Date]", AppointmentDate);
        strBody = strBody.Replace("[Appointment Time]", AppointmentTime);
        strBody = strBody.Replace("[Existing Avalon Customer]", AvalonCustomer);

        if (TradeShow == "Luxury Show" || TradeShow == "Luxury 2019 Las Vegas Show") 
        {
            //strBody = strBody.Replace("[ShowName]", "Luxury Show");
            strBody = strBody.Replace("[ShowName]", "Luxury 2019 Las Vegas Show");
            strBody = strBody.Replace("[LuxShowName]", "Luxury / JCK Show");
        }
        else if (TradeShow == "JCK Show" || TradeShow == "Luxury / JCK Show" || TradeShow == "JCK 2019 Las Vegas Show")
        {
            strBody = strBody.Replace("[ShowName]", "Luxury / JCK Show");
            //strBody = strBody.Replace("[ShowName]", "JCK Las Vegas 2018 Show");
            strBody = strBody.Replace("[LuxShowName]", "Luxury / JCK Show");
        }
        //else if (TradeShow == "RJO 2019 Winter Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "RJO 2019 Winter Show");
        //}
        //else if (TradeShow == "Centurion 2019 Scottsdale Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "Centurion 2019 Scottsdale Show");
        //}
        //else if (TradeShow == "CBG 2019 Winter Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "CBG 2019 Winter Show");
        //}
        //else if (TradeShow == "IJO 2019 Winter Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "IJO 2019 Winter Show");
        //}
        //else if (TradeShow == "SJTA Atlanta 2019 Spring Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "SJTA Atlanta 2019 Spring Show");
        //}
        //else if (TradeShow == "AGS Conclave 2019 Spring Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "AGS Conclave 2019 Spring Show");
        //}
        //else if (TradeShow == "CBG 2019 Fall Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "CBG 2019 Fall Show");
        //}      
        //else if (TradeShow == "CBG 2018 Las Vegas Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "CBG 2018 Las Vegas Show");
        //}
        //else if (TradeShow == "AGS Conclave 2018 Spring Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "AGS Conclave 2018 Spring Show");
        //}
        //else if (TradeShow == "RJO 2018 Fall Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "RJO 2018 Fall Show");
        //}
        //else if (TradeShow == "IJO 2018 Fall Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "IJO 2018 Fall Show");
        //}
        //else if (TradeShow == "SJTA Atlanta 2018 Fall Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "SJTA Atlanta 2018 Fall Show");
        //}
        //else if (TradeShow == "Select 2018 Foxwood Fall Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "Select 2018 Foxwood Fall Show");
        //}
        //else if (TradeShow == "Select 2018 Dallas Fall Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "Select 2018 Dallas Fall Show");
        //}
        //else if (TradeShow == "Centurion South Beach 2018 Show")
        //{
        //    strBody = strBody.Replace("[ShowName]", "Centurion South Beach 2018 Show");
        //}
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