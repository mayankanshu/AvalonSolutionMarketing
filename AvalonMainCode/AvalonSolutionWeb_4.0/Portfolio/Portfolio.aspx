﻿<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Portfolio.aspx.cs" Inherits="Portfolio_Portfolio" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <!--Added Js to Call Master Template-->
  <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/MasterPage/Template.js"></script>
 <!--Added Js to Call Main Content-->
  <script type="text/javascript" src="<%=Constants.AvalonDataDesinTemplatesPath%>Js/Portfolio/Portfolio.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div id="Portfolio"></div>
</asp:Content>

