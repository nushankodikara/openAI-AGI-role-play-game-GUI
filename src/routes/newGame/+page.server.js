function minAndMax(str) {
	const [min, max] = str.split('/').map((numStr) => parseInt(numStr));
	return { min, max };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, fetch }) => {
		//get Form Data
		const formData = await request.formData();
		const type = formData.get('type');

		const newLine = await fetch(`http://localhost:3000/newStory/${type}`).then((r) => r.json());
		const playerHealth = minAndMax(newLine.playerHealth);

		let eHealth = {};
		if (newLine.enemy) {
			eHealth = minAndMax(newLine.enemyHealth);
		}

		const retObj = {
			story: newLine.story,
			playerHealth: playerHealth,
			enemy: newLine.enemy,
			enemyHealth: eHealth,
			options: newLine.options,
			type: type
		};
		return retObj;
	}
};
