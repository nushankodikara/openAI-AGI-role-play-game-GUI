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

	export let form;
	console.log(form);
</script>

<Content>
	<Grid>
		<Row>
			<Column>
				<Form method="post" action="/storyMode">
					<FormGroup>
						<TextArea
							value={form.story}
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
							value={form.playerHealth.min}
							max={form.playerHealth.max}
						/>
					</FormGroup>
					{#if form.enemy}
						<FormGroup>
							<Slider
								labelText="Enemy Health"
								fullWidth
								value={form.enemyHealth.min}
								max={form.enemyHealth.max}
							/>
						</FormGroup>
					{/if}
					<FormGroup>
						<Select labelText="What would you do?" name="option">
							<SelectItem text="Choose an option" disabled />
							{#each form.options as option}
								<SelectItem value={option} text={option} />
							{/each}
						</Select></FormGroup
					>
					<FormGroup>
						<ButtonSet>
							<Button type="submit" icon={NextOutline}>Play Your Action</Button>
							<Button href="/" icon={Restart}>New Game</Button>
						</ButtonSet>
					</FormGroup>
				</Form>
			</Column>
		</Row>
	</Grid>
</Content>
