using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ArticlePages_DiamondEducation : System.Web.UI.Page
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
            //oUtility = new Utility();
            //sitesetting = oUtility.intializeSiteSetting();
            SetSEOProperies();
        }

    }

    private void SetSEOProperies()
    {
        oUtility = new Utility();
        sitesetting = oUtility.intializeSiteSetting();
        //SiteSettings sitesetting = new SiteSettings();
        var ClientURL = sitesetting.CLIENTURL;
        var CompanyName = SiteSettings.COMPANY_NAME;


      
        Page.MetaDescription = SEODescription;
        Page.MetaKeywords = SEOKeywords;
        Page.Title = ReplaceVariables(SEOTitle);
    }
    string ReplaceVariables(string str)
    {
        str = str.Replace("$COMPANY_NAME$", SiteSettings.COMPANY_NAME);
        // str = str.Replace("$COMPANY_CITY$", SiteSettings.CITY);
        // str = str.Replace("$YEARS_IN_BUSINESS$", SiteSettings.YRS_IN_BUSINESS);
        return str;
    }
}