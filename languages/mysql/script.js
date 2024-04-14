const home = `
<div><h1>MySQL Tutorial</h1></div>
  
<p>MySQL is a widely used relational database management system (RDBMS).</p>
<p>MySQL is free and open-source.</p>
<p>MySQL is ideal for both small and large applications.</p>

<br/>
<br/>

<h2>Examples in Each Chapter</h2>
<p>With our online MySQL editor, you can edit the SQL statements, and click on a button to view the result.</p>
 
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
  <code>
    SELECT * FROM Customers;
    </code>
</div>

`

const introduction = `
<h1>Introduction to SQL</h1>
</br>
<p>SQL is a standard language for accessing and manipulating databases.</p>
</br>
<h3>What is SQL?</h3>
<ul>
<li>SQL stands for Structured Query Language</li>
</br>
<li>SQL lets you access and manipulate databases</li>
</br>
<li>SQL became a standard of the American National Standards Institute (ANSI)</br>
in 1986, and of the International Organization for Standardization (ISO) in 1987</li>
</br>
</br>

<h3>What Can SQL dp?</h3>
<ul>
<li>SQL can execute queries against a database</li>
</br>
<li>SQL can retrieve data from a database</li>
</br>
<li>SQL can insert records in a database</li>
</br>
<li>SQL can update records in a database</li>
</br>
<li>SQL can delete records from a database</li>
</br>
<li>SQL can create new databases</li>
</br>
<li>SQL can create new tables in a database</li>
</br>
<li>SQL can create stored procedures in a database</li>
</br>
<li>SQL can create views in a database</li>
</br>
<li>SQL can set permissions on tables, procedures, and views</li>
</br>
</br>
<h3>SQL is a Standard - BUT....</h3>
<p>Although SQL is an ANSI/ISO standard, there are different versions of the SQL language.</p>
</br>
<p>However, to be compliant with the ANSI standard, they all support at least the</br>
 major commands (such as SELECT, UPDATE, DELETE, INSERT, WHERE) in a similar manner.</p>
</br>
<div  style="background-color: rgb(255, 244, 207);; padding: 3em; margin-bottom: 2em ;">
  <p><b>Note:</b>Most of the SQL database programs also have their own proprietary extensions in addition to the SQL standard! </p>
   </div>
</br>
<h3>Using SQL in Your Web Site</h3>
<p>To build a web site that shows data from a database, you will need:</p>
</br>
<ul>
<li>An RDBMS database program (i.e. MS Access, SQL Server, MySQL)</li>
</br>
<li>To use a server-side scripting language, like PHP or ASP</li>
</br>
<li>To use SQL to get the data you want</li>
</br>
<li>To use HTML / CSS to style the page
</li>
</br>
</br>
<h1>RDBMS</h1>
</br>
<p>RDBMS stands for Relational Database Management System.</p>
</br>
<p>RDBMS is the basis for SQL, and for all modern database systems such as MS SQ</br>
L Server, IBM DB2, Oracle, MySQL, and Microsoft Access.</p>
</br>
<p>The data in RDBMS is stored in database objects called tables. A table is a collection</br>
 of related data entries and it consists of columns and rows.</p>
</br>
<p><b>Look at the "Customers" table:</b></p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
  <code>
    SELECT * FROM Customers;
    </code>
</div>
</br>
<p>Every table is broken up into smaller entities called fields.</br>
 The fields in the Customers table consist of CustomerID, CustomerName, ContactName, Address,</br>
  City, PostalCode and Country. A field is a column in a table that is designed to maintain specific information about every record in the table.</p>
</br>
<p>A record, also called a row, is each individual entry that exists in a table.</br>
 For example, there are 91 records in the above Customers table. A record is a horizontal entity in a table.</p>
</br>
<p>A column is a vertical entity in a table that contains all information associated with a specific field in a table.</p>
`
const syntax = `
<h1>SQL syntax</h1>
</br>
</br>
<h3>SQL Statements</h3>
<p>Most of the actions you need to perform on a database are done with SQL statements.</p>
</br>
<p>SQL statements consists of keywords that are easy to understand.</p>
</br>
<p><b>The following SQL statement returns all records from a table named "Customers":</b></p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
  <code>
    SELECT * FROM Customers;
    </code>
</div>
<p>In this tutorial we will teach you all about the different SQL statements.</p>
</br>
<h3>Database Tables</h3>
</br>
<p>A database most often contains one or more tables. Each table is identified by a name (e.g. "Customers" or "Orders"), and contain records (rows) with data.</p>
</br>
<p>In this tutorial we will use the well-known Northwind sample database (included in MS Access and MS SQL Server).</p>
</br>
<p><b>Below is a selection from the Customers table used in the examples:</b></p>


</br>
<h3>Keep in Mind That...</h3>
<ul>
<li>SQL keywords are NOT case sensitive: select is the same as SELECT</br>
In this tutorial we will write all SQL keywords in upper-case.</li>
</br>
<h3>Semicolon after SQL Statements?</h3>
<p>Some database systems require a semicolon at the end of each SQL statement.</p>
</br>
<p>Semicolon is the standard way to separate each SQL statement in database</br>
 systems that allow more than one SQL statement to be executed in the same call to the server.</p>
</br>
<p>In this tutorial, we will use semicolon at the end of each SQL statement.</p>
</br>
<h3>Some of The Most Important SQL Commands</h3>
</br>
<ul>
<li>SELECT - extracts data from a database</l>
<li>UPDATE - updates data in a database</li>
<li>DELETE - deletes data from a database</li>
<li>INSERT INTO - inserts new data into a database</li>
<li>CREATE DATABASE - creates a new database</li>
<li>ALTER DATABASE - modifies a database</li>
<li>CREATE TABLE - creates a new table</li>
<li>ALTER TABLE - modifies a table</li>
<li>DROP TABLE - deletes a table</li>
<li>CREATE INDEX - creates an index (search key)</li>
<li>DROP INDEX - deletes an index</li>
`
const select = `
<h1>SQL SELECT Statement</h1>
</br>
<h3>The SQL SELECT Statement</h3>
<p>The SELECT statement is used to select data from a database.</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <p>Return data from the Customers table:</p>
  <code>
  SELECT CustomerName, City FROM Customers;
    </code>
</div>
<h3>Syntax all columns</h3>
<p>If you want to return all columns, without specifying every column name, you can use the SELECT * syntax:</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <p>Return all the columns from the Customers table:</p>
  <code>
    SELECT * FROM Customers;
    </code>
</div>
<h1>SQL SELECT DISTINCT Statement</h1>
</br>
<h3>The SQL SELECT DISTINCT Statement</h3>
<p>The SELECT DISTINCT statement is used to return only distinct (different) values.</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <p>Select all the different countries from the "Customers" table:</p>
  <code>
  SELECT DISTINCT Country FROM Customers;
    </code>
</div>
<h3>SELECT Example Without DISTINCT</h3>
<p>If you omit the DISTINCT keyword, the SQL statement returns the "Country" value from all the records of the "Customers" table:</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
  SELECT DISTINCT Country FROM Customers;
    </code>
</div>
</br>
<h3>Count Distinct</h3>
<p>By using the DISTINCT keyword in a function called COUNT, we can return the number of different countries.</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT COUNT(DISTINCT Country) FROM Customers;
    </code>
</div>
<div  style="background-color: rgb(255, 244, 207);; padding: 3em; margin-bottom: 2em ;">
  <p><b>Note:</b>The COUNT(DISTINCT column_name) is not supported in Microsoft Access databases. </p>
<p>Here is a workaround for MS Access:</p></br>
<div id="home_example-content_one" class="example-content">
</br>
<h3>The SQL WHERE Clause</h3>
<p>The WHERE clause is used to filter records.</p>
<p>It is used to extract only those records that fulfill a specified condition.</p>
<h3>syntax</h3>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT column1, column2, ...</br>
   FROM table_name</br>
   WHERE condition;
    </code>
</div>
<div  style="background-color: rgb(255, 244, 207);; padding: 3em; margin-bottom: 2em ;">
  <p><b>Note:</b>The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.!</p>
   </div>
<p>SQL requires single quotes around text values (most database systems will also allow double quotes).</p></br>
<p>However, numeric fields should not be enclosed in quotes:</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT * FROM Customers</br>
   WHERE CustomerID=1;
    </code>
</div>
</br>
<h3>Operators in The WHERE Clause</h3>
<p>You can use other operators than the = operator to filter the search.</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   <p>Select all customers with a CustomerID greater than 80:</p>
   SELECT * FROM Customers</br>
WHERE CustomerID > 80;
    </code>
</div>
`
const and_or_not = `
<h1>MySQL AND, OR and NOT Operators</h1>
</br>
<h3>The MySQL AND, OR and NOT Operators</h3>
<p>The WHERE clause can be combined with AND, OR, and NOT operators.</p></br>
<p>The AND and OR operators are used to filter records based on more than one condition:</p>
<ul>
<li>The AND operator displays a record if all the conditions separated by AND are TRUE.</li>
<li>The OR operator displays a record if any of the conditions separated by OR is TRUE.</li>
<p>The NOT operator displays a record if the condition(s) is NOT TRUE.</p>
</br>
<h3>AND Syntax</h3>
<div id="home_example-content_one" class="example-content">
   <code>
   SELECT column1, column2, ...</br>
   FROM table_name</br>
   WHERE condition1 AND condition2 AND condition3 ...;
    </code>
</div>
<h3>OR Syntax</h3>
<div id="home_example-content_one" class="example-content">
   <code>
   SELECT column1, column2, ...</br>
   FROM table_name</br>
   WHERE condition1 OR condition2 OR condition3 ...;
    </code>
</div>
<h3>NOT Syntax</h3>
<div id="home_example-content_one" class="example-content">
   <code>
   SELECT column1, column2, ...</br>
   FROM table_name</br>
   WHERE NOT condition3 ...;
    </code>
</div>
<h3>AND example</h3>
<p>The following SQL statement selects all fields from "Customers" where country is "Germany" AND city is "Berlin":</h3>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT * FROM Customers</br>
WHERE Country = 'Germany' AND City = 'Berlin';
    </code>
</div>
<h3>OR Example</h3>
<p>The following SQL statement selects all fields from "Customers" where city is "Berlin" OR "Stuttgart":</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT * FROM Customers</br>
   WHERE City = 'Berlin' OR City = 'Stuttgart';
    </code>
</div>
<p>The following SQL statement selects all fields from "Customers" where country is "Germany" OR "Spain":</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT * FROM Customers</br>
WHERE Country = 'Germany' OR Country = 'Spain';
    </code>
</div>
<h3>NOT Example</h3>
<p>The following SQL statement selects all fields from "Customers" where country is NOT "Germany":</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT * FROM Customers</br>
WHERE NOT Country = 'Germany';
    </code>
</div>
<h3>Combining AND, OR and NOT</h3>
<p>You can also combine the AND, OR and NOT operators.</p></br>
<p>The following SQL statement selects all fields from "Customers" where country is </br>
"Germany" AND city must be "Berlin" OR "Stuttgart" (use parenthesis to form complex expressions):</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT * FROM Customers</br>
WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'Stuttgart');
    </code>
</div>
<p>The following SQL statement selects all fields from "Customers" where country is NOT "Germany" and NOT "USA":</p>
<div id="home_example-content_one" class="example-content">
   <h2>example</h2>
   <code>
   SELECT * FROM Customers</br>
WHERE NOT Country = 'Germany' AND NOT Country = 'USA';
    </code>
</div>
`
const MySQL_order_by = `
<h1>MySQL ORDER BY Keyword<h1>
</br>
<h3>The MySQL ORDER BY Keyword</h3>
<p>The ORDER BY keyword is used to sort the result-set in ascending or descending order.</p>
<p>The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.</p>
<h3>ORDER BY Syntax</h3>
<div id="home_example-content_one" class="example-content">   <code>
   SELECT column1, column2, ...</br>
FROM table_name</br>
ORDER BY column1, column2, ... ASC|DESC;
    </code>
</div>
</br>
<h3>ORDER BY Example</h3>
<p>The following SQL statement selects all customers from the "Customers" table, sorted by the "Country" column:</p>
<div id="home_example-content_one" class="example-content">   <code>
SELECT * FROM Customers</br>
ORDER BY Country;
    </code>
</div>
<h3>ORDER BY DESC Example</h3>
<p>The following SQL statement selects all customers from the "Customers" table, sorted DESCENDING by the "Country" column:</p>
<div id="home_example-content_one" class="example-content">   <code>
SELECT * FROM Customers
ORDER BY Country DESC;
    </code>
</div>
<h3>ORDER BY Several Columns Example</h3>
<p>The following SQL statement selects all customers from the "Customers" table,</br>
sorted by the "Country" and the "CustomerName" column. This means that it orders</br>
 by Country, but if some rows have the same Country, it orders them by</br>
 CustomerName:</p>
 <div id="home_example-content_one" class="example-content">   <code>
 <h2>Example</h2>
 SELECT * FROM Customers</br>
ORDER BY Country, CustomerName;
 </code>
 </div>
<h3>ORDER BY Several Columns Example 2</h3>
<p>The following SQL statement selects all customers from the "Customers" table,</b>
 sorted ascending by the "Country" and descending by the "CustomerName" column:</p>
 <div id="home_example-content_one" class="example-content">   <code>
 <h2>Example</h2>
 SELECT * FROM Customers</br>
ORDER BY Country ASC, CustomerName DESC;
 </code>
 </div>
`
const My_Insert_Into = `
<h1>MySQL INSERT INTO Statement</h1>
</br>
<h3>The MySQL INSERT INTO Statement</h3>
<p>The INSERT INTO statement is used to insert new records in a table.</p>
<h2>INSERT INTO Syntax</h2>
<p><b>It is possible to write the INSERT INTO statement in two ways:</b></p>
<p>1. Specify both the column names and the values to be inserted:</p>
<div id="home_example-content_one" class="example-content">   
<code>
INSERT INTO table_name (column1, column2, column3, ...)</br>
VALUES (value1, value2, value3, ...);
</code>
</div>
<p>2. If you are adding values for all the columns of the table, you do not need to</br>
specify the column names in the SQL query. However, make sure the order of the</br>
values is in the same order as the columns in the table. Here, the INSERT INTO</br>
syntax would be as follows:</p>
<div id="home_example-content_one" class="example-content">   
  <code>
   INSERT INTO table_name (column1, column2, column3, ...)</br>
   VALUES (value1, value2, value3, ...);
   </code>
   </div>  














`







const main = document.querySelector('.main')
const menu = document.querySelector('.sidebar')
menu.addEventListener('click',(e)=>{
  switch (e.target.id) {
    case 'home':
         main.innerHTML = home
        break;

        case 'intro':
          main.innerHTML = introduction
         break;

        case 'syntax':
          main.innerHTML = syntax
         break;
        case 'Select':
          main.innerHTML = select
         break;
      
        case 'Whare':
          main.innerHTML= Whare
         break;
        case 'and_or_not' :
          main.innerHTML =  and_or_not
         break;
         case 'MySQL_order_by':
          main.innerHTML = MySQL_order_by
          break ;



       default:  
        break;
  }
})