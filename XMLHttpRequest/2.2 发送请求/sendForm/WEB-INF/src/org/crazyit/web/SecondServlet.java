package org.crazyit.web;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

import java.io.*;
import java.util.*;

/**
 * Description:
 * <br/>网站: <a href="http://www.crazyit.org">疯狂Java联盟</a>
 * <br/>Copyright (C), 2001-2018, Yeeku.H.Lee
 * <br/>This program is protected by copyright laws.
 * <br/>Program Name:
 * <br/>Date:
 * @author Yeeku.H.Lee kongyeeku@163.com
 * @version 1.0
 */
@WebServlet(name="second" , urlPatterns={"/second.jsp"})
@MultipartConfig
public class SecondServlet extends HttpServlet
{
	public void service(HttpServletRequest request ,
		HttpServletResponse response)
		throws IOException , ServletException
	{
		request.setCharacterEncoding("utf-8");
		// 获取普通请求参数
		String name = request.getParameter("name");
		String author = request.getParameter("author");
		String price = request.getParameter("price");
		String publishDate = request.getParameter("publishDate");
		String append = request.getParameter("append");
		// 获取文件上传域
		Part part = request.getPart("cover");
		// 获取包含原始文件名的字符串
		String fileNameInfo = part.getHeader("Content-Disposition");
		// 提取上传文件的原始文件名
		String fileName = fileNameInfo.substring(
			fileNameInfo.indexOf("filename=\"") + 10 , fileNameInfo.length() - 1);
		// 将上传的文件写入服务器
		part.write(getServletContext().getRealPath("/uploadFiles")
			+ "/" + UUID.randomUUID()
			+ fileName.substring(fileName.lastIndexOf(".")));  // ①
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		out.println("书名：" + name
			+ "<p>作者：" + author
			+ "<p>价格：" + price
			+ "<p>出版日期：" + publishDate
			+ "<p>附加参数：" + append
			+ "<p>上传文件的类型为：" + part.getContentType()
			+ "<p>上传文件的大小为：" + part.getSize()
			+ "<p>上传文件的文件名为：" + fileName);
		out.flush();
	}
}