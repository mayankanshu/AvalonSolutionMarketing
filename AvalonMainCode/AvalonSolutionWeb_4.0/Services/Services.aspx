﻿<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Services.aspx.cs" Inherits="Services_Services" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <!--Added Js to Call Master Template-->
  <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/MasterPage/Template.js"></script>
 <!--Added Js to Call Main Content-->
  <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/Services/Services.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div id="Services"></div>
</asp:Content>

