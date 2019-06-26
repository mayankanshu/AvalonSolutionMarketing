using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using Microsoft.ApplicationBlocks.Data;

namespace ASHI.Customer.Factories
{
  public class ContactUsFactory
  {
    
      
      #region SaveNewContactRequestDetails
      public void SaveNewContactRequestDetails(String Salutation, String FirstName, String LastName, String Company, String JobTitle, String Address1, String Address2, String City, String State, String Zip, String Phone, String Email, String Website, String BuyingGroup, String Subject, String Comments, String ipAddress, String ipLocation)
      {
          try
          {
              SqlHelper.ExecuteNonQuery(Config.CustomerDB, "spCltInsertUpdateContactUs",
              Salutation, FirstName, LastName,Company,JobTitle,Address1,
               Address2, City, State, Zip, Phone, Email, Website,BuyingGroup, Subject, Comments, ipAddress, ipLocation);

              
          }
          catch (Exception ex)
          {
              throw new Exception("Failed to Save New Request Details.", ex);
           
          }
      }
      #endregion


      #region InsertRequestCallBack
      public void InsertRequestCallBack(String Name, String Comapny, String Phone, String Email, String ipAddress, String ipLocation)
      {
          try
          {
              SqlHelper.ExecuteNonQuery(Config.CustomerDB, "spCltInsertRequestCallBack", Name, Comapny, Phone, Email, ipAddress, ipLocation);


          }
          catch (Exception ex)
          {
              throw new Exception("Failed to Save New Request Details.", ex);

          }
      }
      #endregion


      #region SaveNewDemoScheduleDetails
      public void SaveNewDemoScheduleDetails(String Name, String Email, String Phone, String Comapny, String Website, String DemoDate, String DemoTime, String Comments, String JobTitle, String TimeZone, String ipAddress, String ipLocation)
      {
          try
          {
              SqlHelper.ExecuteNonQuery(Config.CustomerDB, "spCltInsertDemoSchedule", Name, Email, Phone, Comapny, Website, DemoDate, DemoTime, Comments, JobTitle, TimeZone, ipAddress, ipLocation);


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

      #region GetSEODetails
      public DataTable GetSEODetails(string PageName)
      {
          try
          {
              DataSet ds = new DataSet();
              ds = SqlHelper.ExecuteDataset(Config.CustomerDB, "spCltSelectSEODetails",PageName);
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
