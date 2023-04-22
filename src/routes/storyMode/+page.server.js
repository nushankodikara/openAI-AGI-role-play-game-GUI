function minAndMax(str) {
	const [min, max] = str.split('/').map((numStr) => parseInt(numStr));
	return { min, max };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, fetch }) => {
		//get Form Data
		const formData = await request.formData();
		const option = formData.get('option');
		const story = formData.get('story');

		//get next line post data
		const nextLine = await fetch(`http://localhost:3000/chat`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userResponse: option,
				story: story
			})
		}).then((r) => r.json());

		const playerHealth = minAndMax(nextLine.playerHealth);

		let eHealth = {};
		if (nextLine.enemy) {
			eHealth = minAndMax(nextLine.enemyHealth);
		}

		const retObj = {
			story: nextLine.story,
			playerHealth: playerHealth,
			enemy: nextLine.enemy,
			enemyHealth: eHealth,
			options: nextLine.options
		};
		return retObj;
	}
};
