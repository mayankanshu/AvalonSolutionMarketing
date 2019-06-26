using System;
using System.IO;
using System.Collections.Specialized;
using System.Collections.Generic;
using System.Text;
using System.Runtime.CompilerServices;
using System.Diagnostics;
using System.Net;
using System.Configuration;
using System.Web;
using NLog;
using NLog.Targets;
using NLog.Config;
using NLog.Win32.Targets; 
using Microsoft.ApplicationBlocks.Data;

namespace ASHI.Common.Logging
{
    public class LogManager
    {
        private static string _userName = string.Empty;
        private static string _HostName=string.Empty;
        private static string _DataBase = string.Empty;

        private const string KeyUserNameContext = "KeyUserNameContext";

        #region Public Static Properies
        public static string HostName
        {
            get
            {
                if (_HostName == string.Empty)
                    _HostName = Dns.GetHostName();
                return _HostName;
            }
        }
        public static string DataBase
        {
            get
            {
                return _DataBase;
            }
        }
        public static string UserMachineName
        {
            get
            {
                try
                {
                    if(HttpContext.Current ==null || HttpContext.Current.Request==null || HttpContext.Current.Request.ServerVariables==null || HttpContext.Current.Request.ServerVariables["remote_addr"] == null)
                    {
                        //get the current machine name since server variables collection is not going to be populated for a windows app.
                        return System.Environment.MachineName;
                    }
                    IPHostEntry hostEntry = Dns.GetHostEntry(HttpContext.Current.Request.ServerVariables["remote_addr"]);
                    if (hostEntry == null)
                        return "Unknown";
                    else
                        return hostEntry.HostName;
                }
                catch
                {
                    return "Unknown";
                }
            }
        }
        
        public static string User
        {
            get
            {
                if (!HttpContext.Current.Items.Contains(KeyUserNameContext))
                {
                    if (HttpContext.Current != null)
                    {
                        if (HttpContext.Current.User == null)
                            return "Unknown";
                        else
                        {
                            int index = HttpContext.Current.User.Identity.Name.IndexOf("\\") + 1;
                            string name = HttpContext.Current.User.Identity.Name.Substring(index);
                            HttpContext.Current.Items[KeyUserNameContext] = name;
                        }
                    }
                    else
                    {
                        int index = System.Threading.Thread.CurrentPrincipal.Identity.Name.IndexOf("\\") + 1;
                        string name = System.Threading.Thread.CurrentPrincipal.Identity.Name.Substring(index);
                        HttpContext.Current.Items[KeyUserNameContext] = name;
                    }
                }

                return HttpContext.Current.Items[KeyUserNameContext].ToString();
            }
        }

        public static string Version
        {
            get
            {
                return "1.0";
            }
        }
        #endregion

        private static bool WriteErrorToEventLog(Exception ex)
        {
            try
            {
                EventLog lEvtLog = new EventLog("Application", ".", "ASHI");
                lEvtLog.WriteEntry(BuildExceptionMessage(ex), EventLogEntryType.Error);
                return true;
            }
            catch
            {
                return false;
            }
        }
        
        private static string BuildExceptionMessage(Exception ex)
        {
           return BuildExceptionMessage(ex, null);
        }
        
        private static string BuildExceptionMessage(Exception ex, NameValueCollection addlInfo)
        {
            StringBuilder sbuilder = new StringBuilder();

            //write all the exceptions occurred.
            sbuilder.AppendLine("Server Name: " + HostName);
            sbuilder.AppendLine("Database Name: " + DataBase);
            sbuilder.AppendLine("User Machine Name: " + UserMachineName);
            sbuilder.AppendLine("User Name: " + User);
            sbuilder.AppendLine("Time Stamp: " + DateTime.Now);
            sbuilder.AppendLine("Error Details: \r\n");

            sbuilder.Append(ex);
            return sbuilder.ToString();
        }

        public static void WriteMessage(string message, string category, KeyValueToStringConvertibleCollection keyValues, params LogLevels[] levels)
        {
            Logger logger = NLog.LogManager.GetLogger(category);            

            foreach (LogLevels level in levels)
            {
                switch (level)
                {
                    case LogLevels.Trace:
                        logger.Trace(message, keyValues);
                        break;
                    case LogLevels.Debug:
                        logger.Debug(message, keyValues);
                        break;
                    case LogLevels.Info:
                        logger.Info(message, keyValues);
                        break;
                    case LogLevels.Warn:
                        logger.Warn(message, keyValues);
                        break;
                    case LogLevels.Error:
                        logger.Error(message, keyValues);
                        break;
                    case LogLevels.Fatal:
                        logger.Fatal(message, keyValues);
                        break;
                    default: break;
                }
            }
        }

        public static void WriteMessage(string message, string category, params LogLevels[] levels)
        {
            Logger logger = NLog.LogManager.GetLogger(category);

            //string [] levels = level.Split (new Char [] { '|' });

            foreach (LogLevels level in levels)
            {
                switch (level)
                {
                    case LogLevels.Trace:
                        logger.Trace(message);
                        break;
                    case LogLevels.Debug:
                        logger.Debug(message);
                        break;
                    case LogLevels.Info:
                        logger.Info(message);
                        break;
                    case LogLevels.Warn:
                        logger.Warn(message);
                        break;
                    case LogLevels.Error:
                        logger.Error(message);
                        break;
                    case LogLevels.Fatal:
                        logger.Fatal(message);
                        break;
                    default: break;
                }
            }
        }

        
        public static bool WriteException(Exception exMain)
        {
            return WriteException(exMain, null, string.Empty);
        }

        public static bool WriteException(Exception exMain, NameValueCollection addlInfo)
        {
            try
            {
                return WriteException(exMain, addlInfo, string.Empty);
            }
            catch (Exception ex)
            {
                WriteErrorToEventLog(ex);
                return WriteErrorToEventLog(exMain);
            }
        }
        public static bool WriteException(Exception exMain, NameValueCollection addlInfo, string errSrc)
        {
            try
            {
                string subject = string.Empty;
                NLog.Config.LoggingConfiguration config = NLog.LogManager.Configuration;
                MailTarget tg = (MailTarget)config.FindTargetByName("emailException");
                
                if (errSrc != null && errSrc.Length > 0)
                    subject = "Error Notification: Server: " + HostName + ", DB: " + DataBase + ", Ver: " + Version +", Src: " + errSrc;
                else
                    subject = "Error Notification: Server: " + HostName + ", DB: " + DataBase + ", Ver: " + Version;

                tg.Subject = subject;
                tg.Body = BuildExceptionMessage(exMain, addlInfo);

                Logger logger = NLog.LogManager.GetLogger("emailException");
                logger.Fatal("Exception");

                return true;
            }
            catch (Exception ex)
            {
                WriteErrorToEventLog(ex);
                return WriteErrorToEventLog(exMain);
            }
        }
    }
}
