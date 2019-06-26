<%@ WebHandler Language="C#" Class="BrandCustom" %>

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

public class BrandCustom : IHttpHandler, IRequiresSessionState
{
    string BrandType = string.Empty;
    string BrandName = string.Empty;
    string BrandImageUrl = string.Empty;
    string BrandUrl = string.Empty;
    BrandCustomManager objBrandCustomManager = new BrandCustomManager();
    DataTable dt;
    string myJsonString;
    
    public void ProcessRequest (HttpContext context) {

        BrandType = context.Request.QueryString["BrandType"] != null ? Convert.ToString(context.Request.QueryString["BrandType"]) : string.Empty;
        BrandName = context.Request.QueryString["BrandName"] != null ? Convert.ToString(context.Request.QueryString["BrandName"]) : string.Empty;
        BrandImageUrl = context.Request.QueryString["BrandImageUrl"] != null ? Convert.ToString(context.Request.QueryString["BrandImageUrl"]) : string.Empty;
        BrandUrl = context.Request.QueryString["BrandUrl"] != null ? Convert.ToString(context.Request.QueryString["BrandUrl"]) : string.Empty;
        List<BrandCustomization> objBrandCustomList = new List<BrandCustomization>();
        objBrandCustomList = objBrandCustomManager.GetBrandCustomList(BrandType);
        string myJsonString = (new JavaScriptSerializer()).Serialize(objBrandCustomList);
        context.Response.Write(myJsonString);
    }
  
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}