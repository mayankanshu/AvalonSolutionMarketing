using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;


/// <summary>
/// Constants used in IDO Collection
/// </summary>
public class Constants
{
    public enum EmailType
    {
        CONTACTUS = 1,
        EMAIL_TO_FRIEND = 2,
        EMAIL_PRESENTATION = 4,
        ECATELOGEMAIL = 5,
        WISHLIST_ALL_ITEMS_EMAIL = 6,
        NEW_ACCOUNT_REQUEST = 7,
        SHOPPING_BAG_EMAIL = 8
    }

    public enum Entity
    {
        User, ContactUs, Feedback, PresentationRequest
    }

    public static int RETAILERID = Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["RETAILERID"]);
    public static string CURRENCYSYMBOL = "$";

    public static string Web_Root = (String)System.Configuration.ConfigurationManager.AppSettings["web_root"];
    public static string WEB_ROOT_B2CC = (String)System.Configuration.ConfigurationManager.AppSettings["web_root_b2cc"];
    public static string Images = Web_Root + "/Images";

    public static string CONTACT_US_EMAIL = (String)System.Configuration.ConfigurationManager.AppSettings["contactUsMailFrom"];
    public static string Sign_UP_EMAIL = (String)System.Configuration.ConfigurationManager.AppSettings["signUpMailFrom"];

    public static string JewelExchange_EMAIL = (String)System.Configuration.ConfigurationManager.AppSettings["jewelexchangemail"];

    public static string CUSTOMER_ID = (String)System.Configuration.ConfigurationManager.AppSettings["customerId"];
    public static int MORE_ROWS_PAGE_SIZE = 27;
    public static int PAGE_SIZE = 18;
    public static int PAGE_SIZE_BASE = 100;
    public static string JEWELERY_COLLECTION_CAT_ID = "1";
    public static string URL_ICON = (String)System.Configuration.ConfigurationManager.AppSettings["urlicon"];
    public static string ITEM_IMAGE_PATH = (String)System.Configuration.ConfigurationManager.AppSettings["itemImagePath"];
    public static string WHATS_NEW_CATEGORY_ID = (string)System.Configuration.ConfigurationManager.AppSettings["WhatsNewCategoryID"];
    public static string U_TUBE_PLAYLIST_ID = (string)System.Configuration.ConfigurationManager.AppSettings["UTubePlayListID"];
    public static string GOOGLE_API_KEY = (String)System.Configuration.ConfigurationManager.AppSettings["GoogleAPIKey"];
    public static string IDC_B2B_URL = (String)System.Configuration.ConfigurationManager.AppSettings["IDC_B2B_URL"];
    public static string CustomerServiceEmailAddress = (String)System.Configuration.ConfigurationManager.AppSettings["customerservice"];
    public static string DoNotReplyEmailAddress = (String)System.Configuration.ConfigurationManager.AppSettings["IDCDoNotReplyEMailId"];
    public static string DoNotReplyEmailTitle = (String)System.Configuration.ConfigurationManager.AppSettings["IDCDoNotReplyEMailTitle"];
    public static string Search_Retailer_Timing = (String)System.Configuration.ConfigurationManager.AppSettings["Retailer_Search_Timing"];

    public static string reCaptchaSecretKey = (String)System.Configuration.ConfigurationManager.AppSettings["reCaptchaSecretKey"];

    // Added For Shopping Cart Integration - Ajay 10-05-2011
    public static String WEB_ROOT_HTTPS = (String)System.Configuration.ConfigurationManager.AppSettings["web_root_HTTPS"];
    public static String IMAGES_HTTPS = WEB_ROOT_HTTPS + "/Images"; // Added for HTTPs (Shopping Cart)
    //

    //Added for global decalre company name update
    public static string Global_Website_Name = (String)System.Configuration.ConfigurationManager.AppSettings["web_global_company_name"];
    public static string Global_Website_Name1 = (String)System.Configuration.ConfigurationManager.AppSettings["web_global_company_name1"];
    public static string global_email_info = (String)System.Configuration.ConfigurationManager.AppSettings["global_email_info"];
    public static string global_email_info_withMailToText = (String)System.Configuration.ConfigurationManager.AppSettings["global_email_info_withMailToText"];
    public static string global_email_customerservice = (String)System.Configuration.ConfigurationManager.AppSettings["global_email_customerservice"];
    public static string global_email_customerservice_withMailToText = (String)System.Configuration.ConfigurationManager.AppSettings["global_email_customerservice_withMailToText"];

    public static string global_Web_URL_Case = (String)System.Configuration.ConfigurationManager.AppSettings["global_Web_URL_Case"];
    public static string global_Web_URL = (String)System.Configuration.ConfigurationManager.AppSettings["global_Web_URL"];

    public static string FacebookUrl = (String)System.Configuration.ConfigurationManager.AppSettings["FacebookUrl"];
    public static string PinterestUrl = (String)System.Configuration.ConfigurationManager.AppSettings["PinterestUrl"];
    public static string TwitterUrl = (String)System.Configuration.ConfigurationManager.AppSettings["TwitterUrl"];
    public static string GoogleplusUrl = (String)System.Configuration.ConfigurationManager.AppSettings["GoogleplusUrl"];
    public static string InstagramUrl = (String)System.Configuration.ConfigurationManager.AppSettings["InstagramUrl"];
    public static string ProductItemId = string.Empty;

    public static string DESIGNTEMPLATESPATHNAME;
    //Comment This Before Deployment
    /// <summary>
    /// Data Services  Url
    /// </summary>
    public static string AvalonDataServicesTemplatesPath = Web_Root + "/Avalon/DataServices/".Trim();
    public static string AvalonDataDesinTemplatesPath = Web_Root + "/Avalon/DesignTemplates/[ClientName]/".Trim();

    public static int CollectionID = Convert.ToInt32((string)System.Configuration.ConfigurationManager.AppSettings["CollectionId"]);
    public static string DesignTemplateName = (String)System.Configuration.ConfigurationManager.AppSettings["DesignTemplateName"];
    public static string YearsInBusiness = (String)System.Configuration.ConfigurationManager.AppSettings["YearsInBusiness"];
    public static int MicrowebsiteId = Convert.ToInt32((string)System.Configuration.ConfigurationManager.AppSettings["MicrowebsiteId"]);
    public static int StoreId = Convert.ToInt32((string)System.Configuration.ConfigurationManager.AppSettings["StoreId"]);


    //Open Comment Before Deployment
    //public static string AvalonDataServicesTemplatesPath = Web_Root + "/Avalon/DataServices/".Trim();
    //public static string AvalonDataDesinTemplatesPath = Web_Root + "/Avalon/DesignTemplates/".Trim();

    public static String EnableEmails = (String)System.Configuration.ConfigurationManager.AppSettings["EnableEmails"];
    public static String SERVER_SERVICES = (String)System.Configuration.ConfigurationManager.AppSettings["ServerServices"];
    public static String CLIENT_SERVICES = (String)System.Configuration.ConfigurationManager.AppSettings["ClientServices"];

    public static string PriceLevel = "";
    public static int MarkUp = 0;
    public static int MarkDown = 0;
    public static int PriceRoundOff = 0;



    public Constants()
    {
        //
        // TODO: Add constructor logic here 
        //
    }
}
