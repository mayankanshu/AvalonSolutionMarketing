using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ASHI.Customer.Business;

public partial class Portfolio_Product_Presentation : System.Web.UI.Page
{
    public SiteSettings sitesetting = null;
    public Utility oUtility = null;
    int MicrowebsiteId = 1;
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
        ContactUsManager objContactUsManager = new ContactUsManager();
        string PageName = "Product Presentation";
        List<SEODetails> objSEODetailsList = new List<SEODetails>();
        SEODetails objSEODetails = new SEODetails();
        string SEODescription = "";
        string SEOKeywords = "";
        string SEOTitle = "";
        objSEODetailsList = objContactUsManager.GetSEODetails(PageName);

        for (int i = 0; i < objSEODetailsList.Count; i++)
        {
            SEODescription = objSEODetailsList[i].MetaDescription;
            SEOKeywords = objSEODetailsList[i].MetaKeywords;
            SEOTitle = objSEODetailsList[i].MetaTitle;
        }

        Page.MetaDescription = SEODescription;
        Page.MetaKeywords = SEOKeywords;
        Page.Title = SEOTitle;
    }
    #endregion
}