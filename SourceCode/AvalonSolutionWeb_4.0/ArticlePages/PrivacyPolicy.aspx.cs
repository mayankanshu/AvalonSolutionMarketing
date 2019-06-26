using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ArticlePages_PrivacyPolicy : System.Web.UI.Page
{
    public SiteSettings sitesetting = null;
    public Utility oUtility = null;
    int MicrowebsiteId = 1;
    string SEODescription = string.Empty;
    string SEOKeywords = string.Empty;
    string SEOTitle = string.Empty;
    protected void Page_Load(object sender, EventArgs e)
    {
        MicrowebsiteId = Constants.MicrowebsiteId;
        if (!IsPostBack)
        {

            SetSEOProperies();

        }

    }
    private void SetSEOProperies()
    {
        if (MicrowebsiteId == 1)
        {
            SEODescription = "ASHI respects your privacy and is committed to protecting your privacy. Our aim is to provide you a safe and secure surfing experience whenever you visit our website.";
            SEOKeywords = "";
            SEOTitle = Constants.Global_Website_Name + ": Our Privacy Policy";
        }

        if (MicrowebsiteId == 2)
        {
            SEODescription = "We respects your privacy and is committed to protecting your privacy. Our aim is to provide you a safe and secure surfing experience whenever you visit our website.";
            SEOKeywords = "";
            SEOTitle = Constants.Global_Website_Name + ": Our Privacy Policy";
        }
        if (MicrowebsiteId == 3)
        {
            SEODescription = "We respects your privacy and is committed to protecting your privacy. Our aim is to provide you a safe and secure surfing experience whenever you visit our website.";
            SEOKeywords = "";
            SEOTitle = "Our Privacy Policy for " + Constants.Global_Website_Name + "";
        }
        if (MicrowebsiteId == 4)
        {
            SEODescription = "We respects your privacy and is committed to protecting your privacy. Our aim is to provide you a safe and secure surfing experience whenever you visit our website.";
            SEOKeywords = "";
            SEOTitle = Constants.Global_Website_Name + ": Our Privacy Policy";
        }
        if (MicrowebsiteId == 5)
        {
            SEODescription = "We respects your privacy and is committed to protecting your privacy. Our aim is to provide you a safe and secure surfing experience whenever you visit our website.";
            SEOKeywords = "";
            SEOTitle = Constants.Global_Website_Name + ": Our Privacy Policy";
        }
        Page.MetaDescription = SEODescription;
        Page.MetaKeywords = SEOKeywords;
        Page.Title = ReplaceVariables(SEOTitle);
    }

   string ReplaceVariables(string str)
    {
        str = str.Replace("$COMPANY_NAME$", SiteSettings.COMPANY_NAME);
        //  str = str.Replace("$COMPANY_CITY$", SiteSettings.CITY);
        //  str = str.Replace("$YEARS_IN_BUSINESS$", sitesetting.YRS_IN_BUSINESS);
        return str;
    }
}