using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using Microsoft.ApplicationBlocks.Data;

namespace ASHI.Customer.Factories
{
    public class BrandCustomFactory
    {
         public DataTable GetBrandCustomList(string jeweleryType)
        {
            DataSet ds = null;

            try
            {
                ds = SqlHelper.ExecuteDataset(Config.CustomerDB, "spCltSelectDesignerBrandMaster", jeweleryType);
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to Save New Request Details.", ex);
            }

            return ds.Tables[0];
        }
        



    }
}
