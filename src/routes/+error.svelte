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
</script>

<Content>
	<Grid>
		<Row>
			<Column>
				<Tile>
					<h1>Oops! Something went wrong.</h1>
					<p>
						We're sorry, but an internal error occurred while processing your request. Please try
						again later.
					</p>
				</Tile>
			</Column>
			<Column>
				<Button href="/" icon={GameConsole}>Start New Game</Button>
			</Column>
		</Row>
	</Grid>
</Content>
