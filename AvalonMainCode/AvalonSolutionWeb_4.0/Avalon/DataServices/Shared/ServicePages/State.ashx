<%@ WebHandler Language="C#" Class="State" %>

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

public class State : IHttpHandler {

    public void ProcessRequest(HttpContext context)
    
    {

        DataTable dtState = null;
        ContactUsManager objContactUsManager = new ContactUsManager();
        dtState = objContactUsManager.GetAllStates();
        UtilityMethods um = new UtilityMethods();
        string sJSON = um.CreateJsonParameters(dtState);

        if (sJSON.Length > 10)
            //setCookies(); 

            context.Response.Write(sJSON);

    }
    private string CallService(string request)
    {
        HttpWebResponse webResponse;
        try
        {
            HttpWebRequest webRequest = WebRequest.Create(request) as HttpWebRequest;
            webResponse = webRequest.GetResponse() as HttpWebResponse;
            if (!webRequest.HaveResponse ||
                  (webResponse.StatusCode != HttpStatusCode.OK
                     && webResponse.StatusCode != HttpStatusCode.Accepted))
            {
                throw new Exception();
            }
            StreamReader reader = new StreamReader(webResponse.GetResponseStream());
            string responseString = reader.ReadToEnd();
            reader.Close();
            return responseString;
        }

        catch
        {
            return "";
        }


    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}