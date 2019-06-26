using System;
using System.Collections.Generic;
using System.Text;
using System.Configuration;
using System.Xml;

namespace ASHI.Common.Logging
{
    public class LogConfigSectionHandler : IConfigurationSectionHandler
    {
        #region IConfigurationSectionHandler Members

        public object Create (object parent, object configContext, System.Xml.XmlNode section)
        {
            string mailingList = string.Empty;
            bool enabled;

            if (section != null)
            {
                XmlAttribute atMailingList = section.Attributes["exceptionMailingList"];
                XmlAttribute atEnabled = section.Attributes["enabled"];

                if (atMailingList != null)
                {
                    mailingList = atMailingList.Value;
                }

                if (atEnabled != null)
                {
                    if (!bool.TryParse(atEnabled.Value, out enabled))
                        enabled = true;
                }
                else
                    enabled = true;
            }
            else
            {
                enabled = true;
            }
            LogConfig configSettings = new LogConfig(enabled, mailingList);

            return configSettings;
        }

        #endregion
    }
}
