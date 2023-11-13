<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>GCD, LCM 프로그램</title>
</head>
<body>
	<h2> GCD, LCM 프로그램 </h2> 
	<form method = "post" action="GCD.jsp">
		Num1: <input type = "text" name="num1"><br>
		Num2: <input type = "text" name="num2"><br>
		<br>
		<input type ="submit">
	</form>
	
	<br><hr><br>
	
	<% 
	   int i = 15; 
	   int j = 5;
	   
	   if (request.getMethod().equalsIgnoreCase("post")) {
           i = Integer.parseInt(request.getParameter("num1"));
           j = Integer.parseInt(request.getParameter("num2"));
       }
       
       int gcd = GCD(i, j);
       int lcm = LCM(i, j);
       
       java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("a h시 mm분");
       java.util.Date currentTime = new java.util.Date();
       String time = sdf.format(currentTime);
    %>
    
	Num1: <%= i %><br>
	Num2: <%= j %><br>
	GCD(<%=i%>,<%=j%>): <%=gcd%><br>
	LCM(<%=i%>,<%=j%>): <%=lcm%><br><br><hr><br>
	
	<%= time %> 현재
	<%= ++count %>번 실행되었습니다.
	
	<%! int count = 0; %>
	<%!
		public int GCD(int num1, int num2){
			int gcdNum = 0;
			
			for(int i=1; i<=num1 && i<=num2; i++){
				if(num1 % i == 0 && num2 % i == 0){
					gcdNum = i;
				}
			}
			return gcdNum;
		}
		public int LCM(int num1, int num2){
			return (num1*num2)/GCD(num1, num2);
		}
	%>
</body>
</html>