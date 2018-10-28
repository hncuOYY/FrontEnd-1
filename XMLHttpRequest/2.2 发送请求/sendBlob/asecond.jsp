<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%
//request.setCharacterEncoding("utf-8");
System.out.println(request.getParameterMap().keySet());
String name = request.getParameter("name");
String price = request.getParameter("price");
String author = request.getParameter("author");
String publishDate = request.getParameter("publishDate");
System.out.println(name);
System.out.println(publishDate);
%>
