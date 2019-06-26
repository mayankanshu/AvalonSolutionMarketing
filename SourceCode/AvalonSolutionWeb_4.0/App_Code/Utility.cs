using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Text;
using System.Data;
using System.IO;
using System.Web.SessionState;
using System.Net.Mail;
using System.Web.Security;
using System.Text.RegularExpressions;
using System.Web.Caching;
using System.Web.Script.Serialization;
using System.Net.Http;
using System.Threading.Tasks;
using System.Net.Http.Headers;
using Newtonsoft.Json;



/// <summary>
/// Summary description for Utility
/// </summary>
/// <summary>
/// Summary description for Utility
/// </summary>
public class Utility : IRequiresSessionState
{
    SiteSettings sitesetting = new SiteSettings();

    public Utility()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public static bool IsSessionExpired()
    {
        if (HttpContext.Current.Session != null)
        {
            if (HttpContext.Current.Session.IsNewSession)
            {
                string CookieHeaders = HttpContext.Current.Request.Headers["Cookie"];
                if ((null != CookieHeaders) && (CookieHeaders.IndexOf("ASP.NET_SessionId") >= 0))
                {
                    // IsNewSession is true, but session cookie exists,
                    // so, ASP.NET session is expired
                    return true;
                }
            }
        }
        return false;
    }

    public SiteSettings intializeSiteSetting()
    {
        DataTable dt = null;
        HttpContext context = HttpContext.Current;



        if (context.Session["JEWLERINFO"] != null)
        {
            dt = ((DataTable)context.Session["JEWLERINFO"]);
          

            if (dt.Rows.Count > 0)
            {
                SiteSettings.JEWELERID = Convert.ToString(dt.Rows[0]["JewelerID"]);
                SiteSettings.STORELOGOPATH = Convert.ToString(dt.Rows[0]["StoreLogo"]);
               

                //sitesetting.isShowShopping = Convert.ToBoolean(dt.Rows[0]["IsShoppingBagActive"]);
                SessionStore.SetSessionValue(SessionStore.JEWELERID, dt.Rows[0]["JewelerId"]);
                SessionStore.SetSessionValue(SessionStore.JEWELSOFTID, dt.Rows[0]["JewelSoftId"]);
            }
        }
        return sitesetting;
    }










    public string GetUserNameFromCookie()
    {
        HttpCookie cookie = HttpContext.Current.Request.Cookies.Get("CustomerID");
        string getUserName = string.Empty;
        if (cookie == null)
        {
            cookie = new HttpCookie("CustomerID");

            Guid g;
            g = Guid.NewGuid();

            cookie.Value = g.ToString();
            cookie.Expires = DateTime.Now.AddYears(1);
            HttpContext.Current.Response.Cookies.Add(cookie);

            getUserName = cookie.Value;
        }
        else
        {
            cookie = HttpContext.Current.Request.Cookies.Get("CustomerID");
            getUserName = cookie.Value;
        }

        return getUserName;

    }


    public String GetUserIP()
    {
        //' This returns the True IP of the client calling the requested page
        //' Checks to see if HTTP_X_FORWARDED_FOR has a value then the client is operating via a proxy

        String userIP = HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

        if (userIP == null)
            userIP = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];

        if (userIP == null)
            userIP = HttpContext.Current.Request.ServerVariables["HTTP_CLIENT_IP"];

        return userIP;
    }
    public String GetUserLocation()
    {
        //String ipAddress = "117.196.178.223 ";
        if (HttpContext.Current.Session["ipLocation"] == null)
            HttpContext.Current.Session["ipLocation"] = getIPLocation(this.GetUserIP());
        return HttpContext.Current.Session["ipLocation"].ToString();
    }
    public String getIPLocation(String sIPAddress)
    {
        String httpPath = (String)System.Configuration.ConfigurationManager.AppSettings["httpPath"];
        String strQuery = httpPath + "&i=" + sIPAddress;
        //String strQuery = httpPath + "&i=61.246.139.66";
        // Create a 'WebRequest' object with the specified url. 
        WebRequest myWebRequest = WebRequest.Create(strQuery);
        // Send the 'WebRequest' and wait for response. 
        WebResponse myWebResponse = myWebRequest.GetResponse();
        // Obtain a 'Stream' object associated with the response object. 
        Stream ReceiveStream = myWebResponse.GetResponseStream();
        System.Text.Encoding encode = System.Text.Encoding.GetEncoding("utf-8");

        // Pipe the stream to a higher level stream reader with the required encoding format. 
        StreamReader readStream = new StreamReader(ReceiveStream, encode);
        String strResponse = readStream.ReadToEnd();
        // Console.WriteLine(strResponse);
        readStream.Close();

        // Release the resources of response object. 
        myWebResponse.Close();
        //        search for , and delete right string
        int indexOfExtn = strResponse.LastIndexOf(',');
        String sImageExt = strResponse.Remove(indexOfExtn);
        indexOfExtn = sImageExt.LastIndexOf(',');
        sImageExt = sImageExt.Remove(indexOfExtn);

        //set order
        return this.setStringOrder(sImageExt);
    }
    public String setStringOrder(String str)
    {
        string[] split = str.Split(',');
        //0 index is for Country
        //1 index is for state
        //2 index is for city
        String strCorrectOrder = split[2].ToString() + ", " + split[1].ToString() + ", " + split[0].ToString();
        return strCorrectOrder;

    }

    /// <summary>
    /// Method for sending emails
    /// </summary>
    /// <param name="message"></param>
    public void SendEmail(MailMessage message)
    {
        string SmtpServer = System.Configuration.ConfigurationManager.AppSettings["SMTPServerName"];
        int smtpPort = Int16.Parse(System.Configuration.ConfigurationManager.AppSettings["SMTPPort"]);
        string mailRequiredLogin = System.Configuration.ConfigurationManager.AppSettings["mailRequiredLogin"];
        string mailUser = System.Configuration.ConfigurationManager.AppSettings["mailUser"];
        string mailPassword = System.Configuration.ConfigurationManager.AppSettings["mailUserPassword"];

        //string IsSendEmail = System.Configuration.ConfigurationManager.AppSettings["IsSendEmail"];
        //if (IsSendEmail.Trim().ToLower() == "N".ToLower())
        //  return;
       
            SmtpClient emailClient = null;
            emailClient = new SmtpClient(SmtpServer, smtpPort);
            if (mailRequiredLogin != null && mailRequiredLogin.Equals("Y"))
            {
                emailClient.UseDefaultCredentials = false;
                emailClient.EnableSsl = true;
                emailClient.Credentials = new System.Net.NetworkCredential(mailUser, mailPassword);
            }
            string sEmailHeader = "\nSMTP : " + SmtpServer + ":" + smtpPort.ToString() + "\tRequired Login : " + mailRequiredLogin + "\tLogin User : " + mailUser + "\tPassword : " + mailPassword + "\nFrom : " + message.From + "\nTo :" + message.To + "\nSubject : " + message.Subject + "\nBody : " + message.Body;

            try
            {
                emailClient.Send(message);
            }
            catch (Exception e)
            {
                throw (e);
            }
        }
   


    protected void RequestLogin()
    {
        //this.Response.Redirect(FormsAuthentication.LoginUrl + "?ReturnUrl=" + this.Request.Url.PathAndQuery);
    }


    public string FormatPhone(object phoneNo)
    {
        string formattedPhone = phoneNo.ToString();
        // Extracting numbers from the string
        formattedPhone = Regex.Replace(formattedPhone, "[^0-9]", "");
        // The format is in third parameter of the replace function
        formattedPhone = Regex.Replace(formattedPhone, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3");

        return formattedPhone;
    }





    public String toProperCase(String text)
    {
        if (text == null) return text;

        String[] words = text.Split(' ');
        for (int i = 0; i < words.Length; i++)
        {
            if (words[i].Length == 0) continue;

            Char firstChar = Char.ToUpper(words[i][0]);
            String rest = "";
            if (words[i].Length > 1)
            {
                rest = words[i].Substring(1).ToLower();
            }
            words[i] = firstChar + rest;
        }
        return String.Join(" ", words);
    }

}