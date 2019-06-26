using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using ASHI.Customer.Factories;

namespace ASHI.Customer.Business
{
   public class TradeShowManager
    {
       TradeShowFactory objTradeShowFactory = new TradeShowFactory();
       DataTable dt;

       public TradeShowManager()
       {
           objTradeShowFactory = new TradeShowFactory();
       }


       #region SaveNewTradeShowAppointment
       public void SaveNewTradeShowAppointment(String ContactPerson, String StoreName, String City,
                                               String State, String Phone, String Email,
                                               String AppointmentDate, String AppointmentTime, String AvalonCustomer,
                                               String TradeShow, String Comments, String ipAddress, String ipLocation)
       {
           objTradeShowFactory.SaveNewTradeShowAppointment(ContactPerson, StoreName, City, State, Phone, Email, AppointmentDate, AppointmentTime, AvalonCustomer, TradeShow, Comments, ipAddress, ipLocation);
       }
       #endregion

       #region GetTradeShowDetails
       public List<TradeShow> GetTradeShowDetails()
       {
           List<TradeShow> objTradeShowList = new List<TradeShow>();
           dt = objTradeShowFactory.GetTradeShowDetails();
           objTradeShowList = ConvertDatatabletoTradeShowList(dt);
           return objTradeShowList;
       }
       #endregion


       #region GetTradeShowDetails
       public List<TradeShow> GetTradeShowDetailsOnPopUp(string Id)
       {
           List<TradeShow> objTradeShowList = new List<TradeShow>();
           dt = objTradeShowFactory.GetTradeShowDetailsOnPopUp(Id);
           objTradeShowList = ConvertDatatabletoTradeShowList(dt);
           return objTradeShowList;
       }
       #endregion



       #region ConvertDatatabletoTradeShowList
       public List<TradeShow> ConvertDatatabletoTradeShowList(DataTable dt)
       {
           List<TradeShow> objTradeShowList = new List<TradeShow>();
           if (dt.Rows.Count > 0)
           {
               foreach (DataRow dr in dt.Rows)
               {
                   TradeShow objTradeShowDetails = new TradeShow();
                   objTradeShowDetails.Id = dr["Id"].ToString() == "" ? 0 : Convert.ToInt32(dr["Id"].ToString());
                   objTradeShowDetails.TradeShowName = dr["Trade_Show"].ToString() == "" ? "" : dr["Trade_Show"].ToString();
                   objTradeShowDetails.ShowDates = dr["Show_Dates"].ToString() == "" ? "" : dr["Show_Dates"].ToString();
                   objTradeShowDetails.Location = dr["Location"].ToString() == "" ? "" : dr["Location"].ToString();
                   objTradeShowDetails.BoothNo = dr["Booth_No"].ToString() == "" ? "" : dr["Booth_No"].ToString();
                   objTradeShowDetails.ImageLogo = dr["Image_Logo"].ToString() == "" ? "" : dr["Image_Logo"].ToString();
                   objTradeShowDetails.SequenceNumber = dr["Sequence_No"].ToString() == "" ? "" : dr["Sequence_No"].ToString();
                   objTradeShowDetails.TradeShowHtml = dr["tradeshow_html"].ToString() == "" ? "" : dr["tradeshow_html"].ToString();
                   objTradeShowDetails.StartShowDate = dr["StartShowDate"].ToString() == "" ? "" : dr["StartShowDate"].ToString();
                   objTradeShowDetails.EndShowDate = dr["EndShowDate"].ToString() == "" ? "" : dr["EndShowDate"].ToString();
                   objTradeShowList.Add(objTradeShowDetails);
               }
           }
           return objTradeShowList;
       }
       #endregion

    }
}
