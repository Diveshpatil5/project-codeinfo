const home = `
<div><h1>C++ Tutorial</h1></div>
  
<div id="intro_contentbox-one" class="contentbox">
  <h1>Learn c++</h1>
  <p>C++ is a popular programming language. <br>

    C++ is used to create computer programs, and is one of the most used language in game development.
    
    </p>
  </div>

<div><h1>Easy Learning with "code examles" </h1></div>
  <!-- code example box -->
<div id="home_example-content_one" class="example-content">
<code>
#include &lt;iostream&gt;<br>
using namespace std;<br><br>
int main() {<br>
cout &lt;&lt; "Hello World!";<br>
return 0;<br>
}
</code>

`
const introduction = `
<div><h2> C++ Introduction</h2> </div>

<div id="intro_contentbox-one" class="contentbox">
  <h1>What is c++?</h1>
<p>
C++ is a cross-platform language that can be used to create high-performance applications. <br/>

C++ was developed by Bjarne Stroustrup, as an extension to the C language. <br/>

C++ gives programmers a high level of control over system resources and memory.  <br/>

The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.

</p>

</div>


<div id="intro_contentbox-one" class="contentbox">
 <h2> Why Use C++ </h2>

 <p>
 C++ is one of the world's most popular programming languages. <br/>

 C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems. <br/>

C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs. <br/>

C++ is portable and can be used to develop applications that can be adapted to multiple platforms. <br/>

C++ is fun and easy to learn! <br/>

As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa. <br/>

 </p>
</div>

<div id="intro_contentbox-one" class="contentbox">
 <h2> Difference between C and C++ </h2>
 
 <p> C++ was developed as an extension of C, and both languages have almost the same syntax.</p>
 <p> The main difference between C and C++ is that C++ support classes and objects, while C does not.</p>
</div>

<h2> Get Started </h2>
<p>This tutorial will teach you the basics of C++.</p>
<p>It is not necessary to have any prior programming experience.</p>
</div>
`


const getStarted = `
 <h1> c++ Getting Stared</h1>

 <div id="intro_contentbox-one" class="contentbox">
 <h2> C++ Get Started </h2>
 
 <p>To start using C++, you need two things: </p>
  
 </p>
 <ul>
 <li>A text editor, like Notepad, to write C++ code</li>
 <li>A compiler, like GCC, to translate the C++ code into a language that the computer will understand</li> 
</ul>
<p>There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).

</p>
 </div>

 <div id="intro_contentbox-one" class="contentbox">
  <h2> c++ install IDE</h2>

  <p>An IDE (Integrated Development Environment) is used to edit AND compile the code.</p>
  <p>Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C++ code.</p>
  <p>Note: Web-based IDE's can work as well, but functionality is limited.</p>
  <p>We will use Code::Blocks in our tutorial, which we believe is a good place to start.</p>
  <p>You can find the latest version of Codeblocks at http://www.codeblocks.org/. Download the mingw-setup.exe file, which will install the text editor with a compiler.</p>
 </div>

 <div id="intro_contentbox-one" class="contentbox">
  <h2>C++ Quickstart</h2>
  
  <p>Let's create our first C++ file.</p>
  <p>Open Codeblocks and go to File > New > Empty File.</p>
  <p>Write the following C++ code and save the file as myfirstprogram.cpp (File > Save File as):</p>
  
 </div>

<div id="home__exampleone" class="example-content">
<code>
#include &lt;iostream&gt;<br>
using namespace std;<br><br>
int main() {<br>
  cout &lt;&lt; "Hello World!";<br>
  return 0;<br>
}
</code>
</div>

`

const syntax = `
<h1> c++ Syntax </h1>
<p> Let's break up the following code to understand it better: </p>

<div id="home__exampleone" class="example-content">

<code>
#include &lt;iostream&gt;<br>
using namespace std;<br><br>
int main() {<br>
  cout &lt;&lt; "Hello World!";<br>
  return 0;<br>
}
</code>
<code>
#include &lt;iostream&gt;<br>
using namespace std;<br><br>
int main() {<br>
  cout &lt;&lt; "Hello World!";<br>
  return 0;<br>
}
</code>
</div>

<h2>Example explained</h2>
<p> Line 1: <code> #include <iostream> </code> is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs. </p>
<p> Line 2: using namespace std means that we can use names for objects and variables from the standard library. </p>
<p>Line 3: A blank line. C++ ignores white space. But we use it to make the code more readable.</p>
<p>Line 4: Another thing that always appear in a C++ program is int main(). This is called a function. Any code inside its curly brackets {} will be executed.</p>
<p>Line 5: cout (pronounced "see-out") is an object used together with the insertion operator (<<) to output/print text. In our example, it will output "Hello World!".</p>
<p>Note: Every C++ statement ends with a semicolon ;.</p>
<p>Note: The body of int main() could also been written as:
int main () { cout << "Hello World! "; return 0; }</p>
<p>Remember: The compiler ignores white spaces. However, multiple lines makes the code more readable.</p>
<p>Line 6: return 0 ends the main function.</p>
<p>Line 7: Do not forget to add the closing curly bracket } to actually end the main function.</p>

<h2> Omitting Namespace </h2>
<p> You might see some C++ programs that runs without the standard namespace library. The using namespace std line can be omitted and replaced with the std keyword, followed by the :: operator for some objects:</p>


<div id="home__exampleone" class="example-content">
<h2> Example </h2>
<code>
#include &lt;iostream&gt;<br>
using namespace std;<br><br>
int main() {<br>
  cout &lt;&lt; "Hello World!";<br>
  return 0;<br>
}
</code>
</div>

`

const output = `
 <h1>c++ Output (print text)</h1>
 <br/>
 <hr/>

 <h2>C++ Output (Print Text)</h2>
 <p>The cout object, together with the << operator, is used to output values/print text: <p/>

 <div id="home__exampleone" class="example-content">
<code>
#include &lt;iostream&gt;<br>
using namespace std;<br><br>
int main() {<br>
  cout &lt;&lt; "Hello World!";<br>
  return 0;<br>
}
</code>
</div>

<p>You can add as many cout objects as you want. However, note that it does not insert a new line at the end of the output:</p>

<div id="home__exampleone" class="example-content">
<code>
#include &lt;iostream&gt;<br>
using namespace std;<br><br>
int main() {<br>
  cout &lt;&lt; "Hello World!";<br>
  cout &lt;&lt; "I am learning";<br>
  return 0;<br>
}
</code>
</div>
`

const commnets = `
<h1> C++ Comments</h1>
<br/>
<hr/>

<p> 
Comments can be used to explain C++ code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be singled-lined or multi-lined.
</p>
<br/>
<h2>Single-line Comments</h2> 

<p>Single-line comments start with two forward slashes (//).</p>
<p>Any text between // and the end of the line is ignored by the compiler (will not be executed).</p>
<p>This example uses a single-line comment before a line of code:</p>

<div id="home__exampleone" class="example-content">
<code>
  cout &lt;&lt;  "Hello World!";<br>
</code>
</div>

<br/>

<h2>C++ Multi-line Comments</h2>
<p>Multi-line comments start with /* and ends with */.</p>
<p>Any text between /* and */ will be ignored by the compiler:</p>

<div id="home__exampleone" class="example-content">
<code>
/* The code below will print the words Hello World!
to the screen, and it is amazing */
  cout &lt;&lt;  "Hello World!";<br>
</code>
</div>


`
const variables =  `
 <h1>c++ Variables</h1>
 <p>Variables are containers for storing data values.

 In C++, there are different types of variables (defined with different keywords), for example:</p>
 <ul>
 <li>int - stores integers (whole numbers), without decimals, such as 123 or -123</li>
 <br/>
 <li>double - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
 <br/>
 <li>char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
 <br/>
 <li>string - stores text, such as "Hello World". String values are surrounded by double quotes</li>
 <br/>
 <li>bool - stores values with two states: true or false</li>
 </ul>
 <br/>

 <h1>Declearing (Creating Variables)</h1>
 <p>To create a variable, specify the type and assign it a value:</p>

 <div id="home__exampleone" class="example-content">
 <h2>Syntax</h2>
 <code>
type variableName = value;
</code>
</div>

<p>Where type is one of C++ types (such as int), and variableName is the name of the variable (such as x or myName). The equal sign is used to assign values to the variable.</p>
<br>
<p>To create a variable that should store a number, look at the following example: </p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<p>Create a variable called myNum of type int and assign it the value 15:</p>
<code>
int myNum = 15; <br/>
cout << myNum;
</code>
</div>

<p>You can also declare a variable without assigning the value, and assign the value later:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int myNum = ;   <br/>
 myNUm =  15; <br/>
cout << myNum;
</code>
</div>

<p>Note that if you assign a new value to an existing variable, it will overwrite the previous value:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int myNum = 15;  // myNum is 15 <br/>
myNum = 10;  // Now myNum is 10 <br/>
cout << myNum;  // Outputs 10 <br/>
</code>
</div>

<h2>Other types</h2>
<p>A demonstration of other data types:</p>
<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int myNum = 5;               // Integer (whole number without decimals) <br/>
double myFloatNum = 5.99;    // Floating point number (with decimals) <br/>
char myLetter = 'D';         // Character <br/>
string myText = "Hello";     // String (text) <br/>
bool myBoolean = true;       // Boolean (true or false) <br/>
</code>
</div>

<h2>Display Variables</h2>
<p>The cout object is used together with the << operator to display variables.</p>
<p>To combine both text and a variable, separate them with the << operator:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int myAge = 35; <br/>
cout << "I am " << myAge << " years old.";
</code>
</div>

 <h2>Add Variables Together</h2>
 <p>To add a variable to another variable, you can use the + operator:<p/>

 <div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int x = 5; <br/>
int y = 6; <br/>
int sum = x + y; <br/>
cout << sum; <br/>
</code>
</div>


`

const multiple_variables = `
 <h1>C++ Declare Multiple Variables</h1>

 <p>To declare more than one variable of the same type, use a comma-separated list:</p>

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 int x = 5, y = 6, z = 50; <br/>
 cout << x + y + z;
 </code>
 </div>

 <h2>One Value to Multiple Variables</h2>
 <p>You can also assign the same value to multiple variables in one line: </p>

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 int x, y, z;  <br/>
x = y = z = 50; <br/>
cout << x + y + z; <br/>
 </code>
 </div>

`

const  identifiers  = `
 <h1> C++ Identifiers</h1>
 <p>All C++ variables must be identified with unique names.</p>
 <p>These unique names are called identifiers.</p>
 <p>Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).</p>
 <p>Note: It is recommended to use descriptive names in order to create understandable and maintainable code:</p>

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 // Good
 int minutesPerHour = 60;  <br/>
 
 // OK, but not so easy to understand what m actually is  <br/>
 int m = 60;
 </code>
 </div>

 <p>The general rules for naming variables are:</p>

 <ul>
  <li>Names can contain letters, digits and underscores</li>
  <li>Names must begin with a letter or an underscore (_)</li>
  <li>Names are case-sensitive (myVar and myvar are different variables)</li>
  <li>Names cannot contain whitespaces or special characters like !, #, %, etc.</li>
  <li>Reserved words (like C++ keywords, such as int) cannot be used as names</li>
 <ul/>
`

const  constants  = ` 
 <h1>C++ constants</h1>
 <br/>
 <h3>constnats</h3> 
 <br/>
 <p>When you do not want others (or yourself) <br/>
  to change existing variable values, use the const <br/>
  keyword (this will declare the variable as "constant", which means unchangeable and read-only):</p>

  <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 const int myNum = 15;  // myNum will always be 15 <br/>
 myNum = 10;  // error: assignment of read-only variable 'myNum'
 </code>
 </div>

 <p>You should always declare the variable as constant when you have <br/>
  values that are unlikely to change:</p>

  <div id="home__exampleone" class="example-content">
  <h2>Example</h2>
  <code>
  const int minutesPerHour = 60; <br/>
  const float PI = 3.14;
  </code>
  </div>

  <h2>Notes On Constants</h2>
  <p>When you declare a constant variable, it must be assigned with a value:</p>

  <div id="home__exampleone" class="example-content">
  <h2>Example</h2>
  <p>Like This : </p>
  <code>
  const int minutesPerHour = 60;
  </code>
  <br/>

  <p> this however, <b>Will not Work</b></p> 

  <code>
  const int minutesPerHour; <br/>
  minutesPerHour = 60; // error  
  </code>
  </div>

 
`

const user_inputs =`
 <h1>c++ User input</h1>
 <br/>
 <p>You have already learned that cout is used to output (print) values. Now we will use cin to get user input.</p>
 <p>cin is a predefined variable that reads data from the keyboard with the extraction operator (>>).</p>
 <p>In the following example, the user can input a number, which is stored in the variable x. Then we print the value of x:</p>

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 int x;  <br/>
cout << "Type a number: "; // Type a number and press enter <br/>
cin >> x; // Get user input from the keyboard <br/>
cout << "Your number is: " << x; // Display the input value <br/>
 </code>
 </div>

 <div  style="background-color: rgb(255, 244, 207);; padding: 3em; margin-bottom: 2em ;">
  <h3> Good To Know</h3>
  <p>cout is pronounced "see-out". Used for output, and uses the insertion operator (<<) </p>
  <p>cin is pronounced "see-in". Used for input, and uses the extraction operator (>>)</p>
  
 </div>

 <h2>Creating a Simple Calculator</h2>
 <p>In this example, the user must input two numbers. Then we print the sum by calculating (adding) the two numbers:</p>

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 int x, y;  <br/>
 int sum; <br/>
 cout << "Type a number: "; <br/>
 cin >> x; <br/>
 cout << "Type another number: "; <br/>
 cin >> y; <br/>
 sum = x + y; <br/>
 cout << "Sum is: " << sum; <br/>
 </code>
 </div>

` 
const data_types = `
<h1>c++ Data Types</h2>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int myNum = 5;               // Integer (whole number) </br>
float myFloatNum = 5.99;     // Floating point number </br>
double myDoubleNum = 9.98;   // Floating point number </br>
char myLetter = 'D';         // Character </br>
bool myBoolean = true;       // Boolean </br>
string myText = "Hello";     // String </br>
</code>
</div>

<h2>Numeric Types</h2>
<p>Use int when you need to store a whole <br/>
 number without decimals, like 35 or 1000, and float or double when <br/>
  you need a floating point number (with decimals), like 9.99 or 3.14515.</p>

  <div id="home__exampleone" class="example-content">
<h2>Int</h2>
<code>
int myNum = 1000; <br/>
cout << myNum;
</code>
</div>

  <div id="home__exampleone" class="example-content">
<h2>float</h2>
<code>
float myNum = 5.75; > <br/>
cout << myNum;
</code>
</div>

  <div id="home__exampleone" class="example-content">
<h2>double</h2>
<code>
double myNum = 19.99;  <br/>
cout << myNum;
</code>
</div>

<div style="background-color: rgb(255, 244, 207); padding: 1em; margin-bottom: 2em;">
 <p>float vs. double</p>
 <br/>
 <p>The precision of a floating point value indicates how many  <br/>
 digits the value can have after the decimal point. The precision of float is only six or seven decimal digits, <br/>
  while double variables have a precision of about 15 digits. Therefore it is safer to use double for most calculations.<p/>
</div>

<h3>Scientific Numbers</h3>
<p>A floating point number can also be a scientific number with an "e" to <br/> indicate the power of 10:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
float f1 = 35e3; <br/>
double d1 = 12E4; <br/>
cout << f1; <br/>
cout << d1; <br/>
</code>
</div>

<h1>C++ Boolean Data Types</h1>
<p>A boolean data type is declared with the bool keyword and can only take the values true or false.</p>
<p>When the value is returned, true = 1 and false = 0.</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
bool isCodingFun = true; <br/>
bool isFishTasty = false; <br/>
cout << isCodingFun;  // Outputs 1 (true) <br/>
cout << isFishTasty;  // Outputs 0 (false)
</code>
</div>

<div style="background-color: rgb(255, 244, 207); padding: 1em; margin-bottom:3em">
 <p>Boolean values are mostly used for conditional testing, which you will learn more about in a later chapter.</p>
</div>

<h1>C++ Character Data Types</h1>
<p>The char data type is used to store a single character. The character must <br/> be surrounded by single quotes, like 'A' or 'c':</p>


<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
char myGrade = 'B';  <br/>
cout << myGrade;
</code>
</div>

<p>Alternatively, if you are familiar with ASCII, you can use ASCII values to display certain characters:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
char a = 65, b = 66, c = 67; <br/>
cout << a; <br/>
cout << b; <br/>
cout << c; <br/>
</code>
</div>

<h1>C++ String Data Types</h1>
<p>The string type is used to store a sequence
 of characters (text). This is not a built-in type, <br/>
but it behaves like one in its most basic usage. String values must be surrounded by double quotes:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
string greeting = "Hello";  <br/>
cout << greeting;
</code>
</div>

<p>To use strings, you must include an additional header file in the source code, the <string> library:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
// Include the string library <br/>
#include <string>
 <br/>
 <br/>
// Create a string variable <br/>
string greeting = "Hello";
 <br/>
 <br/>
// Output string value <br/>
cout << greeting;
</code>
</div>

`

const operators = `
<h1> C++ Operators </h1>
<p>Operators are used to perform operations on variables and values. </p>
<p>In the example below, we use the + operator to add together two values:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int x = 100 + 50;
</code>
</div>

<p>Although the + operator is often used to add together two values, like in the example above, <br/>
 it can also be used to add together a
 variable and a value, or a variable and another variable:</p>

 <div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int sum1 = 100 + 50;        // 150 (100 + 50) <br/>
int sum2 = sum1 + 250;      // 400 (150 + 250) <br/>
int sum3 = sum2 + sum2;     // 800 (400 + 400) <br/>
</code>
</div>

<h1> C++ assignment operators</h1>
<p>Assignment operators are used to assign values to variables.<p/>
<p>In the example below, we use the assignment operator (=) to assign the value 10 to a variable called x:<p/>
 
<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int x = 10;
</code>
</div>

<p>The addition assignment operator (+=) adds a value to a variable:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int x = 10;
x += 5;
</code>
</div>

// table  --->

<h1> C++ Comparison Operators </h1>
 <p>Comparison operators are used to compare two values (or variables). This is important in programming, <br/>
 because it helps us to find answers and make decisions.</p>
 <p>The return value of a comparison is either 1 or 0, which means true (1) or false   <br/>
 (0). These values are known as Boolean values, and you will learn more about <br/>
  them in the Booleans and If..Else chapter.</p>
  <p>In the following example, we use the greater than operator (>) to find out if 5 is greater than 3:</p>

<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
int x = 5; <br/>
int y = 3; <br/>
cout << (x > y); // returns 1 (true) because 5 is greater than 3
</code>
</div>

// Table  ---> 

<h1> C++ Logical Operators</h1>
<p>As with comparison operators, you can also test for true (1) or false (0) values <br/> with logical operators.</p>
<p>Logical operators are used to determine the logic between variables or values:</p>

// Table -->

`

const string = `
<h1>C++ String</h1>
<p>Strings are used for storing text.</p>
<p>A string variable contains a collection of characters surrounded by double quotes:</p>
<div id="home__exampleone" class="example-content">
<h2>Example</h2>
<p>Create a variable of type string and assign it a value:</p>
<code>
string greeting = "string greeting = "Hello";";
</code>
</div>
<p>To use strings, you must include an additional header file in the source code,</br>
 the <string> library:
 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 string greeting =// Include the string library
 #include <string>
 
 // Create a string variable
 string greeting = "Hello"; ;";
 </code>
 </div>

 <h1>String Concatenation</h1>
<p>The + operator can be used between strings to add them together to make a new string.</br>
   This is called concatenation:</p>
   <div id="home__exampleone" class="example-content">
<h2>Example</h2>
<code>
string firstName = "John ";
string lastName = "Doe";
string fullName = firstName + lastName;
cout << fullName;
</code>
</div>
<p>In the example above, we added a space after firstName to create a space between John and Doe on output.</br>
 However, you could also add a space with quotes (" " or ' '):</p>

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 string firstName = "John";  <br/>
string lastName = "Doe"; <br/>
string fullName = firstName + " " + lastName;
cout << fullName;
 </code>
 </div>

 <h1> Append</h1>
  <p>A string in C++ is actually an object, which contain functions that can perform <br/>
   certain operations on strings. For example, you can also concatenate strings <br/>
   with the append() function:</p> 
 
   <div id="home__exampleone" class="example-content">
   <h2>Example</h2>
   <code>
   string firstName = "John ";  <br/>
string lastName = "Doe"; <br/>
string fullName = firstName.append(lastName); <br/>
cout << fullName;
   </code>
   </div>

   <h1> Nmbers and string </h1>

   
   <div style="background-color: pink; padding: 3em  ;margin-top:2em;">
   WARNING! <br/>

   C++ uses the + operator for both addition and concatenation.<br/>
   
   Numbers are added. Strings are concatenated.
 </div>

 <p>If you add two numbers, the result will be a number: </p> 

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 int x = 10; <br/>
int y = 20; <br/>
int z = x + y;      // z will be 30 (an integer)
 </code>
 </div>

 <p>If you add two strings, the result will be a string concatenation:</p>

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 string x = "10";  <br/>
 string y = "20"; <br/>
 string z = x + y;   // z will be 1020 (a string)
 </code>
 </div>

 <p>If you try to add a number to a string, an error occurs:</p>

 <div id="home__exampleone" class="example-content">
 <h2>Example</h2>
 <code>
 string x = "10";
 int y = 20;
 string z = x + y;
 </code>
 </div>

`
const Concatenation= `

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
  
    case 'started':
         main.innerHTML = getStarted
        break;
  
    case 'syntax':
         main.innerHTML = syntax
        break;
  
    case 'output':
         main.innerHTML = output
        break;
  
    case 'comments':
         main.innerHTML = commnets
        break;
  
    case 'variabels':
         main.innerHTML = variables
        break;
  
    case 'multiple-variables':
         main.innerHTML = multiple_variables
        break;
  
    case 'identifiers':
         main.innerHTML = identifiers
        break;
  
    case 'constants':
         main.innerHTML = constants
        break;
  
    case 'user_inputs':
         main.innerHTML = user_inputs
        break;
  
    case 'data-types':
         main.innerHTML = data_types
        break;

        
    case 'operators':
      main.innerHTML = operators
     break;
     case 'string':
      main.innerHTML = string
     break;


  
    default:
        break;
  }
})

console.log(menu)
console.log(main)
