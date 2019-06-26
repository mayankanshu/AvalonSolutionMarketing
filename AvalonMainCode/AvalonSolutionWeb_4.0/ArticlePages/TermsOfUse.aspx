<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="TermsOfUse.aspx.cs" Inherits="ArticlePages_TermsOfUse" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <!--Added Js to Call Master Template-->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/MasterPage/Template.js"></script>
    <!-- Js content - TermsOfUse Article Page-->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>js/ArticlePages/TermsOfUse.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
      <div class="ArticleMiddle about">
        <div id="TermsOfUse">
        </div>
    </div>
      <div id="Loader" style="background-color:#ffffff;display:none">
        <div id="loadingbox" >
          <%--<span id="Loading">Loading..</span>--%>
        </div>
        <div id="progressBackgroundFilter">
        </div>
    </div>
      <script src="<%=Constants.AvalonDataDesinTemplatesPath%>js/Ajaxloader.js" type="text/javascript"></script>
</asp:Content>

