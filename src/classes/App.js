import Route from "./Route";
import {Decisions} from "../config/Decisions";

export default class App {
	/**
	 * class constructor
	 *
	 */
	constructor(postcodes, externalPaths) {

		this.routes 		= new Route;
		this.postcodes 		= postcodes;
		this.decisions 		= Decisions;
		this.externals 		= externalPaths;
		this.selectedAge 	= null;
		this.pages 			= [];
	}

	/**
	 * initialise the app
	 *
	 */
	init() {
		this._setNav();
		this._setBacks();
		this._setAgeSelect();
		this._setPostcodeEntry();
		this._setExternalLinks();

		this.pages.push("index");
	}

	/**
	 * navigate to the next page
	 *
	 */
	next(path) {
		let route = this.routes.get(path);

		this._hideAll();
		this._show(route);

		this.pages.push(route);
	}
	/**
	 * navigate to the previous page
	 *
	 */
	previous(e) {
		e.preventDefault();

		this.pages.pop();
		let previousPage = this.pages.slice(-1);

		this._hideAll();
		this._show(previousPage);
	}

	/**
	 * display the page
	 *
	 */
	_show(section) {
		document.querySelector("#" + section).classList.add("active");
	}

	/**
	 * hide all of the other pages
	 *
	 */
	_hideAll() {
		let removable = document.getElementsByClassName("page");

		for(let i=0; i < removable.length; i++) {
			removable[i].classList.remove("active");
		}
	}

	/**
	 * initialise all of the back buttons on the app
	 *
	 */
	_setBacks() {
		let backs = document.getElementsByClassName("back-btn");

		for(let i = 0; i < backs.length; i++) {
			backs[i].addEventListener("click", (e) => {
				this.previous(e);
			});
		};
	}

	/**
	 * set the event listeners for the navigation links buttons
	 *
	 */
	_setNav() {
		let navs = document.getElementsByClassName("wizard-nav");

		for(let i = 0; i < navs.length; i++) {
			navs[i].addEventListener("click", (e) => {
				e.preventDefault();
				var path = e.target.hash.substr(1);

				this.next(path);
			});
		};
	}

	/**
	 * set the event listeners for the age selection buttons
	 *
	 */
	_setAgeSelect() {
		let buttons = document.getElementsByClassName("age-select");

		for(let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", (e) => {
				e.preventDefault();
				let age = e.target.dataset.age;
				this._setAge(age);
			});
		};
	}

	/**
	 * set the age value against the class
	 *
	 */
	_setAge(age) {
		this.selectedAge = age;

		if(this._isMinor(age)) {
			return this.next("minors");
		}

		return this.next("postcode");
	}

	/**
	 * has the user selected an age which indicates they are a minor
	 *
	 */
	_isMinor(age) {
		return age === "minors";
	}

	/**
	 * add the event listener to the postcode button
	 *
	 */
	_setPostcodeEntry() {
		document.querySelector(".postcode-btn").addEventListener("click", (e) => {
			e.preventDefault();

			this._postcodeAdded();
		});
	}

	/**
	 * the user added a postcode
	 *
	 */
	_postcodeAdded() {
		let postcode = document.getElementById("postcode-field").value;

		if(this.selectedAge === null) {
            return this.next("urgent-contact");
        }

        let determination = this._makeDetermination(postcode);

        this._makeDecision('postcode', determination, this.selectedAge);
	}

	/**
	 * make a postcode determination
	 *
	 */
	_makeDetermination(postcode) {
		let postcodes = this.postcodes[this.selectedAge];

		// console.log(this.postcodes, postcodes, this.selectedAge);

		return postcodes.includes(parseInt(postcode)) ? "included": "excluded";
	}

	/**
     * use the decision tree to determine where to go next
     *
     */
    _makeDecision(...keys) {
        let decisions = this.decisions;

        keys.forEach((index) => {
            decisions = decisions[index];
        });

        this.next(decisions);
    }

    /**
     * set the actions for each of the external links
     *
     */
    _setExternalLinks() {
    	let links = document.getElementsByClassName("external");

    	Array.from(links).forEach((link) => {
	    	link.addEventListener("click", (e) => {
				this._goExternal(e.target.dataset.route, e);
			});
    	});
    }

    /**
     * execute an external link
     *
     */
    _goExternal(target, event) {
    	for(let route in this.externals) {
    		if(route === target) {
    			event.preventDefault();
    			window.location = this.externals[route];
    		}
    	}

    }
}
