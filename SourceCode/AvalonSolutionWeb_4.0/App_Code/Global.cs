using System;
using System.Threading;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using System.Web.Script.Serialization;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Routing;
using JewelExchangeEntities.DTO;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using JewelExchangeEntities.Extensions;
using System.Data;
//System.Web.UI.HtmlControls
/// <summary>
/// Summary description for Global
/// </summary>
public class Global : System.Web.HttpApplication
{
    Utility oUtility = new Utility();

    void Application_Start(object sender, EventArgs e)
    {
        // Code that runs on application startup
        //HtmlGenericControl js = new HtmlGenericControl("script");
        //js.Attributes["type"] = "text/javascript";
        // js.Attributes["src"] = "jscript/jquery.js";
        //Page.Header.Controls.Add(js);

        RegisterRoutes(RouteTable.Routes);

        SiteSettingSetUp();

    }
    //HtmlGenericControl js = new HtmlGenericControl("script");
    //js.Attributes["type"] = "text/javascript";
    //js.Attributes["src"] = "jscript/jquery.js";
    //Page.Header.Controls.Add(js);

    private void SiteSettingSetUp()
    {

        // CollectionID DesignTemplateName

        SiteSettings.DesignTemplate = Constants.DesignTemplateName;
        Constants.DESIGNTEMPLATESPATHNAME = Constants.Web_Root + "/Avalon/DesignTemplates/".Trim() + SiteSettings.DesignTemplate.Trim() + '/';
        Constants.AvalonDataDesinTemplatesPath = Constants.Web_Root + "/Avalon/DesignTemplates/" + SiteSettings.DesignTemplate.Trim() + '/';
        //Get and Set Youtube Pay List Id from AppSettings
        SiteSettings.YOU_TUBE_PLAYLIST = (string)System.Configuration.ConfigurationManager.AppSettings["UTubePlayListID"];





    }

    void Application_End(object sender, EventArgs e)
    {
        //  Code that runs on application shutdown

    }

    void Application_Error(object sender, EventArgs e)
    {
        // Code that runs when an unhandled error occurs

    }

    void Session_Start(object sender, EventArgs e)
    {
        // Code that runs when a new session is started


    }

    protected void Application_AcquireRequestState(object sender, EventArgs e)
    {

    }

    void Session_End(object sender, EventArgs e)
    {
        // Code that runs when a session ends. 
        // Note: The Session_End event is raised only when the sessionstate mode
        // is set to InProc in the Web.config file. If session mode is set to StateServer 
        // or SQLServer, the event is not raised.

    }

    private DataTable GetJewelerInfo(string clientName)
    {
        DataTable dt = null;
        //dt = new JewelerInfoManager().GetJewelerInfo(clientName);
        return dt;
    }

    public static void RegisterRoutes(RouteCollection routes)
    {
        routes.Clear();
        //B2C

        // routes.Add("404Errors", new Route
        //(
        //   "404Page",
        //   new RouteHandler("~/404Error.aspx")
        //));



        routes.MapPageRoute(
            "Index", //Route name
            "Index", //Route URL
            "~/index.aspx"//Web page to handle route
        );

        routes.MapPageRoute(
         "Features_BrandCustomization", //Route name
         "Features/Brand_Customization", //Route URL
         "~/Features/Brand_Customization.aspx"//Web page to handle route
     );

        routes.MapPageRoute(
        "Features_ContentManagement", //Route name
        "Features/Content_Management", //Route URL
        "~/Features/Content_Management.aspx"//Web page to handle route
    );

        routes.MapPageRoute(
      "Features_DiamondFeed", //Route name
      "Features/Diamond_Feed", //Route URL
      "~/Features/Diamond_Feed.aspx"//Web page to handle route
  );

        routes.MapPageRoute(
      "Features_Features", //Route name
      "Features/Features", //Route URL
      "~/Features/Features.aspx"//Web page to handle route
  );

        routes.MapPageRoute(
    "Feature_JewelExchange", //Route name
    "Features/JewelExchange", //Route URL
    "~/Features/JewelExchange.aspx"//Web page to handle route
);

        routes.MapPageRoute(
  "Feature_Mobile_Website", //Route name
  "Features/Mobile_Website", //Route URL
  "~/Features/Mobile_Website.aspx"//Web page to handle route
);

        routes.MapPageRoute(
"Feature_Product_Management", //Route name
"Features/Product_Management", //Route URL
"~/Features/Product_Management.aspx"//Web page to handle route
);
        routes.MapPageRoute(
"Feature_Shopping_Cart", //Route name
"Features/Shopping_Cart", //Route URL
"~/Features/Shopping_Cart.aspx"//Web page to handle route
);

        //****Client Menu *****//

        routes.MapPageRoute(
"Clients_Benefits", //Route name
"Clients/Benefits", //Route URL
"~/Clients/Benefits.aspx"//Web page to handle route
);
        routes.MapPageRoute(
"Clients_Clients", //Route name
"Clients/Clients", //Route URL
"~/Clients/Clients.aspx"//Web page to handle route
);
        routes.MapPageRoute(
"Clients_Customers", //Route name
"Clients/Customers", //Route URL
"~/Clients/Customers.aspx"//Web page to handle route
);
        routes.MapPageRoute(
"Clients_Testimonials", //Route name
"Clients/Testimonials", //Route URL
"~/Clients/Testimonials.aspx"//Web page to handle route
);
        routes.MapPageRoute(
"Clients_Why_Online", //Route name
"Clients/Why_Online", //Route URL
"~/Clients/Why_Online.aspx"//Web page to handle route
);

    //****************Company Menu *********************//

    routes.MapPageRoute(
"Company_About_Us", //Route name
"Company/About_Us", //Route URL
"~/Company/About_Us.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Company_Company", //Route name
"Company/Company", //Route URL
"~/Company/Company.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Company_News", //Route name
"Company/News", //Route URL
"~/Company/News.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Company_Partners", //Route name
"Company/Partners", //Route URL
"~/Company/Partners.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Company_Product_Presentation", //Route name
"Company/Product_Presentation", //Route URL
"~/Company/Product_Presentation.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Company_Trade_Shows", //Route name
"Company/Trade_Shows", //Route URL
"~/Company/Trade_Shows.aspx"//Web page to handle route
);

//****************ContactUs Menu *********************//

    routes.MapPageRoute(
"ContactUs", //Route name
"ContactUs/ContactUs", //Route URL
"~/ContactUs/ContactUs.aspx"//Web page to handle route
);

    //****************Portfolio Menu *********************//

    routes.MapPageRoute(
"Portfolio_Customization", //Route name
"Portfolio/Customization", //Route URL
"~/Portfolio/Customization.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Portfolio_Portfolio", //Route name
"Portfolio/Portfolio", //Route URL
"~/Portfolio/Portfolio.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Portfolio_Product_Presentation", //Route name
"Portfolio/Product_Presentation", //Route URL
"~/Portfolio/Product_Presentation.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Portfolio_Responsive_Designs", //Route name
"Portfolio/Responsive_Designs", //Route URL
"~/Portfolio/Responsive_Designs.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Portfolio_Retail_Storefronts", //Route name
"Portfolio/Retail_Storefronts", //Route URL
"~/Portfolio/Retail_Storefronts.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Portfolio_Website_Designs", //Route name
"Portfolio/Website_Designs", //Route URL
"~/Portfolio/Website_Designs.aspx"//Web page to handle route
);

    //****************Pricing Menu *********************//

    routes.MapPageRoute(
"Pricing_Pricing", //Route name
"Pricing/Pricing", //Route URL
"~/Pricing/Pricing.aspx"//Web page to handle route
);

    //****************PrivacyPolicy Menu *********************//

    routes.MapPageRoute(
"PrivacyPolicy_PrivacyPolicy", //Route name
"PrivacyPolicy/PrivacyPolicy", //Route URL
"~/PrivacyPolicy/PrivacyPolicy.aspx"//Web page to handle route
);

    //****************Services Menu *********************//

    routes.MapPageRoute(
"Services_Add-on_Modules", //Route name
"Services/Add-on_Modules", //Route URL
"~/Services/Add-on_Modules.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_Digital_ECatalog", //Route name
"Services/Digital_ECatalog", //Route URL
"~/Services/Digital_ECatalog.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_Domains", //Route name
"Services/Domains", //Route URL
"~/Services/Domains.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_Email_Marketing", //Route name
"Services/Email_Marketing", //Route URL
"~/Services/Email_Marketing.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_Email_Templates", //Route name
"Services/Email_Templates", //Route URL
"~/Services/Email_Templates.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_Marketing_SEO", //Route name
"Services/Marketing_SEO", //Route URL
"~/Services/Marketing_SEO.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_Services", //Route name
"Services/Services", //Route URL
"~/Services/Services.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_Social_Media", //Route name
"Services/Social_Media", //Route URL
"~/Services/Social_Media.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_SSL", //Route name
"Services/SSL", //Route URL
"~/Services/SSL.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Services_HTTPS", //Route name
"Services/HTTPS", //Route URL
"~/Services/HTTPS.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"Edge_POS", //Route name
"Features/Edge_POS", //Route URL
"~/Features/Edge_POS.aspx"//Web page to handle route
);

    routes.MapPageRoute(
"ADA_Initiative", //Route name
"Features/ADA_Initiative", //Route URL
"~/Features/ADA_Initiative.aspx"//Web page to handle route
);

        routes.MapPageRoute(
"Services_Web_Hosting", //Route name
"Services/Web_Hosting", //Route URL
"~/Services/Web_Hosting.aspx"//Web page to handle route
);

    //****************SignUp Menu *********************//

    routes.MapPageRoute(
"SignUp", //Route name
"SignUp/SignUp", //Route URL
"~/SignUp/SignUp.aspx"//Web page to handle route
);

    //****************Support Menu *********************//

    routes.MapPageRoute(
"Support_Downloads", //Route name
"Support/Downloads", //Route URL
"~/Support/Downloads.aspx"//Web page to handle route
);

        routes.MapPageRoute(
"Support_Knowledge_Base", //Route name
"Support/Knowledge_Base", //Route URL
"~/Support/Knowledge_Base.aspx"//Web page to handle route
);

        routes.MapPageRoute(
"Support_Submit_A_Ticket", //Route name
"Support/Submit_A_Ticket", //Route URL
"~/Support/Submit_A_Ticket.aspx"//Web page to handle route
);

        routes.MapPageRoute(
"Support_Support", //Route name
"Support/Support", //Route URL
"~/Support/Support.aspx"//Web page to handle route
);

        routes.MapPageRoute(
"Support_Support_Request", //Route name
"Support/Support_Request", //Route URL
"~/Support/Support_Request.aspx"//Web page to handle route
);

    //****************TermsOfUse Menu *********************//

    routes.MapPageRoute(
"TermsOfUse", //Route name
"TermsOfUse/TermsOfUse", //Route URL
"~/TermsOfUse/TermsOfUse.aspx"//Web page to handle route
);

    //****************Error Page *********************//

    routes.MapPageRoute(
"ErrorPage", //Route name
"404Error", //Route URL
"~/404Error.aspx"//Web page to handle route
);













    }


}