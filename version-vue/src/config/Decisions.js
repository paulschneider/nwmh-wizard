export const Decisions = Object.freeze({
	age: {
		under_15: '/urgent-contact/minors',
		under_24: '/urgent-contact/postcode',
		over_24: '/urgent-contact/postcode'
	},
	postcode: {
		included: {
			under_24: '/urgent-contact/youth',
			over_24: '/urgent-contact/adult'
		}, 
		excluded: {
			under_24: '/urgent-contact/similar-youth-organisations',
			over_24: '/urgent-contact/similar-adult-organisations',
		}
	}
});