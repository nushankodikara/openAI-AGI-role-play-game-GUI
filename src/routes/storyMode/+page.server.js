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
		const type = formData.get('type');

		try {
			if (!option || !story) {
				console.log('Missing Form Data');
				throw new Error('Missing Form Data');
			}

			//get next line post data
			const nextLine = await fetch(`http://localhost:3000/continueStory/${type}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					userResponse: option,
					story: story
				})
			}).then((r) => r.json());

			console.log(nextLine);

			// const genImg = await fetch(`http://localhost:3000/image`, {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify({
			// 		prompt: nextLine.image
			// 	})
			// }).then((r) => r.json());

			const playerHealth = minAndMax(nextLine.playerHealth);

			let eHealth = {};
			if (nextLine.enemy) {
				eHealth = minAndMax(nextLine.enemyHealth);
			}

			const retObj = {
				// image: genImg.image_url,
				story: nextLine.story,
				playerHealth: playerHealth,
				enemy: nextLine.enemy,
				enemyHealth: eHealth,
				options: nextLine.options,
				type: type
			};
			return retObj;
		} catch (e) {
			console.log(e);

			return {
				error: true,
				story: story,
				option: option,
				type: type
			};
		}
	}
};
