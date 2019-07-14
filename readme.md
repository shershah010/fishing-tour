# Fishing-Tour
## Overview:
Hello world! Fishing Tour is a small client side library that facilitates the creation of feature tours or tutorials. There are two objects in this library, Tour, and Tips. The Tour class is used to create a feature tour that prevents your users from using your site until they finishing going though the tour. The Tips class creates little icons near html elements of your choice and users can click on these icons. Upon clicking on an icon, a small card will open up and display a custom hint. The main difference between the Tour and Tips classes is that a user can ignore a feature tour implemented by Tips, but cannot ignore a feature tour implemented by the Tour class. Below are ways to implement both the Tour and the Tips classes. If you have any suggestions or if you find a bug, feel free to contact me at sher.shah010@gmail.com.
## Tested only in Angular
## Set Up
### styles.css
```css
@import '~../node_modules/fishing-tour/fishing-tour.css';
```
### html file (sample.component.html)
```html
<h1>Hello World</h1>
```
## How to use Tips:
### javascript file
```js
import { Tips } from "fishing-tour";

function hello () {
  alert("hello world");
}

/* Creating tips */
var tips = new Tips();
tips.add({ selector: "h1", header: "hi", info: "hello", x: "180px", y: "20px", fn: hello });
//... add more tips
tips.start(0);
```
### Documentation for Tips
* constructor - the constructor takes a number which is the index of the tip to be displayed. Normally this number would be zero as you would want to start from the very first tip. However, if your site remembers users then for those who have already visited the site, you might want to set the tip index to the index of the next tip the user has not seen. If a user has seen every tip you could provide a tip number past the number of tips so that user does not need to see them again.
* add - this method takes in a Map with the following attributes:
  * selector - this is a css selector the gets the element you want to provide a tip for. This element should have the `position: relative` property for the tip to display properly.
  * header - this is the title of your tip.
  * info - this is the main body of your tip.
  * x - this is the position of your tip notification icon from the left.
  * y - this is the position of your tip notification icon from the top.
  * fn - this is a function that will be called if the user clicks on the big green button on the tip. The function must take no arguments.
* start - call this function to start the tips.
## How to use Tour:
### javascript file
```js
import { Tour } from "fishing-tour";

/* Creating a tour */
var tour = new Tour();
tour.add({selector: "h1", info: "hello", position: "right"});
//... add more tour steps
tour.start(0);
```
### Documentation for Tour
* constructor - the constructor. Takes no arguments.
* add - this method takes in a Map with the following attributes:
  * selector - this is a css selector the gets the element you want to provide a tip for. This element should have the `position: relative` property for the tip to display properly.
  * info - this is the main body of your tip.
  * position - this is where the tip box will be relative to selector. Positions are `top`,  `bottom`, `right`, `left`.
* start - call this function to start the tour.
