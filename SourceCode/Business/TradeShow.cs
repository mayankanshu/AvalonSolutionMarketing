using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace ASHI.Customer.Business
{
   public class TradeShow
    {
        public int Id { get; set; }
        public string TradeShowName { get; set; }
        public string ShowDates { get; set; }
        public string Location { get; set; }
        public string BoothNo { get; set; }
        public string ImageLogo { get; set; }
        public string SequenceNumber { get; set; }
        public string TradeShowHtml { get; set; }
        public string StartShowDate { get; set; }
        public string EndShowDate { get; set; }

    }
}
