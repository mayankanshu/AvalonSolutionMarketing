using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using ASHI.Customer.Factories;




namespace ASHI.Customer.Business
{
  public class ContactUsManager
    {
      ContactUsFactory objContactUsFactory;
      DataTable dt;
      
        public ContactUsManager()
        {
            objContactUsFactory = new ContactUsFactory();
        }

        public void SaveNewContactRequestDetails(String Salutation, String FirstName, String LastName, String Company, String JobTitle, 
                                           String Address1, String Address2, String City,
                                           String State, String Zip, String Phone, String Email, String Website, String BuyingGroup,
                                           String Subject, String Comments, String ipAddress, String ipLocation)
        {
             objContactUsFactory.SaveNewContactRequestDetails(Salutation, FirstName,LastName,Company,JobTitle,
            Address1, Address2, City, State, Zip, Phone, Email, Website, BuyingGroup, Subject, Comments, ipAddress, ipLocation);
        }


        #region InsertRequestCallBack
        public void InsertRequestCallBack(String Name, String Comapny, String Phone, String Email, String ipAddress, String ipLocation)
        {
            objContactUsFactory.InsertRequestCallBack(Name, Comapny, Phone, Email, ipAddress, ipLocation);
        }
        #endregion


        #region SaveNewDemoScheduleDetails
        public void SaveNewDemoScheduleDetails(String Name, String Email, String Phone, String Company, String Website, String DemoDate, String DemoTime, String Comments, String JobTitle, String TimeZone, String ipAddress, String ipLocation)
        {
            objContactUsFactory.SaveNewDemoScheduleDetails(Name, Email, Phone, Company, Website, DemoDate, DemoTime, Comments, JobTitle, TimeZone, ipAddress, ipLocation);
        }
        #endregion


        public DataTable GetAllStates()
        {
            return objContactUsFactory.GetAllStates();
        }


        public List<SEODetails> GetSEODetails(string PageName)
        {
            List<SEODetails> objList = new List<SEODetails>();
            dt = objContactUsFactory.GetSEODetails(PageName);
            objList = ConvertDatatabletoSEODetailsList(dt);
            return objList;
          
        }


        public List<SEODetails> ConvertDatatabletoSEODetailsList(DataTable dt)
        {
            List<SEODetails> objList = new List<SEODetails>();
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    SEODetails objSEODetails = new SEODetails();
                  //  objSEODetails.Id = dr["Id"].ToString() == "" ? 0 : Convert.ToInt32(dr["Id"].ToString());
                    objSEODetails.PageName = dr["PageName"].ToString() == "" ? "" : dr["PageName"].ToString();
                    objSEODetails.MetaKeywords = dr["MetaKeywords"].ToString() == "" ? "" : dr["MetaKeywords"].ToString();
                    objSEODetails.MetaTitle = dr["MetaTitle"].ToString() == "" ? "" : dr["MetaTitle"].ToString();
                    objSEODetails.MetaDescription = dr["MetaDescription"].ToString() == "" ? "" : dr["MetaDescription"].ToString();
                    objList.Add(objSEODetails);
                }
            }
            return objList;
        }

     


    }
}
