<%@ WebHandler Language="C#" Class="Rand" %>

using System;
using System.Web;

public class Rand : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        context.Response.Write(new Random().Next());
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}