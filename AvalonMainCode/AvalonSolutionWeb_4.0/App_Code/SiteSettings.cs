using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


/// <summary>
/// Summary description for SiteSettings
/// </summary>
public class SiteSettings
{
	public SiteSettings()
	{
		//
		// TODO: Add constructor logic here
		//
	}
   
    public static String CATEGORY_IMAGEPATH; // New Variable used to represent category images path

    public static String CATEGORY_IMAGES; // Variable reserved for category images path2.


    public  bool isClientLogourl =false;

    public static String DesignTemplate;
    //public static String GetUrlFromMvc = "index.aspx";
    public static String GetUrlFromMvc = "index";


    public static String REMOVECACHE = "N";

    public static String Profile_FirstName=string.Empty;
    public static String Profile_LastName = string.Empty;
    
    public static Int32 DEFAULT_SORTING_METHOD = 0;
    public static String CURRENCYSYMBOL ="$";

    // Variable to check if Shopping Cart is taken
    public static Boolean SHOPPING_CART_TAKEN = false;
    public static String SHOPPINGBAG = "SB";
    public bool isShowShopping = false;
    public Int32 ShoppingItemCount = 0;

    public static string isCorrectUrl = string.Empty;
    //Jeweler Company Information Starts Here
    public static String JEWELERID;
    public static String STORELOGOPATH;
    public String ClientLogoUrl = "";
    public String ClientAboutUsHTML;
    public String PRICELEVEL;
    public String CLIENTURL;
   // public  static String CLIENTURL1;
    public String USERGUID;
    public static  String COMPANY_NAME;
    public static String ADDRESS1;
    public static String ADDRESS2;
    public static  String CITY;
    public static String STATECODE;
    public static String STATENAME;
    public static String ZIP;
    public static String PHONE1;
    public static String PHONE2;
    public static String EMAILID;
    public static String CLIENTWEBURL;
    public static String STOREHOURS1;
    public static String STOREHOURS2;
    public static String STOREHOURS3;
    public static String BRANCHLOCATION;
    public static String LATITUDE;
    public static String LONGITUDE;
    public static String ITEMSIZEPRICE;
    //Jeweler Company Information End Here








    public bool User_IsSignIn= false;
    public bool Request_IsAuthenticated = false;
    public String Page_User_Identity_Name = "";
    public String UserIdentity_FirstName = "";
    public String UserIdentity_LastName = "";
    public static string IDC_B2B_URL = (String)System.Configuration.ConfigurationManager.AppSettings["IDC_B2B_URL"];



    public bool IsAdmin = false;
    
    public static string UseSOA = (string)System.Configuration.ConfigurationManager.AppSettings["UseSOA"];

    public static string YOU_TUBE_PLAYLIST = "";
    public static string reCaptchaSiteKey = (string)System.Configuration.ConfigurationManager.AppSettings["reCaptchaSiteKey"];


}