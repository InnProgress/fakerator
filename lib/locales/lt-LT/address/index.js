import countries from "./countryWithCodes";

module.exports = {
	countryAndCode() {
		let country = this.random.objectElement(countries);
		return {
			code: Object.keys(country)[0],
			name: country[Object.keys(country)[0]]
		};
	},

	state: [],
	stateAbbr: [],

	city: require("./cityName"),

	street: [
		"#{address.streetName} #{address.buildingNumber}"
	],

	streetName: [
		"#{names.lastName} #{address.streetPrefix}"
	],

	streetPrefix: [
		"g.",
		"al."	
	],

	buildingNumber: [
		"#####",
		"####",
		"###"
	],

	postCode: [
		"##-###"
	]

};