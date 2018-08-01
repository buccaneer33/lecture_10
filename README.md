# Lecture 10

[![N|Solid](https://www.lukaszbacik.pl/images/upload/css-flexbox-beuv45gte56.jpg)](https://nodesource.com/products/nsolid)[![N|Solid](https://media.kulturbanause.de/2014/06/sass-logo.png)](https://nodesource.com/products/nsolid)[![N|Solid](https://specific-group.com/wp-content/uploads/node-logo.png)](https://nodesource.com/products/nsolid)[![N|Solid](https://lh3.googleusercontent.com/IJT0hs063T4nT3qhAmMtmEHoiIuX8r6whGJjL6Y4kijszWJ0EaM3hl7hCtX9OFl3X6I=w140)](https://nodesource.com/products/nsolid)

# JAVASCRIPT CALCULATOR
This is simple & ingenering calculator. You can use it for calculation a logarithm, exponent, rooting, nth rooting, factorization. This application is a responsive-enabled, mobile-ready, double calculator powered by Javascript.
Application works stable with Google Chrome, Mozilla Firefox, IE>10, EDGE.

## Local installation

1.  Clone this repo to your local machine

```sh
git clone https://github.com/buccaneer33/lecture_10.git
```

2.  Start up local static server

```sh
npm run start
```

### Development Installation

1.  Clone this repo to your local machine

```sh
git clone https://github.com/buccaneer33/lecture_10.git
```

2.  Go to the project's root directory

3.  Run

```sh
docker-compose up
```

4.  Open your browser on `"localhost:8080"` and use the app.

This app needs [Node.js](https://nodejs.org/) v4+ to run.
* [node.js] - evented I/O for the backend
* [Javascript] - evented I/O for the backend
* [SASS] - preprocessor
* [Flexbox] - best solution for block positioning


####JS patterns used
1.  Simple Factory

```sh
src/js/calculator/calc_factory/calc_class.js   // lines 4-16
```

2.  Memoization

```sh
src/js/calculator/helpers/getCalculate.js   // lines 32-46
```

3.  Fasade

```sh
src/js/calculator/calculator.js   // lines 4,5
```

4.  Observer

```sh
src/js/calculator/calc_factory/calc_class.js   // lines 58-72
```

##### ECMAScript 6
1.  Class

2.  Const

3.  Let

4.  Arrow function



###### AUTHOR

Evgeniy "Buccaneer" Kozlov


   [node.js]: <http://nodejs.org>
   [Javascript]:<https://www.javascript.com>
   [SASS]:<https://github.com/sass>
   [Flexbox]:<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox>
   

