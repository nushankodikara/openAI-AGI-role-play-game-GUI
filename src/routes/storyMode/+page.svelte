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
		TextInput,
		Select,
		SelectItem,
		Slider
	} from 'carbon-components-svelte';
	import NextOutline from 'carbon-icons-svelte/lib/NextOutline.svelte';
	import Restart from 'carbon-icons-svelte/lib/Restart.svelte';

	export let form;
</script>

<Content>
	<Grid>
		<Row>
			{#if form.error}
				<Column>
					<Form method="post" action="/storyMode">
						<FormGroup>
							<TextInput value={form.type} readonly labelText="Game Type" name="type" />
						</FormGroup>
						<FormGroup>
							<h2>Something Went Wrong. Please play your action again.</h2>
						</FormGroup>
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
							<Select labelText="Action you selected" name="option">
								<SelectItem value={form.option} text={form.option} />
							</Select></FormGroup
						>
						<FormGroup>
							<ButtonSet>
								<Button type="submit" icon={NextOutline}>Play Your Action</Button>
								<Button kind="secondary" href="/" icon={Restart}>New Game</Button>
							</ButtonSet>
						</FormGroup>
					</Form>
				</Column>
			{:else}
				<!-- <Column>
				<ImageLoader src={form.image} alt="OpenAI AGI Role-Playing Game" aspectRatio="1x1" />
			</Column> -->
				<Column>
					<Form method="post" action="/storyMode">
						<FormGroup>
							<TextInput value={form.type} readonly labelText="Game Type" name="type" />
						</FormGroup>
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
								<Button kind="secondary" href="/" icon={Restart}>New Game</Button>
							</ButtonSet>
						</FormGroup>
					</Form>
				</Column>
			{/if}
		</Row>
	</Grid>
</Content>
