# Fishing-Tour
## Overview:
Hello world! I made this package because I needed to create a feature tour for my company's website. The current package is pretty limited and I hope to add to it. I hope that the js and css files are easy enough to understand so if you want to edit them please do. Also if you have any suggestions or if you find a bug, feel free to contact me at sher.shah010@gmail.com. Here is the link to the [github page](https://github.com/shershah010/fishing-tour).
## For both:
## html file
```html
<link href="./node_modules/fishing-tour/styles.css" rel="stylesheet" type="text/css"> <!-- in the header -->
<script type="module" src="index.js"></script> <!-- end of body -->
```
## How to use Tips:
### javascript file
```js
import { Tips } from "./node_modules/fishing-tour/index.js";

function hello () {
  alert("hello world");
}

/* Creating tips */
var tips = new Tips(0);
tips.add({ selector: "h1", header: "hi", info: "hello", x: "180px", y: "20px", fn: hello });
//... add more tips
tips.start();
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
import { Tour } from "./node_modules/fishing-tour/index.js";

/* Creating a tour */
var tour = new Tour();
tour.addStep({selector: "h1", info: "hello", position: "right"});
//... add more tour steps
tour.start();
```
### Documentation for Tips
* constructor - the constructor. Takes no arguments.
* addStep - this method takes in a Map with the following attributes:
  * selector - this is a css selector the gets the element you want to provide a tip for. This element should have the `position: relative` property for the tip to display properly.
  * info - this is the main body of your tip.
  * position - this is where the tip box will be relative to selector. Positions are `top`,  `bottom`, `right`, `left`.
* start - call this function to start the tour.
