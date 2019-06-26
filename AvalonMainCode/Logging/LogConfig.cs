using System;
using System.Collections.Generic;
using System.Text;

namespace ASHI.Common.Logging
{
    public class LogConfig
    {
        private static LogConfig _LogConfig;
        private string _ExceptionMailingList;
        private bool _Enabled;

        public static LogConfig Get()
        {
            if (_LogConfig == null)
            {
                _LogConfig = (LogConfig)System.Configuration.ConfigurationManager.GetSection("log");
            }
            return _LogConfig;
        }

        public LogConfig(bool enabled, string exceptionMailingList)
        {
            _ExceptionMailingList = exceptionMailingList;
            _Enabled = enabled;
        }

        public bool Enabled
        {
            get { return _Enabled; }
            set { _Enabled = value; }
        }
	
        public string ExceptionMailingList
        {
            get { return _ExceptionMailingList; }
            set { _ExceptionMailingList = value; }
        }

	
    }
}
