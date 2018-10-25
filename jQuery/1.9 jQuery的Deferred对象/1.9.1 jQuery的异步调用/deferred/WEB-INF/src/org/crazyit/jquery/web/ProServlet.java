package org.crazyit.jquery.web;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

import java.io.*;

@WebServlet(urlPatterns="/pro")
public class ProServlet extends HttpServlet
{
	public void service(HttpServletRequest request ,
		HttpServletResponse response)
		throws IOException , ServletException
	{
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		// 获取请求参数
		String user = request.getParameter("user");
		String[] books = request.getParameterValues("books");
		// 生成HTML字符串响应
		out.println(user + ",您好，现在时间是:" + new java.util.Date());
		out.println("<br />您喜欢的图书如下：");
		out.println("<ol>");
		for(int i = 0 ; i < books.length ; i++)
		{
			out.println("<li>" + books[i] + "</li>");
		}
		out.println("</ol>");
	}
}
