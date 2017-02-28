export const Decisions = Object.freeze({
	age: {
		under_15: 'minors',
		under_24: 'postcode-entry',
		over_24: 'postcode-entry'
	},
	postcode: {
		included: {
			under_24: 'youth',
			over_24: 'adult'
		}, 
		excluded: {
			under_24: 'similar-youth-organisations',
			over_24: 'similar-adult-organisations',
		}
	}
});