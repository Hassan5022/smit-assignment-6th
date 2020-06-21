// Chapter 21-25

// Task 1

 /* 
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + " welcome to my website!");
 */

 // Task 2

 /* 
 var phone = prompt("Enter your favorite mobile phone model");
 document.write("My favourite phone is: " + phone);
 document.write("<br>Length is: " + phone.length);
 */

 // Task 3

 /* 
 var str = "Pakistani";
 var index = str.indexOf("n");
 document.write("String: " + str + "<br>");
 document.write("Index of 'n': " + index);
 */

 // Task 4

 /* 
 var str = "Hello World";
 var lastIndex = str.lastIndexOf("l");
 document.write("String: " + str + "<br>");
 document.write("Last index of 'l': " + lastIndex);
 */

 // Task 5

 /* 
 var str = "Pakistani";
 var char = str.charAt(3);
 document.write("String: " + str + "<br>");
 document.write("Character at index 3: " + char);
 */

 // Task 6

 /*  
 var firstName = prompt("Enter your first name:");
 var lastName = prompt("Enter your last name:");
 var fullName = firstName.concat(" ", lastName);
 alert("Hello, " + fullName + " welcome to my website!");
 */

 // Task 7

 /* 
 var city = "Hyderabad";
 var replace = city.replace("Hyder", "Islam");
 document.write("City: " + city + "<br>");
 document.write("After replacement: " + replace);
 */

 // Task 8

 /*   
 var message = "Ali and Sami are best friends. They play cricket and football together.";
 var replace = message.replace(/and/g, "&");
 document.write(replace);
 */

 // Task 9

 /* 
 var str = "472";
 var int = parseInt(str);
 document.write("Value: " + str + "<br>");
 document.write("Type: " + typeof(str) + "<br>");
 document.write("Value: " + int + "<br>");
 document.write("Type: " + typeof(int));
 */ 

 // Task 10
 
 /* 
 var input = prompt("Enter any string:");
 var cap = input.toUpperCase();
 document.write("User input: " + input + "<br>");
 document.write("Upper case: " + cap);
 */ 

 // Task 11

 /* 
 var input = prompt("Enter any string:");
 var tit = input.slice(0, 1).toUpperCase() + input.slice(1);
 document.write("User input: " + input + "<br>");
 document.write("Title case: " + tit);
 */ 

 // Task 12

 /* 
 var num = 35.36 ;
 var str = num.toString();
 var repStr = str.replace(".", "");
 document.write("Number: " + str + "<br>");
 document.write("Result: " + repStr);
 */ 

 // Task 13

 /*  
 var userName = prompt("Enter your username:");
 for (var i = 0; i < userName.length; i++){ 
    if (userName.charAt(i) === "!" || userName.charAt(i) === "@" || userName.charAt(i) === "." || userName.charAt(i) === ",") {
     alert("Please enter a valid username!");
     break;
    }
 }
 */

 // Task 14

 /* 
 var A = ["cake", "apple pie", "cookie", "chips", "patties"];
 var search = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am:");
 var flag = 0, found, ind;
 var item = search.toLowerCase();
 for (let index = 0; index < A.length; index++) {
     if (item === A[index]) {
        found = A[index];
        ind = index;
        flag = 1; 
        break;
     }
 }
 if (flag === 1) {
    document.write(search + " is available at index " + ind + " in our bakery");
 }else{
     document.write("We are sorry. " + search + " is not available in our bakery")
 }
 */ 

 // Task 15

 /* 
 var password = prompt("Please enter your password:");
 var flag = 0, num = 0, l = 0, firstChar = password.charAt(0);
 if (password.length >= 6) {
   for (let i = 0; i < password.length; i++) {
      if (password.charAt(i) >= "0" && password.charAt(i) <= "9" || password.charAt(i) >= "a" && password.charAt(i) <= "z" || password.charAt(i) >= "A" && password.charAt(i) <= "Z") {
         if (firstChar >= "0" && firstChar <= "9") {
            document.write("Password cannot begin with a number<br>Please enter a valid password");
            flag = 1;
            break;
         }
      }else{
         num = 1;
         break;
      }
   }  
 }else{
    document.write("Password should be 6 or more digits long");
    l = 1;
 }
 if (num == 1) {
    document.write("Password should be contain numbers and alphabets<br>");
    document.write("Please enter a valid password");
 }
 if (flag == 0 && num == 0 && l == 0) {
    document.write("Entered password is: " + password + "<br>");
    document.write("Password is correct");
 }
 */ 

 // Task 16

 /* 
 var university = "University of Karachi";
 var str = university.split("");
 for (let index = 0; index < str.length; index++) {
    document.write(str[index] + "<br>");    
 }
 */ 

 // Task 17

 /* 
 var userInput = prompt("Enter a string:");
 var lastChar = userInput.charAt(userInput.length - 1);
 document.write("User input: " + userInput + "<br>");
 document.write("Last character of input: " + lastChar);
 */ 

 // Task 18

 /* 
 var str = "The quick brown fox jumps over the lazy dog";
 var custum = str.toLowerCase();
 custum = custum.split(" ");
 var count = 0;
 for (var i = 0; i < str.length; i++) {
   if (custum[i] === "the") {
       count++;
   }
 }
 document.write("Text: " + str + "<br>");
 document.write("There are " + count + " occurence(s) of word 'the'");
 */ 

 // Chapter 26-30

 // Task 1

 /*   
 var positiveNum = +prompt("Enter a positive integer number:");
 if (positiveNum >= 0){
   document.write("Number: " + positiveNum + "<br>");
   document.write("Round off value: " + Math.round(positiveNum) + "<br>");
   document.write("Floor value: " + Math.floor(positiveNum) + "<br>");
   document.write("Ceil value: " + Math.ceil(positiveNum));   
 }else{
    document.write("Please enter a positive integer number!");
 }
 */ 

 // Task 2

 /* 
 var negativeNum = +prompt("Enter a positive integer number:");
 if (negativeNum < 0){
   document.write("Number: " + negativeNum + "<br>");
   document.write("Round off value: " + Math.round(negativeNum) + "<br>");
   document.write("Floor value: " + Math.floor(negativeNum) + "<br>");
   document.write("Ceil value: " + Math.ceil(negativeNum));   
 }else{
    document.write("Please enter a negative integer number!");
 }
 */

 // Task 3

 /* 
 var num = +prompt("Enter a number:");
 var abs = Math.abs(num);
 document.write("The absolute value of " + num + " is " + abs);
 */

 // Task 4

 /* 
 var rand = Math.random() * 6;
 rand = Math.ceil(rand);
 document.write("Random dice value: " + rand);
 */

 // Task 5

 /* 
 var rand = Math.random() * 2;
 rand = Math.ceil(rand);
 if (rand === 1) {
   document.write(rand + "<br>");
   document.write("Random coin value: Heads");  
 }else if (rand === 2) {
   document.write(rand + "<br>");
   document.write("Random coin value: Tails");
 }
 */

 // Task 6

 /* 
 var rand = Math.random() * 100;
 rand = Math.ceil(rand);
 document.write("Random number between 1 and 100: " + rand);
 */

 // Task 7

 /* 
 var weight = prompt("Enter your weight in kilograms:");
 weight = parseFloat(weight);
 document.write("The weight of user is: " + weight + " kilograms");
 */ 

 // Task 8

 /* 
 var userInput = +prompt("Enter a number between 1 to 10:");
 var secretNumber = Math.random() * 10;
 secretNumber = Math.ceil(secretNumber);
 if (userInput === secretNumber) {
    alert("Congratz, Your answer is correct.");
 }else{
    alert("Try again!");
 }
 */ 

 // Chapter 31-34

 // Task 1

 /*  
 var time = new Date();
 document.write(time);
 */ 

 // Task 2

 /* 
 const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
 ];
 var month = new Date();
 alert("Current month: " + monthNames[month.getMonth()]);
 */

 // Task 3

 /*  
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 alert("Today is " + nameOfToday);
 */ 

 // Task 4

 /* 
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 if (nameOfToday === "Sat" || nameOfToday === "Sun") {
    document.write("It's Fun day");
 }
 */

 // Task 5

 /* 
 var now = new Date();
 var theDate = now.getDate();
 if (theDate < 16) {
    document.write("First fifteen days of the month");
 }else{
    document.write("Last days of the month");
 }
 */

 // Task 6

 /* 
 var now = new Date();
 document.write("Current Date: " + now + "<br>");
 document.write("Elapsed milliseconds since January 1, 1970: " + now.getTime() + "<br>");
 document.write("Elapsed minutes since January 1, 1970: " + now.getTime() / (1000 * 60 * 60));
 */

 // Task 7

 /* 
 var now = new Date();
 var hour = now.getHours();
 if (hour >= 0 && hour <= 11) {
    alert("It's AM");
 }else if(hour >= 12 && hour <= 23){
   alert("It's PM");
 }
 */

 // Task 8

 /* 
 var laterDate = new Date("Dec 31, 2020");
 document.write("Later date: " + laterDate);
 */ 

 // Task 9

 /* 
 var ramzan = new Date("Jun 12, 2015");
 var currentDate = new Date();
 var pastDays = currentDate.getTime() - ramzan.getTime();
 pastDays /= 1000 * 60 * 60 * 24;
 pastDays = Math.floor(pastDays);
 document.write(pastDays + " have passed since 1st Ramzan, 2015");
 */

 // Task 10

 /*   
 var ramzan = new Date("2020");
 var currentDate = new Date();
 var pastSec = currentDate.getTime() - ramzan.getTime();
 pastSec /= 1000;
 pastSec = Math.floor(pastSec);
 document.write("On reference date " + currentDate + ",<br>");
 document.write(pastSec + " seconds had passed since beginning of 2020");
 */

 // Task 11

 /* 
 var currentDate = new Date();
 var ahead = new Date();
 ahead.setHours(currentDate.getHours() + 1);
 document.write("Current date: " + currentDate + "<br>");
 document.write("1 hour ago, " + ahead);
 */

 // Task 12

 /* 
 var currentDate = new Date();
 var reset = new Date();
 reset.setFullYear(currentDate.getFullYear() - 100);
 document.write("Current date: " + currentDate + "<br>");
 document.write("100 years back, it was " + reset);
 */ 

 // Task 13

 /* 
 var age = prompt("Enter your age:");
 var currentDate = new Date();
 var birth = new Date(age);
 var birthYear = currentDate.getFullYear() - birth.getFullYear();
 document.write("Your age is " + birthYear + "<br>");
 document.write("Your birth year is " + birth.getFullYear());
 */

 // Task 14

 /* 
 var cusName = prompt("Enter your name:");
 var currentMonth = new Date();
 const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"
 ];
 var units = 410, chargesPerUnit = 16;
 var latePayment = 350;
 var netAmount = units * chargesPerUnit;
 var grossAmount = netAmount + latePayment;
 document.write("<h1>K-Electric Bill</h1>");
 document.write("Customer Name: " + cusName + "<br>");
 document.write("Month: " + monthNames[currentMonth.getMonth()] + "<br>");
 document.write("Number of units: " + units + "<br>");
 document.write("Charges per unit: " + chargesPerUnit + "<br><br>");
 document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
 document.write("Late payment surcharge: " + latePayment + "<br>");
 document.write("Gross amount Payable (after Due Date): " + grossAmount);
 */

 // Chapter 35-38

 // Task 1

 /* 
 function dateDisplay() {
    var time = new Date();
    document.write(time);   
 }
 dateDisplay();
 */

 // Task 2

 /* 
 function greet (fName, lName) {
    var fullName = fName + " " + lName;
    document.write("Hello, " + fullName + " welcome to my website.");
 }
 greet("Hassan", "Ahmed");
 */

 // Task 3

 /* 
 var num1 = +prompt("Enter 1st number:");
 var num2 = +prompt("Enter 2nd number:");
 function sum(num1, num2) {
    var add = num1 + num2;
    return add;
 }
 document.write(sum(num1, num2));
 */ 

 // Task 4

 /* 
 var num1 = +prompt("Enter first number:");
 var num2 = +prompt("Enter second number:");
 var oper = prompt("Enter operator:");
 var result = 0;
 function calculator(num1, num2, oper) {
    if (oper === '+') {
       result = num1 + num2;
       return result;
    }else if (oper === '-') {
      result = num1 - num2;
      return result;
    }else if (oper === '*') {
      result = num1 * num2;
      return result;
    }else if (oper === '/') {
      result = num1 / num2;
      return result;
    }else if (oper === '%') {
      result = num1 % num2;
      return result;
    }else{
       result = 1;
       return result;
    }
 }
 var calcResult = calculator(num1, num2, oper);
 if (calcResult != 1) {
    document.write("Result = " + calcResult);  
 }else{
    document.write("Invalid entry!");
 }
 */

 // Task 5

 /* 
 var num = +prompt("Enter a number:");
 function sqrs(num) {
    return Math.pow(num, 2);
 }
 document.write("Square of " + num + " is " + sqrs(num));
 */

 // Task 6

 /* 
 var num = +prompt("Enter a number:");
 function fac(num) {
    if (num == 0) {
       return 1;
    }else if (num < 0) {
       return 0;
    }else{
       return num * fac(num - 1); 
    }
 }
 if (fac(num) != 0) {
   document.write("factorial of " + num + " is " + fac(num));
 }else{
    document.write("Please enter positive number!");
 }
 */

 // Task 7

 /* 
 var start = +prompt("Enter first number:");
 var last = +prompt("Enter last number:");
 function counting(first, last) {
    for (let index = first; index <= last; index++) {
       document.write(index + ", ");
    }
 }
 counting(start, last);
 */

 // Task 8

 /* 
 var base = +prompt("Enter base of a righ angle triangle:");
 var perpendicular = +prompt("Enter perpendicular of a righ angle triangle:");
 function calculateHypotenuse(base, per) {
    function calculateSquare(num) {
       return Math.pow(num, 2);
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(per);
    hypotenuse = Math.sqrt(hypotenuse);
    return hypotenuse.toFixed(2);  
 }
 document.write("Hypotenuse of a triangle: " + calculateHypotenuse(base, perpendicular));
 */

 // Task 9

 // a)
 /*
 function area(width, height) {
    return width * height;
 }
 var areaRect = area(2, 3);
 document.write("Area of a rectangle: " + areaRect);
 */
 // b)

 /*  
 function area(width, height) {
   return width * height;
 }
 var width = 2, height = 3;
 var areaRect = area(width, height);
 document.write("Area of a rectangle: " + areaRect);
 */

 // Task 10 

 /* 
 function palindrome(str) {
   var re = /[\W_]/g;
   var lowRegStr = str.toLowerCase().replace(re, '');
   var reverseStr = lowRegStr.split('').reverse().join(''); 
   return reverseStr === lowRegStr;
 }
 var str = "madam MadAm";
 if (palindrome(str)) {
    document.write("String is palindrome");
 }else{
    document.write("String is not palindrome");
 }
 */

 // Task 11

//  function capitalize_Words(str){
//     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});
//  }
//  var str = "the quick brown fox";
//  document.write("Example string: " + str + "<br>");
//  document.write("Capitalized: " + capitalize_Words(str)); 

 // Task 12

 /*  
 var str = "Web Development Tutorial";
 function long(str) {
   str = str.split(" ");
   var long = str[0].length;
   var longWord = "";
   for (let i = 0; i < str.length; i++) {
      if (long < str[i].length) {
         long = str[i].length;
         longWord = str[i];
      }
   }
   return longWord;  
 }
 document.write(long(str));
 */ 

 // Task 13

 /* 
 var str = "The quick brown fox jumps over the lazy dog";
 function occurence(str, check) {
   var custum = str.toLowerCase();
   var count = 0;
   for (var i = 0; i < str.length; i++) {
     if (custum[i] === check) {
         count++;
     }
   }
   document.write("Sample argument: " + str + "<br>");
   document.write("There are " + count + " occurence(s) of letter " + check);
 }
 occurence("JSResourceS.com", "s");
 */ 

 // Task 14 Geomatrizer

 /*  
 function calcCircumference(radius) {
    var circumference = 2 * Math.PI * Math.pow(radius, 2);
    return circumference.toFixed(2);
 }
 function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
 }
 var radius = 2;
 document.write("Circumference of a circle: " + calcCircumference(radius) + "<br>");
 document.write("Area of a circle: " + calcArea(radius));
  
 */