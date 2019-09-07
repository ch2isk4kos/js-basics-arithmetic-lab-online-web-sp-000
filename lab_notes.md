**Arithmetic Lab Notes**

There are limitations to math in JavaScript.
To perform arithmetic in JS, you must use operators.
Use Math and Number to accomplish complex tasks.


# the Limitations of Math in JavaScript

JavaScript has only a single, all-encompassing number type.
other languages might have distinct types for integers, decimals.

JavaScript represents everything as a double-precision floating-point number, or float.

this imposes some interesting technical limitations on the precision of
the arithmetic performed with JavaScript.

```JavaScript

    0.1 * 0.1;
    //=> 0.010000000000000002

    0.1 + 0.1 + 0.1;
    //=> 0.30000000000000004

    1 - 0.9;
    //=> 0.09999999999999998
```

*UNDER THE HOOD*
JavaScript stores numbers in binary (base-2) format, as a series of 1s and 0s,
but it displays numbers in a more human-readable decimal (base-10) format.

the problem that the above code snippet highlights is that it's really easy to represent something like 1/10 in decimal (0.1) but impossible to do it in binary (0.0001100110011...).

it's the exact same problem that the decimal system has in trying to represent 1/3 as 0.33333333333....

the only time you'd really have to worry about this is if you needed to calculate something to a high degree of precision, like interest payments for a bank.

for most of our day-to-day arithmetic needs, JavaScript is more than capable.


# Employ Operators to Perform Arithmetic and Assign Values to Variables

*Arithmetic Operators*

```JavaScript

    40 + 2;         //=> 42

    9001 - 9000;    //=> 1

    6 * 7;          //=> 42

    9001 / 42;      //=> 214.3095238095238

    9001 % 42;      //=> 13

    2 ** 8;         //=> 256
```

*Order of Operations*
JavaScript evaluates compound arithmetic operations by PEMDAS

1. Parentheses
2. Exponents
3. Multiplication
4. Division
5. Addition
6. Subtraction

( )     ->     **       ->        * / %       ->      + -

```JavaScript

    2 - (2 % 2) + (2 / 2 ** 2) * 2;     //=> 3

    2 - ((2 % (2 + 2)) / 2 ** 2) * 2;   //=> 1
```

*Incrementing*
The ++ operator increments the stored number by 1.

if the ++ operator comes @after the variable (e.g., counter++),
the variable's value is returned first and then incremented:

```JavaScript

    let counter = 0;                    //=> undefined

    counter++;                          //=> 0

    counter;                            //=> 1
```

if the ++ operator comes @before the variable (e.g., ++counter),
the variable's value is incremented first and then returned:

```JavaScript

    let counter = 0;                    //=> undefined

    ++counter;                          //=> 1

    counter;                            //=> 1
```

NOTE:
in @both_cases, 'counter' contains the value 1 after incrementing;
the difference is in whether you want the operation to return
the original or incremented value.

*Decrementing*
The -- operator decrements the stored number by 1
and has the same pair of prefix and postfix options as the ++ operator:

```JavaScript

    let counter = 0;                    //=> undefined

    // Return the current value of 'counter' and then decrement by 1

    counter--;                          //=> 0

    // Check the new value of 'counter'

    counter;                            //=> -1

    // Decrement 'counter' and then return the new value

    --counter;                          //=> -2

    // Check the new value of 'counter'

    counter;                            //=> -2
```

*Assignment Operators*
JavaScript has a number of operators for assigning a value to a variable.

```JavaScript

    let counter = 0;                    //=> undefined

    counter += 10;                      //=> 10

    counter -= 2;                       //=> 8

    counter *= 4;                       //=> 32

    counter /= 2;                       //=> 16

    counter %= 6;                       //=> 4

    counter **= 3;                      //=> 64
```

*NaN - Not a Number*
JavaScript tries to return a value for every operation,
but sometimes you'll ask it to calculate the incalculable.

imagine a line of code in your program increments the value of a counter by 1.
but something broke in a different part of the program,
and counter is currently undefined.

when the JavaScript engine reaches the incrementing line, what happens?

```JavaScript

    counter++;                          //=> NaN
```

the JavaScript engine can't add 1 to undefined,
so it returns NaN — Not a Number.

NOTE:
much like undefined, you should never assign NaN as the value of a variable.
instead, let it be a signal that some weird maths are happening in your code.


# Use built-in objects like Math and Number to accomplish complex tasks
JavaScript provides several built-in objects that you can reference
anywhere in JavaScript code, including Number and Math.


# Number
an object that comes with a collection of handy methods
that you can use for checking and converting numbers in JavaScript.

*Number.isInteger()*
Checks whether the provided argument is an integer:

```JavaScript

    Number.isInteger(42);               //=> true

    Number.isInteger(0.42);             //=> false
```

*Number.isFinite()*
Checks whether the provided argument is finite:

```JavaScript

    Number.isFinite(9001);              //=> true

    Number.isFinite(Infinity);          //=> false
```

*Number.isNaN()*
Checks whether the provided argument is NaN:

```JavaScript

    Number.isNaN(10);                   //=> false

    Number.isNaN(undefined);            //=> false

    Number.isNaN(NaN);                  //=> true
```

*Number.parseInt()*
Accepts a string as its first argument and parses it as an integer.
the second argument is the base that should be used in parsing
(e.g., 2 for binary or 10 for decimal).

for example: 100 is 100 in decimal but 4 in binary:

```JavaScript

    Number.parseInt('100', 10);         //=> 100

    Number.parseInt('100', 2);          //=> 4

    // NOTE:
    // the second argument is optional...
    // but you should always provide it to avoid confusion.
```

*Number.parseFloat()*
Number.parseFloat() only accepts a single argument,
the string that should be parsed into a floating-point number:

```JavaScript

    Number.parseFloat('3.14159');
    //=> 3.14159
```


# Math
an object that contains some properties representing common mathematical values,
such as Math.PI and Math.E, as well as a number of methods for performing useful calculations.

*Math.ceil() / Math.floor() / Math.round()*
JavaScript provides three methods for rounding numbers.

Math.ceil()  rounds the number up,
Math.floor() rounds the number down,
Math.round() rounds the number either up or down, whichever is nearest:

```JavaScript

    Math.ceil(0.5);                         //=> 1

    Math.floor(0.5);                        //=> 0

    Math.round(0.5);                        //=> 1

    Math.round(0.49);                       //=> 0
```

*Math.max() / Math.min()*
These two methods accept a number of arguments and return the lowest and highest constituent, respectively:

```JavaScript

    Math.max(1, 2, 3, 4, 5);                //=> 5

    Math.min(1, 2, 3, 4, 5);                //=> 1
```

*Math.random()*
This method generates a random number between 0 (inclusive) and 1 (exclusive):

```JavaScript

    Math.random();                          //=> 0.4495507082209371

    // In combination with some simple arithmetic and one of the rounding methods,
    // you can generate random integers within a specific range:

    Math.floor(Math.random() * 10) + 1;     //=> 8

    Math.floor(Math.random() * 10) + 1;     //=> 1

    Math.floor(Math.random() * 10) + 1;     //=> 6

    // NOTE:
    // Math.random() returns a number between 0 and 0.999...,
    // which gets multiply by 10 to give a number between 0 and 9.999....
    // then passes that number to Math.floor(),
    // which returns an integer between 0 and 9.
    // since that's one less than the desired range (1 to 10),
    // you add one at the end of the equation.
```
