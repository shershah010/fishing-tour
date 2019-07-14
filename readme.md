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
### javascript file (sample.component.ts)
```ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Tips } from 'fishing-tour';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    let tips = new Tips();
    tips.add({selector: "h1", header: "hi", info: "hello world!", x: "200px", y: "20px"});
    tips.start(0);
  }

}
```
### Documentation for Tips
* constructor - Creates a Tips feature tour object.
* add - Adds a new tip with the parameters passed by the tipObject. The tipObject must be defined as below.
  * selector - A css query selector of the DOM element that a tip should be assigned to. This element will be forced to have the following css style: position: relative.
  * header - The header for tip.
  * info - The main text in the tip.
  * x - Determines how far left the tip icon and tip box is loacted relative to the selector DOM element.
  * y - Determines how far from the top the tip icon and tip box is loacted relative to the selector DOM element.
  * fn - (optional) - A function that is called when some one clicks the big button on the tip. This function should not return anything nor will any parameter be passed to it.
* start(index) - Starts the feature tour. Ensure that this is called after the DOM has been loaded. The index is an integer that notes which tip to show when the feature tour starts. Zero corresponds to the first tip, one corresponds to the second, etc.
## How to use Tour:
### javascript file
```ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Tour } from 'fishing-tour';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    let tips = new Tour();
    tips.add({selector: "h1", info: "hello world!", position: "bottom"});
    tips.start(0);
  }

}
```
### Documentation for Tour
* constructor - Creates a Tour object.
* add - Adds a new tour step. The stepObject must have the following properties.
  * selector - A css query selector of the DOM element that a tip should be assigned to.
  * info - The message in a tour box.
  * position - The position of the tour box relative to its selector. The possible values are `top`, `left`, `right`, and `bottom`.
* start(index) - Starts the feature tour. Ensure that the DOM loads before calling this method. The index indicates which tour step to start on.
