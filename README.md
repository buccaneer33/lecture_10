# Lecture 10

[![N|Solid](https://www.lukaszbacik.pl/images/upload/css-flexbox-beuv45gte56.jpg)](https://nodesource.com/products/nsolid)[![N|Solid](https://media.kulturbanause.de/2014/06/sass-logo.png)](https://nodesource.com/products/nsolid)[![N|Solid](https://specific-group.com/wp-content/uploads/node-logo.png)](https://nodesource.com/products/nsolid)[![N|Solid](https://lh3.googleusercontent.com/IJT0hs063T4nT3qhAmMtmEHoiIuX8r6whGJjL6Y4kijszWJ0EaM3hl7hCtX9OFl3X6I=w140)](https://nodesource.com/products/nsolid)

# JAVASCRIPT CALCULATOR
This is simple & ingenering calculator. You can use it for calculation a logarithm, exponent, rooting, nth rooting, factorization. This application is a responsive-enabled, mobile-ready, double calculator powered by Javascript.
Application works stable with Google Chrome, Mozilla Firefox, IE>10, EDGE.

## Getting Started
1. Download or clone this repo:
[https://github.com/buccaneer33/lecture_10.git](https://github.com/buccaneer33/lecture_10.git)
1. Start index.html in your browser:
[dist/prod/index.html](dist/prod/index.html)

### Development Installation

Lectiure 10 requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

Lectiure 10 uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Javascript] - evented I/O for the backend
* [SASS] - preprocessor
* [Flexbox] - best solution for block positioning


####JS patterns used
In the calculator architecture we used the following behavioral patterns:
- Simple Factory: src/js/calculator/CalcFactory/caclFactory.js 267-281 lines. We use to create 2 units of calculators.
- Facade: src/js/index.js 5-6 lines. To start the calculator you need only 1 line. All the rest is hidden. 
- Memoisation: src/js/calculator/helpers/utils.js 38-62 lines. We use memoisation to calculate factorial.
- Observer: src/js/calculator/view/chMode.js 17-30 lines. We add event-listener to DOM-node. 

##### ECMAScript 6
ECMAScript 6 was used in this calculator. We used the declaration of variables LET and CONST, and arrow functions.

##### CLASSES
In this application we used classes. In src/js/calculator/calc_factory/calc_class.js.
##### MODULES
In this application, we used a modular architecture.

###### AUTHOR

Evgeniy "Buccaneer" Kozlov
   [node.js]: <http://nodejs.org>
   [Javascript]:<https://www.javascript.com>
   [SASS]:<https://github.com/sass>
   [Flexbox]:<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox>
   

