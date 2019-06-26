using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using ASHI.Customer.Factories;



namespace ASHI.Customer.Business
{
    
    public class BrandCustomManager
    {
        BrandCustomFactory objBrandCustomFactory;
        DataTable dt = new DataTable();
        
        

        public BrandCustomManager()
       {
           objBrandCustomFactory = new BrandCustomFactory();
       }

        //public DataTable GetBrandCustomList(string jeweleryType)
        //{

        //    return objBrandCustomFactory.GetBrandCustomList(jeweleryType);
        //}

        public List<BrandCustomization> GetBrandCustomList(string jeweleryType)
        {
            List<BrandCustomization> objList = new List<BrandCustomization>();
            dt = objBrandCustomFactory.GetBrandCustomList(jeweleryType);
            objList = ConvertDatatabletoBrandCustomList(dt);
            return objList;
        }

        public List<BrandCustomization> ConvertDatatabletoBrandCustomList(DataTable dt)
        {
            List<BrandCustomization> objList = new List<BrandCustomization>();
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    BrandCustomization objBrand = new BrandCustomization();
                    objBrand.BrandName = dr["brand_name"].ToString() == "" ? "" : dr["brand_name"].ToString();
                    objBrand.BrandImageUrl = dr["brand_image_url"].ToString() == "" ? "" : dr["brand_image_url"].ToString();
                    objBrand.BrandUrl = dr["brand_url"].ToString() == "" ? "" : dr["brand_url"].ToString();
                    objList.Add(objBrand);
                }
            }
            return objList;
        }


    }
}
