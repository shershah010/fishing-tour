# Fishing-Tour
## Overview:
Hello world! I made this package because I needed to create a feature tour for my company's website. The current package is pretty limited and I hope to add to it. I hope that the js files are easy enough to understand so if you want to edit them please do. Also if you have any suggestions or if you find a bug, feel free to contact me at sher.shah010@gmail.com.
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
