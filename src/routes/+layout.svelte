<script>
	import 'carbon-components-svelte/css/all.css';
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SkipToContent
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;
</script>

<Header company="OpenAI" platformName="AGI role play game" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem href="/" text="GitHub (Server)" />
		<HeaderNavItem href="/" text="GitHub (GUI)" />
	</HeaderNav>
</Header>

<slot />
