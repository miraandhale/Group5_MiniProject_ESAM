# Group5_MiniProject_ESAM

tomcat = spring-boot-starter-web
mysql driver dependency = mysql-connector-java
starter jpa=spring-boot-starter-data-jpa == provides CRUDRepository
jstl =1.1.1
tomcat-jasper=10.0.2


----steps---
Entity class
1. Entity class created
2. Define variables
3. Getters/setters
4. Constructors/param/default
5. Made empid as PK
--------------

Now configure Database
==============

1.create db name = projectdb
2.create Table name = employee_details
//create table employee_details(empid int,firstname varchar(10),lastname varchar(10),dob varchar(10),city varchar(10),doj varchar(10))

-----------
configure applications.properties
server.port = 8083



---------

Create controller class  

API Mappings
1. create api to insert data in table : http://localhost:8083/insert
2. create api to update data in table : http://localhost:8083/update
3. create api to show all employees : http://localhost:8083/allemps
4. create api to delete record from table : http://localhost:8083/delete/41619
5. create api to search record in table : http://localhost:8083/search/41621
6. create api to insert score in table : http://localhost:8083/addscore
7. create api to view all score : http://localhost:8083/course-score
8. create api to update score in table : http://localhost:8083/updatescore
