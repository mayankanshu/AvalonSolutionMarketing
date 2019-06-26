using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ArticlePages_AboutAshi : System.Web.UI.Page
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

        if (MicrowebsiteId == 1)
        {

            if (ClientURL != null)
            {

                SEOTitle = CompanyName.ToString() + "- " +Constants.Global_Website_Name+ ": About Us";
            }
            else
            {
                SEOTitle = Constants.Global_Website_Name+ " : About ASHI Diamonds - Premier Diamond & Bridal Jewelry Manufacture";
            }
        }

        if (MicrowebsiteId == 2)
        {

            SEOKeywords = "";
            if (ClientURL != null)
            {
                SEODescription = Constants.Global_Website_Name+ " : Learn more about " + CompanyName.ToString();
                SEOTitle = Constants.Global_Website_Name + " : Learn more about " + CompanyName.ToString();
            }
            else
            {
                SEODescription = Constants.Global_Website_Name + " - Learn more about ASHI - Premier Bridal & Diamond Fashion Jewelry Manufacturer";
                SEOTitle = Constants.Global_Website_Name + " - Learn more about ASHI - Premier Bridal & Diamond Fashion Jewelry Manufacturer";
            }
        }
        if (MicrowebsiteId == 3)
        {

            SEOKeywords = "";
            if (ClientURL != null)
            {
                SEODescription = "Learn more about" + CompanyName.ToString() + " - Premier Bridal & Diamond Fashion Jewelry Retailer";
                SEOTitle = "Learn more about" + CompanyName.ToString() +  " - Premier Bridal & Diamond Fashion Jewelry Retailer" ;
            }
            else
            {
                SEODescription = "Learn more about ASHI - Premier Bridal & Diamond Fashion Jewelry Manufacturer.";
                SEOTitle = "Learn more about ASHI - Premier Bridal & Diamond Fashion Jewelry Manufacturer";
            }
        }
        if (MicrowebsiteId == 4)
        {

            SEOKeywords = "";
            if (ClientURL != null)
            {
                SEODescription = Constants.Global_Website_Name + " : Learn more about " + CompanyName.ToString();
                SEOTitle = Constants.Global_Website_Name + " : Learn more about " + CompanyName.ToString();
            }
            else
            {
                SEODescription = Constants.Global_Website_Name + " - Learn more about ASHI - Premier Bridal & Diamond Fashion Jewelry Manufacturer.";
                SEOTitle = Constants.Global_Website_Name + " - Learn more about ASHI - Premier Bridal & Diamond Fashion Jewelry Manufacturer";
            }
        }

        if (MicrowebsiteId == 5)
        {

            SEOKeywords = "";
            if (ClientURL != null)
            {
                SEODescription = Constants.Global_Website_Name + " : Learn more about " + CompanyName.ToString();
                SEOTitle = Constants.Global_Website_Name + " : Learn more about " + CompanyName.ToString();
            }
            else
            {
                SEODescription = Constants.Global_Website_Name + " - Learn more about ASHI - Premier Bridal & Diamond Fashion Jewelry Manufacturer.";
                SEOTitle = Constants.Global_Website_Name + " - Learn more about ASHI - Premier Bridal & Diamond Fashion Jewelry Manufacturer";
            }
        }
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