<%@ Page Title=""  Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="AboutUs.aspx.cs" Inherits="ArticlePages_AboutUs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <!--Added Js to Call Master Template-->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/MasterPage/Template.js"></script>
    <!-- Js content ABout Us - Single Page-->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>js/AboutUsPage/AboutUs.js"></script>
    <!-- Js content ABout Us Article - Tabs Based Page -->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>js/AboutUsPage/AboutUsArticleTabs.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


<div class="container">
<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div id="AboutUs"></div>
        <div id="AboutUsTabs"></div>
    </div>
</div>
</div>



    <%--<div class="ArticleMiddle about">
        <div id="AboutUs">
        </div>
        <div id="AboutUsTabs">
        </div>
    </div>--%>
      <div id="Loader" style="background-color:#ffffff;display:none">
        <div id="loadingbox" >
            <%--<span id="Loading">Loading..</span>--%>
        </div>
        <div id="progressBackgroundFilter">
        </div>
    </div>
      <script src="<%=Constants.AvalonDataDesinTemplatesPath%>js/Ajaxloader.js" type="text/javascript"></script>
</asp:Content>


