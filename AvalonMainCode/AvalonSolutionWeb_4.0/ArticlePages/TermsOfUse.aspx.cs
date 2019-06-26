﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ArticlePages_TermsOfUse : System.Web.UI.Page
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
        oUtility = new Utility();
        sitesetting = oUtility.intializeSiteSetting();
        //SiteSettings sitesetting = new SiteSettings();
        var ClientURL = sitesetting.CLIENTURL;
        var CompanyName = SiteSettings.COMPANY_NAME;

        if (MicrowebsiteId == 1)
        {
            SEODescription = "Please read these Terms of Use carefully before using this Website. By using this Website, you signify your agreement to these Terms of Use.";
            SEOKeywords = "";
            SEOTitle = Constants.Global_Website_Name + ": Our Terms of Use";
        }
        if (MicrowebsiteId == 2)
        {
            SEODescription = "Please read these Terms of Use carefully before using this Website. By using this Website, you signify your agreement to these Terms of Use.";
            SEOKeywords = "";
            SEOTitle = Constants.Global_Website_Name + ": Our Terms of Use";
        }
        if (MicrowebsiteId == 3)
        {
            SEODescription = "Please read these Terms of Use carefully before using this Website. By using this Website, you signify your agreement to these Terms of Use.";
            SEOKeywords = "";
            SEOTitle = "Our Terms of Use for " + Constants.Global_Website_Name + "";
        }
        if (MicrowebsiteId == 4)
        {
            SEODescription = "Please read these Terms of Use carefully before using this Website. By using this Website, you signify your agreement to these Terms of Use.";
            SEOKeywords = "";
            SEOTitle = Constants.Global_Website_Name + ": Our Terms of Use";
        }
        if (MicrowebsiteId == 5)
        {
            SEODescription = "Please read these Terms of Use carefully before using this Website. By using this Website, you signify your agreement to these Terms of Use.";
            SEOKeywords = "";
            SEOTitle = Constants.Global_Website_Name + ": Our Terms of Use";
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