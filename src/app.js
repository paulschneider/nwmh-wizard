import App from "./classes/App";

window.NWMH_Wizard = function(data) {
	let Wizard = new App(data.postcodes, data.externals);
	
	Wizard.init();
}
