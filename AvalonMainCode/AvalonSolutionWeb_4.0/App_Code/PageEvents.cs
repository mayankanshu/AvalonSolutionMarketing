using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

/// <summary>
/// Summary description for PageEvents
/// </summary>

public class PageEvents : System.Web.UI.Page, IRoutablePage
{

    #region IRoutablePage Members

    public System.Web.Routing.RequestContext requestContext;

    public System.Web.Routing.RequestContext RequestContext
    {
        set { requestContext = value; }
    }

    #endregion
    protected void Page_PreInit(object sender, EventArgs e)
    {
        //string clientLogo = string.Empty;
        //string OLDROUTEVALUE = string.Empty;
        //string clientName = Convert.ToString(RouteValue("CLIENT_URL"));
        //OLDROUTEVALUE = clientName;
        //string reuslt = Utility.PagePreInit(clientName);
        //if (!string.IsNullOrWhiteSpace(reuslt))
        //{
        //    if (Convert.ToString(reuslt).Trim().ToLower().Equals("nomatch".Trim().ToLower()))
        //    {
        //        if (SessionStore.GetSessionValue(SessionStore.CLIENTNAME) != null)
        //        {
        //            clientName = Convert.ToString(SessionStore.GetSessionValue(SessionStore.CLIENTNAME));
        //            Utility.clearSessionValues();
        //            string bwUrl = Request.Url.AbsoluteUri;
        //            bwUrl = bwUrl.Replace(OLDROUTEVALUE, clientName);
        //            Response.Redirect(bwUrl);
        //        }

        //    }
        //}

        //
    }
    protected object RouteValue(string key)
    {
        if (requestContext != null && requestContext.RouteData != null)
        {
            return requestContext.RouteData.Values[key];
        }
        return null;
    }
}