package org.crazyit.web;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

import java.io.*;
import java.nio.file.*;
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
public class SecondServlet extends HttpServlet
{
	public void service(HttpServletRequest request ,
		HttpServletResponse response)
		throws IOException , ServletException
	{
		// 获取上传文件的MIME类型
		String contentType = request.getContentType();
		// 获取请求对应的输入流，用于读取二进制数据
		InputStream inputStream = request.getInputStream();
		// 获取上传文件的扩展名，此处只处理图片，其他文件全部以.bin结尾
		String suffix = contentType.startsWith("image/") ?
			"." + contentType.substring(6) : ".bin";
		// 完成文件上传
		Files.copy(inputStream, Paths.get(getServletContext().getRealPath("/uploadFiles")
			+ "/" + UUID.randomUUID() + suffix));
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		out.println("<p>上传文件的类型为：" + contentType
			+ "<p>上传文件的大小为：" + request.getContentLength());
	}
}