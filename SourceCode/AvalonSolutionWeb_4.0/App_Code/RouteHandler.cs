using System.Web.Compilation;
using System.Web.UI;
using System.Web;
using System.Web.Routing;
using System;
using System.IO;


public interface IRoutablePage
{
    RequestContext RequestContext { set; }
}
public class RouteHandler : IRouteHandler
{
     public string VirtualPath { get; private set; }
   // private readonly string _virtualDir;

   //public DirectoryRouteHandler(string virtualDir)
   //{
   //   _virtualDir = virtualDir;
   //}
    
    public RouteHandler(string virtualPath)
    {
        this.VirtualPath = virtualPath;
    }





    public IHttpHandler GetHttpHandler(RequestContext requestContext)
    {

        string filePath = requestContext.HttpContext.Server.MapPath(VirtualPath);

        //if (!File.Exists(filePath))
        //{

        try
        {
            var page = BuildManager.CreateInstanceFromVirtualPath(VirtualPath, typeof(Page)) as IHttpHandler;


            if (page != null)
            {
                var routablePage = page as IRoutablePage;

                if (routablePage != null) routablePage.RequestContext = requestContext;
            }


            return page;
        }
        catch
        {

            throw new HttpException();
        }
       

    }

   // public IHttpHandler GetHttpHandler(RequestContext requestContext)
   //{
   //   var routeValues = requestContext.RouteData.Values;

   //   if (!routeValues.ContainsKey("pathInfo"))
   //   {
   //      return null; /* this doesn't work - must be a RouteHandler */;
   //   }

   //   var path = routeValues["pathInfo"] as string;

   //   if (String.IsNullOrWhiteSpace(path))
   //   {
   //      path = "index.aspx";
   //   }

   //   // add the .aspx extension if required    
   //   if (!path.EndsWith(".aspx")) { path += ".aspx"; }

   //   // build the test path    
   //   var pageVirtualPath = string.Format("{0}/{1}", VirtualPath, path);

   //   string filePath = requestContext.HttpContext.Server.MapPath(pageVirtualPath);

   //   // check to see if the physical .aspx file exists, if not exit this handler
   //   if (!File.Exists(filePath))
   //   {
   //      return null; /* this doesn't work - must be a RouteHandler */;
   //   }

   //   return new PageRouteHandler(pageVirtualPath, true).GetHttpHandler(requestContext);
   //}
}


 