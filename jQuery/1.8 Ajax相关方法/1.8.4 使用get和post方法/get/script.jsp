<%--
网站: <a href="http://www.crazyit.org">疯狂Java联盟</a>
author yeeku.H.lee kongyeeku@163.com
version 1.0
Copyright (C), 2001-2018, yeeku.H.Lee
This program is protected by copyright laws.
Program Name:
Date: 
--%>

<%@ page contentType="text/javascript; charset=utf-8" language="java" %>
$("ul>li").each(function(index)
{
	if(index % 2 == 0)
	{
		$(this).css("background-color" , "#ccffcc");
	}
	$(this).append("服务器响应" + index);
});
$("ul").slideDown(1000);
