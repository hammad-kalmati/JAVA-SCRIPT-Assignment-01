alert("Error! Please enter a valid password.");
alert("Welcome to JS Land..." + "\n" + "Happy Coding!");

var userName;
var myName = "hammad ashraf";

var message;
message = "Hello World";
alert(message);

var studentName = "Hammad Ashraf";
var studentAge = "19 years old";
var studentCourse = "Web development";

alert("Student Name :" + " " + studentName);
alert("Student Age :" + " " + studentAge);
alert("Student Course :" + " " + studentCourse);

var food = "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P";
alert(food);

var email = "hammadkalmati581@gmail.com";
alert("My email address is" + " " + email);

var book = "A smarter \nway to learn JavaScript.";
alert("I am trying to learn from the Book " + book);

document.write("<h2> Yah! I can write HTML content through JavaScript </h2>");

var age = 19;
alert("I am " + age + " years old");

alert("You have visited this site 9 times.");

var birthYear =  2006;
document.write("My birth year is : <b>" + birthYear + "</b>");
document.write("<br> Data type of my declared variable is <b>" + typeof(birthYear) + "</b>"); 


var visitorName = "John Doe";
var quantity = "5 T-shirt";
document.write("<br><br><b>" + visitorName + " </b> ordered <b>" + quantity + "</b>(s) on XYZ clotihng store");

var x, y, z;

document.write("<br><h4> Rules for naming JS variables :- </h4>");
document.write("Variable names can only contain , number , $ and _ . For example : $my_1stVariable ");
document.write("<br> Variable must begin with letter, $ or _ . For example : $name , _name or name");
document.write("<br> Variable names are case sensitive");
document.write("<br> Variable names should not be JS keywords.");


// ADDITION
var num1 = 3;
var num2 = 5;
var sum = 5 + 3;
document.write("<br> <br> Sum of 5 and 3 is : <b>" + sum + "</b>");

// SUBTRACTION
var num3 = 3;
var num4 = 5;
var sum1 = 5 - 3;
document.write("<br> Subtraction of 5 and 3 is : <b>" + sum1 + "</b>");

// MULTIPLICATION
var num5 = 3;
var num6 = 5;
var sum2 = 5 * 3;
document.write("<br> Multiplication of 5 and 3 is : <b>" + sum2 + "</b>");

// DIVISION
var num7 = 3;
var num8 = 5;
var sum3 = 5 / 3;
document.write("<br> Division of 5 and 3 is : <b>" + sum3 + "</b>");

// MODULUS
var num9 = 3;
var num10 = 5;
var sum4 = 5 % 3;
document.write("<br> Modulus of 5 and 3 is : <b>" + sum4 + "</b>");

var number;
document.write("<br><br> Value after variable declaration is : <b>" + number + "</b>");

number = 5;
document.write("<br> Inintial value : <b>" + number + "</b>");

number++;
document.write("<br> Value after increment is : <b>" + number + "</b>");

number = number + 7;
document.write("<br> Value after addition is : <b>" + number + "</b>");

number--;
document.write("<br> Value after decrement is : <b>" + number + "</b>");

number = number % 3;
document.write("<br> The remainder is : <b>" + number + "</b>");

var ticketPrice = 600;
var Tickets = 5;

var totalPrice = ticketPrice * Tickets;
document.write("<br><br> Total cost to buy " + Tickets + " tickets to a movie is : <b>" + totalPrice + "PKR </b>");

document.write("<h4> Table of 4 :- </h4>");
var Table4 = 4;
Table4 = 4 * 1;
document.write("4 * 1 = <b>" + Table4 + "</b>");
Table5 = 4 * 2;
document.write("<br> 4 * 2 = <b>" + Table5 + "</b>");
Table6 = 4 * 3;
document.write("<br> 4 * 3 = <b>" + Table6 + "</b>");
Table7 = 4 * 4;
document.write("<br> 4 * 4 = <b>" + Table7 + "</b>"); 
Table8 = 4 * 5;
document.write("<br> 4 * 5 = <b>" + Table8 + "</b>");
Table9 = 4 * 6;
document.write("<br> 4 * 6 = <b>" + Table9 + "</b>");
Table10 = 4 * 7;
document.write("<br> 4 * 7 = <b>" + Table10 + "</b>");
Table11 = 4 * 8;
document.write("<br> 4 * 8 = <b> " + Table11 + "</b>");
Table12 = 4 * 9;
document.write("<br> 4 * 9 = <b>" + Table12 + "</b>");
Table13 = 4 * 10;
document.write("<br> 4 * 10 = <b>" + Table13 + "</b>");

var c = 25;
var f = (c * 9 / 5) + 32;
document.write("<br><br>" + c + "°C is " + f + "°F");

var f2 = 77;
var c2 = (f2 - 32) * 5 / 9;
document.write("<br>" + f2 + "°F is " + c2 + "°C");

document.write("<h4> Shopping Cart :- </h4>");

var _a = 650;
var _b = 3;
var _c = 100;
var _d = 7;
var _e = 100;

var subTotal = ((650 * 3) + (100 * 7)) + 100;

document.write("Price of item 1 is <b>" + _a + "</b>");
document.write("<br> Quantity of item 1 is <b>" + _b + "</b>");
document.write("<br> Price of item 2 is <b>" + _c + "</b>");
document.write("<br> Quantity of item 2 is <b>" + _d + "</b>");
document.write("<br> Shipping Charges <b>" + _e + "</b>");
document.write("<br><br> Total cost of your order is : <b>" + subTotal + "</b>");

document.write("<h4> Marks Sheet :- </h4>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total marks : <b>" + totalMarks + "</b>");
document.write("<br> Marks obtained : <b>" + marksObtained + "</b>");
document.write("<br> Percentage : <b>" + percentage + "</b>");

var totalPKR = (10 * 104.80) + (25 * 28);
document.write("<h4> Currency in PKR :- </h4>");
document.write("Total currency in PKR : <b>" + totalPKR + "</b>");

var singleExpression = 10;
singleExpression = ((singleExpression + 5) * 10) / 2;
document.write("<br><br> Single expression :  <b>" + singleExpression + "</b>");

// AGE CALCULATOR
var currentYear = 2025;
var birthYear = 2006;
var _$age = currentYear - birthYear;

document.write("<h4> Age Calculator :- </h4>");
document.write("Current Year : " + currentYear);
document.write("<br> Birth Year : " + birthYear);
document.write("<br> Your Age is : " + _$age);

// THE GEOMETRIZER
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h4> The Geometrizer :- </h4>")
document.write(" Radius : <b>" + radius + "</b>");
document.write("<br> The circumference is : <b>" + circumference + "</b>");
document.write("<br> The area is : <b>" + area + "</b>");

document.write("<h4> The Lifetime Supply Calculator :- </h4>");

var snack = "Chocolate Chip";
var currentAge = 19;
var maxAge = 73;
var perDay = 4;

var remainingYears = maxAge - currentAge;
var totalDays = remainingYears * 365;
var totalSnacks = totalDays * perDay;

document.write("Favorite Snack : <b>" + snack + "</b>");
document.write("<br> Current age : <b>" + currentAge + "</b>");
document.write("<br> Estimated maximum age : <b>" + maxAge + "</b>");
document.write("<br> Amount of snacks per day : <b>" + perDay + "</b>");
document.write("<br> You will need <b>" + totalSnacks + "</b> to last you until the rip old age of " + maxAge);

// 
document.write("<h4> Result :- </h4>");
var _$a = 10;

document.write("The value of a is <b> : " + _$a + "</b>");

// ++a (Pre-increment) Pehle value increase, phir print
document.write("<br><br> The value of ++a is : <b>" + ++_$a + "</b>");
document.write("<br> Now the value of a is : <b>" + _$a + "</b>");

// a++ (Post-increment) Pehle print, phir value increase
document.write("<br><br> The value of a++ is : <b>" + _$a++ + "</b>");
document.write("<br> Now the value of a is : <b>" + _$a + "</b>");

// --a (Pre-decrement) Pehle value decrease, phir print
document.write("<br><br> The value of --a is : <b>" + --_$a + "</b>");
document.write("<br> Now the value of a is : <b>" + _$a + "</b>");

// a-- (Post-decrement) Pehle print, phir value decrease
document.write("<br><br> The value of a-- is : <b>" + _$a-- + "</b>");
document.write("<br> Now the value of a is : <b>" + _$a + "</b>");

//
var A = 2;
var B = 1;
var abResults = --A - --B + ++B + B--;

document.write("<br><br> a is : <b>" + A + "</b>");
document.write("<br> b is : <b>" + B + "</b>");
document.write("<br> Result is : <b>" + abResults + "</b>");

var input = prompt("Enter your name");
alert("Hello Welcome " + input + " in our first program");

//
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var perSubject = 100;

var marks1 = Number(prompt("Enter obtained marks for " + sub1));
var marks2 = Number(prompt("Enter obtained marks for " + sub2)); var marks3 = Number(prompt("Enter obtained marks for " + sub3));

var totalObtained = marks1 + marks2 + marks3;
var total_Marks = perSubject * 3;
var percentage_3 = (totalObtained / total_Marks) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellpadding='10'>");

document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");

document.write("<tr><th>Total</th><th>" + total_Marks + "</th><th>" + totalObtained + "</th></tr>");
document.write("</table>");

document.write("<h3>Percentage: " + percentage_3 + "%</h3>"); 














