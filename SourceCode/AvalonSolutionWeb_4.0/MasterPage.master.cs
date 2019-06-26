using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using JewelExchangeEntities.DTO;


public partial class MasterPage : System.Web.UI.MasterPage
{
    public SiteSettings sitesetting = null;
    public Boolean InB2CC = false;
    public Utility oUtility = null;
    string ClientUrl = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {

        if (! Page.IsPostBack)
        {
            oUtility = new Utility();
            sitesetting = oUtility.intializeSiteSetting();
            
            if (sitesetting.CLIENTURL != null)
            {
                Session["CLIENT_URL"] = (string)sitesetting.CLIENTURL;
                HttpCookie cookie = new HttpCookie("UserName");
                cookie["UserName"] = (string)sitesetting.CLIENTURL;
                cookie.Expires = DateTime.Now.AddDays(7);
                Response.Cookies.Add(cookie);
                string weburl = HttpContext.Current.Request.Url.AbsoluteUri;
                string[] urlstring = weburl.Split('/');

                for (int i = 0; i <= urlstring.Length - 1; i++)
                {
                    if (urlstring[i].ToString().ToLower().Trim() == sitesetting.CLIENTURL.ToLower().Trim())
                    {
                        InB2CC = true;
                        break;
                    }
                }

                if (InB2CC == false)
                {
                    weburl = Constants.Web_Root + "/" + sitesetting.CLIENTURL;
                    Response.Redirect(weburl, false);
                }


            }
          

        }
    }


 
       
    
}
