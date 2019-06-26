using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Clients_Why_Online : System.Web.UI.Page
{
    string SEODescription = string.Empty;
    string SEOKeywords = string.Empty;
    string SEOTitle = string.Empty;

    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {
            SetSEOProperies();
        }
    }

    #region Methods
    private void SetSEOProperies()
    {
        //string SEODescription = "Receive Free reminder to check & Clean your Jewelry, Excellent for Lifetime Diamond Guarantee holders and all others Jewelry too!";
        //string SEOKeywords = "Check & Clean, Check & Clean Jewelry, Reminder Service, Free Reminder, Reminder Advantage Service, Clean Jewelry, Jewelry Services";
        string SEOTitle = "Avalon Solution: Why Online";

        Page.MetaDescription = SEODescription;
        Page.MetaKeywords = SEOKeywords;
        Page.Title = SEOTitle;
    }
    #endregion
}