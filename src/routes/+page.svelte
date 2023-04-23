<script>
	import {
		Content,
		Grid,
		Row,
		Column,
		Button,
		ButtonSet,
		Form,
		FormGroup,
		Select,
		SelectItem,
		Tile
	} from 'carbon-components-svelte';
	import GameConsole from 'carbon-icons-svelte/lib/GameConsole.svelte';

	const types = [
		'Avatar the last airbender',
		'Star Wars',
		'Transformers',
		'Lord of the Rings',
		'Harry Potter',
		'The Matrix',
		'The Terminator',
		'The Hunger Games',
		'The Chronicles of Narnia',
		'The Walking Dead',
		'Game of Thron'
	];
</script>

<Content>
	<Grid>
		<Row>
			<Column>
				<Tile>
					<h1>OpenAI AGI Role-Playing Game</h1>
					<p>
						Welcome to the OpenAI AGI Role-Playing Game! In this game, you will be playing as a
						character in an adventure story created by the OpenAI GPT-3.5-Turbo and DALL-E models.
					</p>
				</Tile><Tile>
					<h2>How to Play</h2>
					<p>
						When the game loads, you will see a story prompt and a dropdown menu with several
						options. Select an option from the menu and click the "Play Your Action" button to
						continue the story. The game will generate a new prompt based on your choice, and the
						story will continue from there. You can keep playing until the story ends.
					</p>
					<p>
						If you want to start a new game, click the "New Game" button. This will reset the game
						and generate a new story prompt.
					</p>
				</Tile><Tile>
					<h2>Game Controls</h2>
					<p>
						Select an option from the dropdown menu and click "Play Your Action" to continue the
						story. Click "New Game" to start a new game.
					</p>
				</Tile>
			</Column>
			<Column>
				<Form method="post" action="/newGame">
					<FormGroup>
						<Select labelText="What is your preffered style?" name="type" required>
							<SelectItem text="Choose an option" disabled />
							{#each types as option}
								<SelectItem value={option} text={option} />
							{/each}
						</Select></FormGroup
					>
					<FormGroup>
						<ButtonSet>
							<Button type="submit" icon={GameConsole}>Start New Game</Button>
						</ButtonSet>
					</FormGroup>
				</Form>
			</Column>
		</Row>
	</Grid>
</Content>
