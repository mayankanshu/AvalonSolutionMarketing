<%@ WebHandler Language="C#" Class="TradeShowDetails" %>

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
using System.Collections.Generic;

public class TradeShowDetails : IHttpHandler, IRequiresSessionState
{
    
    DataTable dt;
    string myJsonString;
    string Id = string.Empty;
    public void ProcessRequest (HttpContext context) {

        Id = context.Request.QueryString["Id"] != null ? Convert.ToString(context.Request.QueryString["Id"]) : string.Empty;
        TradeShowManager objTradeShowManager = new TradeShowManager();
        List<TradeShow> objTradeShowList = new List<TradeShow>();
        if (Id !="")
        {
            objTradeShowList = objTradeShowManager.GetTradeShowDetailsOnPopUp(Id);
           
           
        }
        else
        {
            objTradeShowList = objTradeShowManager.GetTradeShowDetails();
           
        }
        string myJsonString = (new JavaScriptSerializer()).Serialize(objTradeShowList);
        context.Response.Write(myJsonString);
        
        
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}