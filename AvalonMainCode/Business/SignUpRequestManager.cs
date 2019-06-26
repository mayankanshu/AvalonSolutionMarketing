using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using ASHI.Customer.Factories;


namespace ASHI.Customer.Business
{
   public class SignUpRequestManager
    {
       SignUpRequestFactory objSignUpRequestFactory;

       public SignUpRequestManager()
       {
           objSignUpRequestFactory = new SignUpRequestFactory();
       }

       #region SavenewSignUpRequestDetails
       public void SaveNewSignUpRequestDetails(String Salutation, String FirstName, String LastName,
                                              String Company, String JobTitle, String Address1,
                                              String Address2, String City, String State,
                                              String Zip, String Phone1, String Phone2, String Email,
                                              String Website, String BuyingGroup, String WebPlan,
                                              String WebDesignerNumber, String Comments, String ipAddress, String ipLocation,String exisitingdomain, String yearsInBuisness, String supplier1, String supplier2, String supplier3, String storeHoursDays1, String storeHoursDays2, String storeHoursDays3, String companyLogo, String storePictures)
       {
           objSignUpRequestFactory.SaveNewSignUpRequestDetails(Salutation, FirstName, LastName, Company, JobTitle, Address1,
               Address2, City, State, Zip, Phone1, Phone2, Email, Website, BuyingGroup, WebPlan, WebDesignerNumber, Comments, ipAddress, ipLocation, exisitingdomain,yearsInBuisness,supplier1,supplier2,supplier3,storeHoursDays1,storeHoursDays2,storeHoursDays3,companyLogo,storePictures);
       }
       #endregion

       #region GetAllStates
       public DataTable GetAllStates()
       {
           return objSignUpRequestFactory.GetAllStates();
       }
       #endregion



    }
}
