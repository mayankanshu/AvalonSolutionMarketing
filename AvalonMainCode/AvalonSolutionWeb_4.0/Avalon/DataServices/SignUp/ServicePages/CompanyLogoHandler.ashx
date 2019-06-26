<%@ WebHandler Language="C#" Class="CompanyLogoHandler" %>

using System;
using System.Web;
using System.IO;

public class CompanyLogoHandler : IHttpHandler {
    string formatted = string.Empty;
    public void ProcessRequest (HttpContext context) {
        try
        {
            formatted= context.Request.QueryString["formatted"] != null ? Convert.ToString(context.Request.QueryString["formatted"]) : string.Empty;
            if (context.Request.Files.Count > 0)
            {
                HttpFileCollection SelectedFiles = context.Request.Files;
                for (int i = 0; i < SelectedFiles.Count; i++)
                {
                    bool isSuccess = false;
                    string serverMessage = string.Empty;
                    var fileOne = context.Request.Files[i];
                    fileOne.SaveAs(context.Server.MapPath("~/CompanyLogo/" + formatted + "_" + fileOne.FileName));
                }
            }
        }
        catch(Exception ex)
        {
            throw ex;
        }
    }


    public bool IsReusable {
        get {
            return false;
        }
    }

}