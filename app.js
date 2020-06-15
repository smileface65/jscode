

                    // ALERT

// 1. Write a script to greet your website visitor using JS alert
// box.
// 2. Write a script to display following message on your web
// page
alert("Error! Please enter a valid password");


// 3. Write a script to display following message on your web
// page: (Hint : Use line break)
alert("Welcom to JS Land...\nHappy Coding!");


// 4. Write a script to display following messages in sequence:

alert("Welcom to JS Land...");

// alert("Happy Coding!\n");  un cmplete


// 5. Generate the following message through browser’s
// developer console:

console.log("Hello... I can run JS through my web browser's console")


                        //    VARIABLES FOR STRINGS
                        //       Assignment # 2 
// 1. Declare a variable called username.
// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name

var username = "Saadullah" ;
var myName   =  "Aslam"    ;
var fulName  =  username+myName ;
alert(fulName);


// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message = "Hello World" ;
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var a = "Jhone Doe" ;
var b = "15 Years Old" ;
var c = "Certified Mobile Application Development" ;

alert (a);
alert (b);
alert (c);

// 5. Write a script to display the following alert using one JS
// variable

var a = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert (a);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "example@example.com" ;
var mail = "My email address is " ;
var output = mail + email ;
alert(output);


// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter\nway to learn JavaScript" ;
var way = "I am trying to learn from the Book ";
var display = way + book ;
alert(display);


// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through Javascript");

// 9. Store following string in a variable and show in alert and
// browser through JS

var a = "▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"

alert(a);



                        // VARIABLES FOR NUMBERS
                            // ASSINGMENT # 3


// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 23 ;

alert("I am"+" "+age+" "+"years old");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visit = 15 ;

alert("You have visited this site"+" "+visit+" "+"times") ;

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 1996 ;

document.write("My birth year is"+" "+birthYear+"<br>"+"Data type of my declared variable is number <br>");


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var a = "Jhon Doe" ;
var b = "T-Shirt(s)" ;
var c = 5 ;

document.write(a+" "+"ordered"+" "+c+" "+b+" "+"on XYZ Clothing store");

                       // VARIABLE NAMES: LEGAL & ILLEGAL
                            // ASSINGMENT # 4



// 1. Declare 3 variables in one statement.
// 2. Declare 5 legal & 5 illegal variable names.
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

var $my_1stVariable =  2 ;
var $name,_name =  4 ;
var name =  6 ;

document.write("<h1>Rules for naming JS variables</h1><br><br><br>Variable names can only contain numbers $, and _ . For example $my_1stVariable<br>Variables must begin with a $ or _. For example $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS keywords");

                            // MATH EXPRESSIONS 
                            //  ASSINGMENT # 5



// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.


var a = 3 ;
var b = 5 ;
document.write("Sum of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a+b)+"<br>");


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

document.write("Subtract of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a-b)+"<br>");


document.write("Multiplication of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a*b)+"<br>");

var a = 10 ;
var b = 5  ;


document.write("Division of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a/b)+"<br>");


document.write("Modulus of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a%b)+"<br>");


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value


var a = "?" ;

document.write("Value after variable declaration is:"+" "+a+" .<br>");

var a = 5 ;
var b = 7 ;
var c = 6 ;

document.write("Initial value :"+" "+a+"<br>");

document.write("Value after increment is: "+(++a)+"<br>") ;

var a = (b+c) ; 

document.write("Value after addition is: "+(b+c)+"<br>") ;

var a = --a ;

document.write("Value after decreament is: "+a+"<br>") ;

document.write("The reminder is: "+(a%3)+"<br><br>") ;


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var a = 600 ;

document.write("Total cost of buy 5 tickets to a movie is "+(a*5)+"PKR<br><br><br>") ;


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var a = 4 ;

document.write("<h1>Table of 4</h1><br>4 x 1 = "+(a*1)+"<br>"+"4 x 2 = "+(a*2)+"<br>"+"4 x 3 = "+(a*3)+"<br>"+"4 x 4 = "+(a*4)+"<br>"+"4 x 5 = "+(a*5)+"<br>"+"4 x 6 = "+(a*6)+"<br>"+"4 x 7 = "+(a*7)+"<br>"+"4 x 8 = "+(a*8)+"<br>"+"4 x 9 = "+(a*9)+"<br>"+"4 x 10 = "+(a*10)+"<br>");



// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var c= 25 ;
var f = 70 ;

document.write("25°C is "+(f-32)*5/9+"°C <br>"+"70°F is "+(c*9/5+32)+"<br><br><br>");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var item1 = 650 ;
var item2 = 100 ;
var charges = 100 ;

document.write("<h1>Shopping Cart</h1><br><br>Price of item 1 is "+item1+"<br><br>Quantity of item 1 is 3<br><br>Price of item 2 is "+item2+"<br><br>Quantity of item 2 is 7<br><br>Shipping Charges "+charges+"<br><br><br>Total cost of your order is "+(item1*3+item2*7+charges)+"<br><br><br><br>");


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


var totalMarks = 980 ;
var obtainedMArks = 804 ;

document.write("<h1>Marks Sheet</h1><br><br>Total Marks: "+totalMarks+"<br><br>Obtained Marks: "+obtainedMArks+"<br><br>Percentage: "+(obtainedMArks/totalMarks*100)+"%") ;


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollar = 104.80 ;
var saudiRiyals = 28;

document.write("<h1>Currency in PKR</h1><br><br><br>Total Currency in PKR:"+(usDollar*10+saudiRiyals*25)) ;


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var a = 10 ;

document.write("Result: "+(a+5*10)/2) ;


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var year = 2020 ;
var birthYear = 1996 ;
var age = year - birthYear ;

document.write("They are either 23 or "+age+"years old");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var r = 20 ;

document.write("<h1>The Geometrizer</h1><br><br><br>Radius of a circle is: "+r+"<br>"+"The Circumference is: "+(2*20*3.142)+"<br>The area is: "+(20*20*3.142));


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var snack = "Chocolate Chip" ;
var age = 15 ;
var maxAge = 65
var ammount = 3

document.write("<h1>The Life Time Supply Calculator</h1><br><br><br>Favourite Snacks: "+snack+"<br>"+"Current age: "+age+"<br>"+"Estimate maximum age: "+maxAge+"<br>Ammount of snacks per day: "+ammount+"<br>You need "+((maxAge-age)*ammount)+" chocolate chip to last you until the rip old age to 65");



                            // MATH EXPRESSIONS 
                            //  ASSINGMENT # 6


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10 ;

document.write("Result:<br>The value of a is: "+a+"<br><br>-----------------------------------<br><br>The value of ++a is: "+(++a)+"<br>"+"Now the value of a is: "+a+"<br><br><br>"+"The value of ++a is: "+(a++)+"<br>"+"Now the value of a is: "+a+"<br><br><br>"+"The value of --a is: "+(--a)+"<br>"+"Now the value of a is: "+a+"<br><br><br>"+"The value of a-- is: "+(a--)+"<br>"+"Now the value of a is: "+(a--));


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2 ;
var b = 1 ;
var result = --a - --b + ++b + b-- ;

document.write("a is: "+a+"<br>"+"b is: "+b+"<br>"+"result is: "+result) ;


// 3. Write a program that takes input a name from user &
// greet the user.

var a = prompt("Enter Your Name");
alert("Hello "+a);

// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var table = +prompt("Enter Your Value");
var a = 5
if (table => NaN ){
    document.write("<h1>Table of "+table+"</h1><br>"+table+" x 1 = "+(table*1)+"<br>"+table+ "x 2 = "+(table*2)+"<br>"+table+ "x 3 = "+(table*3)+"<br>"+table+" x 4 = "+(table*4)+"<br>"+table+" x 5 = "+(table*5)+"<br>"+table+" x 6 = "+(table*6)+"<br>"+table+" x 7 = "+(table*7)+"<br>"+table+" x 8 = "+(table*8)+"<br>"+table+" x 9 = "+(table*9)+"<br>"+table+" x 10 = "+(table*10)+"<br>");
    
} else {
    document.write("<h1>Table of 5</h1><br>5 x 1 = "+(a*1)+"<br>"+"5 x 2 = "+(a*2)+"<br>"+"4 x 3 = "+(a*3)+"<br>"+"5 x 4 = "+(a*4)+"<br>"+"5 x 5 = "+(a*5)+"<br>"+"5 x 6 = "+(a*6)+"<br>"+"5 x 7 = "+(a*7)+"<br>"+"5 x 8 = "+(a*8)+"<br>"+"5 x 9 = "+(a*9)+"<br>"+"5 x 10 = "+(a*10)+"<br>");
    
}


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var subject1 = prompt("First Subject");
var marksSubject1 = +prompt("Marks Obtained In First Subject","0");

var subject2 = prompt("Second Subject");
var marksSubject2 = +prompt("Marks Obtained In Second Subject","0");

var subject3 = prompt("Third Subject");
var marksSubject3 = +prompt("Marks Obtained In Third Subject","0");

var totalMarks = 100
var subjectsMarks = 300

document.write("<table><th><td>Subject</td><td>Total Marks</td><td>Obtaine Marks</td><td>Percentage</td></th><tr><td colspan=2>"+subject1+"</td><td>100</td><td>"+marksSubject1+"</td><td>"+(marksSubject1/totalMarks*100)+"%"+"</td></tr><tr><td colspan=2>"+subject2+"</td><td>100</td><td>"+marksSubject2+"</td><td>"+(marksSubject2/totalMarks*100)+"%"+"</td></tr><tr><td colspan=2>"+subject3+"</td><td>100</td><td>"+marksSubject3+"</td><td>"+(marksSubject3/totalMarks*100)+"%"+"</td></tr><th><td></td><td>300</td><td>"+(marksSubject1+marksSubject2+marksSubject3)+"</td><td>"+((marksSubject1+marksSubject2+marksSubject3)/subjectsMarks*100)+"%"+"</td></th></table>");



                         // USER INPUT & CONDITIONAL STATEMENT 
                        //         ASSINGMENT # 9 to 10


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter City Name","City");
if (city == "Karachi") {
    alert("Welcome to city of lights")
} else {
    alert("Welcome to "+city)
}


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


var gender = prompt("Enter Your Gender")

if (gender == "Male" || gender == "male") {
    alert("Good Morning Sir")
} else {
    alert("Good Morning Ma'am")
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var trafficSignal = prompt("Enter Traffic Signal Color")

if (trafficSignal == "Red") {
    alert("Must Stop")
}
else if(trafficSignal == "Yellow") {
    alert("Ready To Move")
} 
else if(trafficSignal == "Green") {
    alert("Move Now")
}
else{
    alert("Enter A Valid Color")
}


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuel = +prompt("Enter Remaining Fuel In Your Car")

if (fuel <= 0.25 ) {
    alert("Your Car Fuel Is Almost Over")
} else {
    alert("Ready To Drive")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var english = +prompt("Total Numbers Of Subject","100")
var marksEnglish = +prompt("Marks Obtaine In English","0")

var urdu = +prompt("Total Numbers Of Subject","100")
var marksUrdu = +prompt("Marks Obtaine In Urdu","0")

var math = +prompt("Total Numbers Of Subject","100")
var marksMath = +prompt("Marks Obtaine In Math","0")

document.write("<h1>Marks Sheet</h1><br><br><br>Total Marks : "+(english+urdu+math)+"<br>Marks Obtained : "+(marksEnglish+marksUrdu+marksMath)+"<br>Percentage : "+((marksEnglish+marksUrdu+marksMath)/(english+urdu+math)*100)+"%<br>Grade : B <br>Remarks : You need to improve");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var a = 7
var b = +prompt("Enter number")

if (a == b) {
    alert("Bingo! Correct answer")
} else if (a-1 == b || a+1 == b) {
    alert("Close enough to the correct answer")  
} else {
    alert("Number is not match")
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


var a = +prompt("Enter number")

if (a%3 == 0) {
    alert("The number is divisable by 3")
} else {
    alert("Not divided by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var even = +prompt("Enter Number")

if (even%2 == 0) {
    alert("You enter a even number")
} else {
    alert("You enter a odd number")
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var t = +prompt("Enter Temprature")

if (t > 40) {
    alert("It is too hot outside")
}else if (t > 30) {
    alert("The Weather today is Normal")
}else if (t > 20) {
    alert("Today’s Weather is cool")
}else if (t > 10) {
    alert("OMG! Today’s weather is so Cool")
}


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var value1 = +prompt("Enter first number")
var operation = prompt("Enter operation Sign","+")
var value2 = +prompt("Enter second number")

if (operation == "-") {
    alert(value1 - value2)
} else if (operation == "+") {
    alert(value1 + value2)
} else if (operation == "*") {
    alert(value1 * value2)
} else if (operation == "/") {
    alert(value1 / value2)
} else {
    alert("Enter valid number")
}


             // F…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 
                 //         ASSINGMENT # 12 to 13
                
//  1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = prompt("Enter number")
// if (num == "-"+num) {
//     alert("The number is negative")
// } else if (num == num ) {
//     alert("The number is positive")
// } else if (num == 0) {
//     alert("The value number is zero")
// }else {
//     alert("Please enter a valid number")
// }


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var a = prompt("Enter A Vowel Letter")
// if (a == "a" || a == "A" || a == "e" || a == "E" || a == "o" || a == "O" || a == "u" || a == "U") {
//     alert("Correct ! It Is A Vowel")
// } else {
//     alert("The Letter You Enter Is Not A Vowel")
// }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var correctPassword = "js5050"
// var password = prompt("Enter Your Password")
// if (password == "") {
//     alert("Please enter your password")
// } else if (password = correctPassword) {
//     alert("Correct! The password you entered matches the original password")
// }
// else {
//     alert("Please enter correct password")
// }


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


var greeting = prompt("Enter number")
var hour = 13;
if (hour < greeting) {
 alert("Good day")
} 
else{ 
 alert("Good evening");
}             // F…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 
                 //         ASSINGMENT # 12 to 13
                
//  1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = prompt("Enter number")
// if (num == "-"+num) {
//     alert("The number is negative")
// } else if (num == num ) {
//     alert("The number is positive")
// } else if (num == 0) {
//     alert("The value number is zero")
// }else {
//     alert("Please enter a valid number")
// }


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var a = prompt("Enter A Vowel Letter")
// if (a == "a" || a == "A" || a == "e" || a == "E" || a == "o" || a == "O" || a == "u" || a == "U") {
//     alert("Correct ! It Is A Vowel")
// } else {
//     alert("The Letter You Enter Is Not A Vowel")
// }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var correctPassword = "js5050"
// var password = prompt("Enter Your Password")
// if (password == "") {
//     alert("Please enter your password")
// } else if (password = correctPassword) {
//     alert("Correct! The password you entered matches the original password")
// }
// else {
//     alert("Please enter correct password")
// }


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


var greeting = prompt("Enter number")
var hour = 13;
if (hour < greeting) {
 alert("Good day")
} 
else{ 
 alert("Good evening");
}