function minAndMax(str) {
	const [min, max] = str.split('/').map((numStr) => parseInt(numStr));
	return { min, max };
}

export async function load({ fetch }) {
	const products = await fetch('http://localhost:3000').then((r) => r.json());
	const playerHealth = minAndMax(products.playerHealth);

	let eHealth = {};
	if (products.enemy) {
		eHealth = minAndMax(products.enemyHealth);
	}

	const retObj = {
		story: products.story,
		playerHealth: playerHealth,
		enemy: products.enemy,
		enemyHealth: eHealth,
		options: products.options
	};
	return retObj;
}
