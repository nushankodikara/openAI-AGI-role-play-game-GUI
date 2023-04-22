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
		TextArea,
		Select,
		SelectItem,
		ImageLoader,
		Tile,
		Slider
	} from 'carbon-components-svelte';
	import GameConsole from 'carbon-icons-svelte/lib/GameConsole.svelte';
	import NextOutline from 'carbon-icons-svelte/lib/NextOutline.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';

	export let data;
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
				<Form method="post" action="/storyMode">
					<FormGroup>
						<TextArea
							value={data.story}
							readonly
							labelText="Game Notes"
							placeholder="Let's begin your journey..."
							rows={6}
							name="story"
						/>
					</FormGroup>
					<FormGroup>
						<Slider
							labelText="Your Health"
							fullWidth
							value={data.playerHealth.min}
							max={data.playerHealth.max}
						/>
					</FormGroup>
					{#if data.enemy}
						<FormGroup>
							<Slider
								labelText="Enemy Health"
								fullWidth
								value={data.enemyHealth.min}
								max={data.enemyHealth.max}
							/>
						</FormGroup>
					{/if}
					<FormGroup>
						<Select labelText="What would you do?" name="option">
							<SelectItem text="Choose an option" disabled />
							{#each data.options as option}
								<SelectItem value={option} text={option} />
							{/each}
						</Select></FormGroup
					>
					<FormGroup>
						<ButtonSet>
							<Button type="submit" icon={NextOutline}>Play Your Action</Button>
						</ButtonSet>
					</FormGroup>
				</Form>
			</Column>
		</Row>
	</Grid>
</Content>
