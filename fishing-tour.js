class Tips {

  constructor() {
    this.tips = []; // an array that holds all the tips.

    window.onclick = (function(event) {
      const tipBox = event.target.closest(".ft-tip-box");
      const circles = event.target.closest(".ft-circle-container");
      const tipBoxPresent = document.querySelector(".ft-tip-box");
      if (tipBox == null && circles == null && tipBoxPresent != null) {
        tipBoxPresent.remove();
        this.start(this.index + 1);
      }
    }).bind(this); // if a tip box is open and the user clicks anywhere outside the tip box, then remove the tip box and start the next tip.
  }

  add(tip) {
    this.tips.push(tip);
  } // simply pushes the next tip in.

  createCircleHTML() {
    return `<div class='ft-circle' style='animation-delay: -2s'></div>
            <div class='ft-circle' style='animation-delay: -1s'></div>
            <div class='ft-circle' style='animation-delay: 0s'></div>`;
  } // creates the tip icon.

  createTipBoxHTML(header, info, hasFn) {
    if (!hasFn) {
      return "<h1>" + header + "</h1><p>" + info + "</p><button class='ft-small-button'>&#10005;</button>";
    }
    return "<h1>" + header + "</h1><p>" + info + "</p><button class='ft-small-button'>&#10005;</button><button class='ft-big-button'>Show Me</button>";
  } // creates the tip box.

  start(index) {
    this.index = index; // notes which tip to start on

    if (this.index >= this.tips.length) {
      return;
    } // if all the tips have been shown, then exit.

    const tip = this.tips[this.index]; // get the tip properties.
    const target = document.querySelector(tip.selector);
    const circle = document.createElement("container");

    target.style.position = "relative"; // the tip selector must be made relative so that the tip icon and tip box can be displayed properly.

    circle.classList.add("ft-circle-container");
    circle.style.top = tip.y;
    circle.style.left = tip.x;
    circle.innerHTML = this.createCircleHTML();
    circle.addEventListener("click", (function(e) {
      circle.remove(); // removes the tip icon.

      const tipBox = document.createElement("div");

      tipBox.classList.add("ft-tip-box");
      tipBox.innerHTML = this.createTipBoxHTML(tip.header, tip.info, tip.fn !== undefined);

      tipBox.querySelector(".ft-small-button").addEventListener("click", (function(e) {
        tipBox.remove(); // removes the tip box
        this.start(this.index + 1); // recursively calls start until the end of the tip array.
      }).bind(this)); // clicking the small 'x' should close the tip box and show the next tip.

      if (tip.fn !== undefined) {
        tipBox.querySelector(".ft-big-button").addEventListener("click", (function(e) {
          tip.fn();
          tipBox.remove();
          this.start(this.index + 1);
        }).bind(this));
      } // if a function is given, then run it.

      target.appendChild(tipBox);
    }).bind(this));

    target.appendChild(circle);
  }
}

class Tour {

	constructor() {
		this.steps = [];
	}

	add(obj) {
		this.steps.push(obj);
	} // add a new step but hold on its inialization

	start(index) {
    this.currentStep = index;

    if (this.currentStep >= this.steps.length) {
      return;
    }

		this.initializeStep(this.steps[this.currentStep]);
	} // initalize the first step and start at the first step

	initializeStep(obj) {
		const item = document.querySelector(obj.selector);
		var pos = obj.position; //obj.
		this.displayStep(item, obj.info, pos); // initalize the step obj
	}

	deinitializeStep() {
		document.querySelector(".ft-tour-box").remove();
	}

  createTourBoxHTML(info) {
    return `<p>` + info + `</p>
            <div>
              <button>Back</button>
              <button>Skip</button>
              <button>Next</button>
              <button>Done</button>
            </div>`;
  }

	displayStep(element, info, pos){
		const tourBox = document.createElement("div");
    tourBox.innerHTML = this.createTourBoxHTML(info);
    const buttons = tourBox.querySelectorAll("button");
    buttons[0].addEventListener("click", (function(e) {
      this.back();
    }).bind(this)); // Back button
    buttons[1].addEventListener("click", (function(e) {
      this.end();
    }).bind(this)); // Skip button
    buttons[2].addEventListener("click", (function(e) {
      this.next();
    }).bind(this)); // Next button
    buttons[3].addEventListener("click", (function(e) {
      this.end();
    }).bind(this)); // Done button

		if (this.currentStep == 0) {
			buttons[0].classList.add("ft-hidden");
		}
    if (this.currentStep == this.steps.length - 1) {
      buttons[1].classList.add("ft-hidden");
      buttons[2].classList.add("ft-hidden");
    } else {
      buttons[3].classList.add("ft-hidden");
    }

    const placement = this.findPlacement(element, pos)
		tourBox.classList.add("ft-tour-box");
    tourBox.style.cssText = placement;
    element.style.position = "relative"; // the tour selector must be made relative so that the tip icon and tip box can be displayed properly.
		element.appendChild(tourBox);
    tourBox.scrollIntoView(false);
	}

  findPlacement(el, pos) {
    var top = 0;
    var left = 0;
    switch (pos) {
      case "top" :  top = -300; break;
      case "left" : left = -350; break;
      case "right" : left = el.getBoundingClientRect().width; break;
      case "bottom" : top = el.getBoundingClientRect().height; break;
    }
    return "top: " + top + "px; left: " + left + "px;";
  }

	next() {
		this.deinitializeStep();
		this.currentStep++;
		if (this.currentStep >= this.steps.length) {
			this.end();
		} else {
			this.initializeStep(this.steps[this.currentStep]);
		}
	} //go to the next step

	back() {
		this.deinitializeStep();
		this.currentStep--;
		if (this.currentStep < 0) {
			this.currentStep == 0;
		}
		this.initializeStep(this.steps[this.currentStep]);
	} // got to the previous step

	end() {
		this.deinitializeStep();
		// end the tour
	}
}
