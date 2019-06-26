<%@ Page  Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" Title="Avalon Solution - Turnkey ECommerce Solution & Customized Website for Jewelry Retailers" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
  <!--Added Js to Call Master Template-->
  <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/MasterPage/Template.js"></script>
 <!--Added Js to Call Main Content-->
  <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/HomePage/MainContent.js"></script>
        <!-- J-carousel Portfilio Slider jS -->
       <script src="<%=Constants.Web_Root %>/Scripts/avalon/jquery.jcarousel.min.js"></script>
     <script src="<%=Constants.Web_Root %>/Scripts/avalon/jcarousel.responsive.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


  <div class="MiddleContent"  style="margin:0;" id="mainContent">
  
  </div>
<%-- <div id="Loader" style="background-color:#ffffff;display:none">
        <div id="loadingbox" >
       
        </div>
        <div id="progressBackgroundFilter">
        </div>
  </div>
  <script src="<%=Constants.AvalonDataDesinTemplatesPath%>js/Ajaxloader.js" type="text/javascript"></script>--%>
</asp:Content>

