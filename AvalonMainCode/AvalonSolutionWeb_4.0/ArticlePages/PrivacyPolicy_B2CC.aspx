<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" Title ="" CodeFile="PrivacyPolicy_B2CC.aspx.cs" Inherits="ArticlePages_PrivacyPolicy_B2CC" %>

 
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
<!--Added Js to Call Master Template-->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/MasterPage/Template.js"></script>
    <!-- Js content - TermsOfUse Article Page-->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>js/ArticlePages/PrivacyPolicy_B2CC.js"></script>   
   
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
       <div class="ArticleMiddle about">
        <div id="PrivacyPolicy_B2CC">
        </div>
    </div>
      <div id="Loader" style="background-color:#ffffff;display:none">
        <div id="loadingbox" >
             <%--<span id="Loading">Loading..</span>--%>
        </div>
        <div id="progressBackgroundFilter">
        </div>
          
    </div>
     <div class="MiddleContent MiddleContentColoredBack">
        <div class="ArticleHeader">
         <%--   <div class="ContactHead">
                    P<span style="font-size: 16px;">RIVACY</span>
                    P<span style="font-size: 16px;">OLICY</span>
            </div>--%>
        </div>
        <div class="ContactMid">
           
        </div>
    </div>

      <script src="<%=Constants.AvalonDataDesinTemplatesPath%>js/Ajaxloader.js" type="text/javascript"></script>
   </asp:Content>


