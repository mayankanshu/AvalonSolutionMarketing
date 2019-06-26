using System;
using System.Configuration;

namespace Microsoft.ApplicationBlocks.Data
{
    public class Config
    {
        private static string _AshiServerDB = string.Empty;
        private static string _CustomerDB = string.Empty;
        static Config()
        {
            for (int index = 0; index < ConfigurationManager.ConnectionStrings.Count; index++)
            {
                switch (ConfigurationManager.ConnectionStrings[index].Name)
                {
                    case "AshiServer":
                        _AshiServerDB = ConfigurationManager.ConnectionStrings["AshiServer"].ConnectionString;
                        break;
                    case "Customer":
                        _CustomerDB = ConfigurationManager.ConnectionStrings["Customer"].ConnectionString;
                        break;
                    default:
                        break;
                }
            }
        }
        public static string AshiServerDB
        {
            get
            {
                return _AshiServerDB;
            }
        }

        public static string CustomerDB
        {
            get
            {
                return _CustomerDB;
            }
        }
    }

}
