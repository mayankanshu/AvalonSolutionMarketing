using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using Microsoft.ApplicationBlocks.Data;


namespace ASHI.Customer.Factories
{
    public class SupplierRequestFactory
    {

        #region SaveSupplierRequestDetails
        public void SaveSupplierRequestDetails(String RetailCompName, String RetailCity, String RetailState, String RetailZip, 
                                               String RetailerPhone, String RetailerExtn, String RetailerEmailId, String RetailerWebsite, String SupplierCompName, 
                                               String SupplierCity, String SupplierState, String SupplierZip,String SupplierPhone, String SupplierExtn,String SupplierEmailId, String SupplierWebsite, 
                                               String SupplierContTitle, String SupplierContName, String SupplierConPos, String SupplierConMob,String SupplierConEmailId,
                                               String Comments, String IpAddress, String IpLocation)
        {
            try
            {
                SqlHelper.ExecuteNonQuery(Config.CustomerDB, "spCltInsertRetailerInvitation",
                RetailCompName, RetailCity, RetailState, RetailZip, RetailerPhone, RetailerExtn, RetailerEmailId, RetailerWebsite, SupplierCompName, 
                SupplierCity, SupplierState, SupplierZip, SupplierPhone, SupplierExtn, SupplierEmailId, SupplierWebsite, SupplierContTitle, 
                SupplierContName, SupplierConPos, SupplierConMob, SupplierConEmailId, Comments, IpAddress, IpLocation);

            }
            catch (Exception ex)
            {
                throw new Exception("Failed to Save Supplier Request Details.", ex);

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
