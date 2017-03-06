import {Routes} from "../config/Routes";

export default class Route {
	/**
	 * class constructor
	 * 
	 */
	constructor() {
		this.routes = Routes;
	}

	get(path) {
		for(let route in this.routes) {
			if(route === path) {
				return this.routes[route];
			}
		}
	}
}