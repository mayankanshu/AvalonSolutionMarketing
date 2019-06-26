using System;
using System.Collections;
using System.Collections.Specialized;

namespace NLog
{
	/// <summary>
	/// Summary description for KeyValueToStringConvertibleCollection.
	/// </summary>
	public class KeyValueToStringConvertibleCollection
	{
		string KeyValueSeparator="=";
		string PairSeparator=";";
		string mKeyValueString="";
		StringDictionary KeyValueCol=new StringDictionary();
		bool IsModified=false;

		public KeyValueToStringConvertibleCollection()
		{
		}

		public KeyValueToStringConvertibleCollection(string pKeyValueString):this(pKeyValueString,"=",";"){}

		public KeyValueToStringConvertibleCollection(string pKeyValueString, string pKeyValueSeparator,string pPairSeparator)
		{
			PairSeparator=pPairSeparator;
			KeyValueSeparator=pKeyValueSeparator;
			KeyValueString=pKeyValueString;
		}
		
		public string KeyValueString
		{
			get
			{
				if(IsModified)
				{
					mKeyValueString="";
					string[] lKeys=new string[KeyValueCol.Count];
					string[] lValues=new string[KeyValueCol.Count];
					KeyValueCol.Keys.CopyTo(lKeys,0);
					KeyValueCol.Values.CopyTo(lValues,0);
					
					for(int i=0;i<KeyValueCol.Count;i++)
					{
						mKeyValueString+=lKeys[i]+KeyValueSeparator+lValues[i]+PairSeparator;
					}

					IsModified=false;
				}
				
				return mKeyValueString;
			}
			set
			{
				mKeyValueString=value.Trim();

				KeyValueCol.Clear();
				
				if(mKeyValueString.Length==0)
					return;

				string[] lPairs=mKeyValueString.Split(PairSeparator.ToCharArray());

				string[] lKeyValue;

				string lKey="",lValue="";

				char[] lKeyValueSeparatorChars=KeyValueSeparator.ToCharArray();

				foreach(string lPair in lPairs)
				{
					if(lPair.Trim().Length==0)
						continue;
					
					lKeyValue=lPair.Split(lKeyValueSeparatorChars);
					
					lKey=lKeyValue[0].Trim();
					if(lKeyValue.Length>1)
						lValue=lKeyValue[1].Trim();
					
					KeyValueCol.Add(lKey,lValue);
				}
			}
		}

		public string this[string pKey]
		{
			get
			{
				return KeyValueCol[pKey];
			}
			set
			{
				KeyValueCol[pKey]=value;
				IsModified=true;
			}
		}

		public bool ContainsKey(string pKey)
		{
			return KeyValueCol.ContainsKey(pKey);
		}

		public void Remove(string pKey)
		{
			if(KeyValueCol.ContainsKey(pKey))
			{
				KeyValueCol.Remove(pKey);
				IsModified=true;
			}
		}

		public void Add(string pKey,string pValue)
		{
			KeyValueCol.Add(pKey,pValue);
			IsModified=true;
		}

		public int Count
		{
			get
			{
				return KeyValueCol.Count;
			}
		}

		public ICollection Keys
		{
			get
			{
				return KeyValueCol.Keys;
			}
		}

	}
}
