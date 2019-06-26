<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="TermsOfUse_B2CC.aspx.cs" Inherits="ArticlePages_TermsOfUse_B2CC" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <!--Added Js to Call Master Template-->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/MasterPage/Template.js"></script>
    <!-- Js content - TermsOfUse Article Page-->
    <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>js/ArticlePages/TermsOfUse_B2CC.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="ArticleMiddle about">
        <div id="TermsOfUse_B2CC">
        </div>
    </div>
    <div id="Loader" style="background-color: #ffffff; display: none">
        <div id="loadingbox">
            <%--<span id="Loading">Loading..</span>--%>
        </div>
        <div id="progressBackgroundFilter">
        </div>

    </div>
    <script src="<%=Constants.AvalonDataDesinTemplatesPath%>js/Ajaxloader.js" type="text/javascript"></script>
</asp:Content>