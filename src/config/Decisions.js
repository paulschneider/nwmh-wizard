export const Decisions = Object.freeze({
	age: {
		minors: 'minors',
		youth: 'postcode-entry',
		adult: 'postcode-entry',
		senior: 'postcode-entry'
	},
	postcode: {
		included: {
			youth: 'youth',
			adult: 'adult',
			senior: 'senior'
		},
		excluded: {
			youth: 'alt-youth',
			adult: 'alt-adult',
			senior: 'alt-senior',
		}
	}
});
