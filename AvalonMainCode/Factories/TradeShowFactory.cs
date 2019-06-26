using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using Microsoft.ApplicationBlocks.Data;

namespace ASHI.Customer.Factories
{
   public class TradeShowFactory
    {

       #region SaveNewTradeShowAppointment
       public void SaveNewTradeShowAppointment(String ContactPerson, String StoreName, String City,
                                               String State, String Phone, String Email,
                                               String AppointmentDate, String AppointmentTime, String AvalonCustomer,
                                               String TradeShow, String Comments, String ipAddress, String ipLocation)
       {
           try
           {
               SqlHelper.ExecuteNonQuery(Config.CustomerDB, "spCltInserttradeShowAppointment",
               ContactPerson, StoreName, City, State, Phone, Email,
                AppointmentDate, AppointmentTime, AvalonCustomer, TradeShow, Comments, ipAddress, ipLocation);

           }
           catch (Exception ex)
           {
               throw new Exception("Failed to Save New Request Details.", ex);

           }
       }
       #endregion

       #region GetTradeShowDetails
       public DataTable GetTradeShowDetails()
       {
           DataSet ds = null;

           try
           {
               ds = SqlHelper.ExecuteDataset(Config.CustomerDB, "spCltGetTradeShowDetails");
           }
           catch (Exception ex)
           {
               throw new Exception("Failed to Save New Request Details.", ex);
           }

           return ds.Tables[0];
       }
       #endregion


       #region GetTradeShowDetailsOnPopUp
       public DataTable GetTradeShowDetailsOnPopUp(string Id)
       {
           DataSet ds = null;

           try
           {
               ds = SqlHelper.ExecuteDataset(Config.CustomerDB, "spCltGetTradeShowDetailsOnPopUp", Convert.ToInt32(Id));
           }
           catch (Exception ex)
           {
               throw new Exception("Failed to Save New Request Details.", ex);
           }

           return ds.Tables[0];
       }
       #endregion

    }
}
