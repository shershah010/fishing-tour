"use strict";

export class Tips {

  constructor(index) {
    this.tips = [];
    this.index = index;

    window.onclick = (function(event) {
      var tipBox = event.target.closest(".tipBox");
      var circles = event.target.closest(".circleContainer");
      var tipBoxPresent = document.querySelector(".tipBox");
      if (tipBox == null && circles == null && tipBoxPresent != null) {
        tipBoxPresent.remove();
        this.index += 1;
        this.start();
      }
    }).bind(this);
  }

  add(tip) {
    this.tips.push(tip);
  }

  start() {
    if (this.index >= this.tips.length) {
      return;
    }

    const tip = this.tips[this.index];
    const target = document.querySelector(tip.selector);
    const circle = document.createElement("container");

    target.style.position = "relative";

    circle.classList.add("circleContainer");
    circle.style.top = tip.y;
    circle.style.left = tip.x;
    circle.innerHTML = "<div class='circle' style='animation-delay: -2s'></div><div class='circle' style='animation-delay: -1s'></div><div class='circle' style='animation-delay: 0s'></div>";
    circle.addEventListener("click", (function(e) {
      this.remove();

      const tipBox = document.createElement("div");

      let next = function() {
        tipBox.remove();
        this.index =+ 1;
        this.start();
      }

      let outside = function(e) {
        if (e.target != tipBox && e.target != circle) {
          next();
        }
      }

      tipBox.classList.add("tipBox");
      tipBox.innerHTML = "<h1>" + tip.header + "</h1><p>" + tip.info + "</p><button class='smallButton'>&#x26CC;</button><button class='bigButton'>Show Me</button>";
      tipBox.querySelector(".smallButton").addEventListener("click", function(e) {
        next();
      });

      tipBox.querySelector(".bigButton").addEventListener("click", function(e) {
        if (tip.fn !== undefined) { tip.fn(); }
        next();
      });

      target.appendChild(tipBox);
    }).bind(this));

    target.appendChild(circle);
  }
}

export class Tour {

	constructor(options) {
		this.steps = [];
		this.currentStep = 0;
		this.body = document.querySelector("body");
	}

	addStep(obj) {
		this.steps.push(obj);
		// add a new step but hold on its inialization
	}
	start() {
		this.initializeStep(this.steps[0]);
		// initalize the first step and start at the first step
	}
	initializeStep(obj) {
		var item = document.querySelector(obj.selector);
		var info = document.createElement("p");
		info.innerHTML = obj.info;
		var pos = obj.position;
		//obj.
		this.displayStep(item, info, pos)
		// initalize the step obj
	}
	deinitializeStep() {
		document.querySelector(".tourBox").remove();
	}
	displayStep(element, info, pos){
		var tourBox = document.createElement("div");
		var buttonBox = document.createElement("div");
		var backButton = document.createElement("button");
		backButton.onclick = (function() { this.back(); }).bind(this);
		backButton.innerHTML = "Back";
		var nextButton = document.createElement("button");
		nextButton.onclick = (function() { this.next(); }).bind(this);
		nextButton.innerHTML = "Next";
		var doneButton = document.createElement("button");
		doneButton.onclick = (function() { this.end(); }).bind(this);
		doneButton.innerHTML = (this.currentStep == this.steps.length) ? "Done" : "Skip";
		if (this.currentStep == 0) {
			buttonBox.appendChild(doneButton);
			buttonBox.appendChild(nextButton);
		} else if (count == steps.length) {
			buttonBox.appendChild(backButton);
			buttonBox.appendChild(doneButton);
		} else {
			buttonBox.appendChild(doneButton);
			buttonBox.appendChild(backButton);
			buttonBox.appendChild(nextButton);
		}
		tourBox.appendChild(info);
		tourBox.appendChild(buttonBox);
		tourBox.classList.add("tourBox", pos);
		element.appendChild(tourBox);
	}
	next() {
		this.deinitializeStep();
		this.currentStep++;
		if (this.currentStep >= this.steps.length) {
			end();
		} else {
			this.initializeStep(this.steps[this.currentStep]);
		}
		//go to the next step
	}
	back() {
		this.deinitializeStep();
		this.currentStep--;
		if (this.currentStep < 0) {
			this.currentStep == 0;
		}
		this.initializeStep(this.steps[this.currentStep]);
		// got to the previous step
	}
	end() {
		this.deinitializeStep();
		// end the tour
	}
}
