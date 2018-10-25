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
