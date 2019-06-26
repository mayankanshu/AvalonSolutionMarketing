using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using Microsoft.ApplicationBlocks.Data;

namespace ASHI.Customer.Factories
{
  public class SignUpRequestFactory
    {

      #region SaveNewSignUpRequestDetails
      public void SaveNewSignUpRequestDetails(String Salutation, String FirstName, String LastName, 
                                              String Company, String JobTitle, String Address1, 
                                              String Address2, String City, String State, 
                                              String Zip, String Phone1,String Phone2, String Email, 
                                              String Website, String BuyingGroup,String WebPlan,
                                              String WebDesignerNumber, String Comments, String ipAddress, String ipLocation, String exisitingdomain, String yearsInBuisness, String supplier1, String supplier2, String supplier3, String storeHoursDays1, String storeHoursDays2, String storeHoursDays3, String companyLogo, String storePictures)
      {
          try
          {
              SqlHelper.ExecuteNonQuery(Config.CustomerDB, "spCltInsertSignUpRequest_Dummy",
              Salutation, FirstName, LastName, Company, JobTitle, Address1,
               Address2, City, State, Zip, Phone1,Phone2, Email, Website, BuyingGroup,WebPlan, WebDesignerNumber, Comments, ipAddress, ipLocation,supplier1,supplier2,supplier3,yearsInBuisness,companyLogo,storePictures,exisitingdomain,storeHoursDays1,storeHoursDays2,storeHoursDays3);

          }
          catch (Exception ex)
          {
              throw new Exception("Failed to Save New Request Details.", ex);

          }
      }
      #endregion

      #region GetAllStates
      public DataTable GetAllStates()
      {
          try
          {
              DataSet ds = new DataSet();
              ds = SqlHelper.ExecuteDataset(Config.CustomerDB, "spGetAllStates");
              return ds.Tables[0];
          }
          catch (Exception ex)
          {
              return null;
              throw ex;
          }
      }
      #endregion

    }
}
