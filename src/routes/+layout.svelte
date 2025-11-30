<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import NavigateButton from '$lib/components/button/navigate.svelte';
	import { USER } from '$lib';
	import { goto } from '$app/navigation';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="--font-rubik --flex-row --gaps-double --pad-big">
	<h1>Школа</h1>
	<a href="/" data-current={page.url.pathname === '/'}> Мои курсы </a>
	<a href="/grades" data-current={page.url.pathname.startsWith('/grades')}> Оценки </a>
	<span class="gap"></span>
	<NavigateButton
		icon="user"
		label={USER.full_name()}
		onclick={() => {
			goto('/profile');
		}}
	/>
</header>

{@render children()}

<style>
	:global {
		:root {
			--color-background: #161820;
			--color-background-highlight: #424552;
			--color-foreground: #ffffff;
			--color-foreground-shade: #dedede;
			--color-foreground-hover: #f0f0f0;
			--color-text: #000000;
			--color-inactive: #828282;
			--color-red: #fa7d7d;
			--color-yellow: #ffc891;
			--color-blue: #81b3ff;
			--color-green: #99ffa8;
			--color-link: #1a40db;
			--color-notification: #cc1e1e;
		}

		html,
		body {
			margin: 0;
			padding: 0;
		}

		body {
			background-color: var(--color-background);
			color: var(--color-text);
			margin: 0;
			font-weight: 400;
		}

		#app > header {
			background-color: var(--color-foreground);

			h1 {
				margin: 0;
				font-size: 1.5rem;
				font-weight: 700;
			}

			& > a {
				color: inherit;
				text-decoration: none;
				font-weight: 500;

				&[data-current='true'],
				&:hover {
					text-decoration: underline;
					text-decoration-thickness: 2px;
				}

				&:hover {
					color: var(--color-link);
				}
			}
		}

		#app > nav {
			background-color: var(--color-foreground-shade);

			a {
				color: inherit;
				text-decoration: none;
			}
		}

		#app > main {
			padding: 4rem 0;
			color: var(--color-foreground);
		}

		h1,
		h2,
		h3,
		h4 {
			margin: 0;
		}

		h1 {
			font-size: 2rem;
		}

		h3 {
			opacity: 0.5;
			font-size: 1rem;
		}

		.gap {
			flex: 1;
			display: block;
			margin: auto;
		}

		.vbar {
			display: block;
			background-color: var(--color-text);
			height: 1rem;
			width: 2px;
			opacity: 0.2;
		}

		.hbar {
			display: block;
			background-color: var(--color-text);
			min-height: 2px;
			flex: 1;
			opacity: 0.2;
		}

		.bullet {
			display: block;
			background-color: var(--color-text);
			width: 0.375rem;
			height: 0.375rem;
			border-radius: 100%;
		}

		.status {
			border-radius: 0.5rem;
			font-size: 0.75rem;
			font-weight: 600;
			color: var(--color-text);
		}

		.subject-label {
			text-decoration: underline;
			text-decoration-thickness: 2px;
			color: inherit;
			font-weight: 500;
			cursor: pointer;

			&:hover {
				color: var(--color-blue);
			}
		}

		body,
		button,
		input,
		textarea {
			font-family: 'Inter', sans-serif;
			font-optical-sizing: auto;
			font-style: normal;
		}

		.--font-rubik {
			font-family: 'Rubik', sans-serif;
			font-optical-sizing: auto;
			font-style: normal;
		}

		.--flex-row {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.--flex-row-reverse {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}

		.--flex-col {
			display: flex;
			flex-direction: column;
			align-items: stretch;
		}

		.--flex-col-center {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.--gaps-tiny {
			gap: 0.25rem;
		}

		.--gaps-small {
			gap: 0.375rem;
		}

		.--gaps-half {
			gap: 0.5rem;
		}

		.--gaps {
			gap: 1rem;
		}

		.--gaps-double {
			gap: 2rem;
		}

		.--pad-small {
			padding: 0.375rem 0.75rem;
		}

		.--pad {
			padding: 0.5rem 1rem;
		}

		.--pad-big {
			padding: 0.75rem 1.5rem;
		}

		.--pad-even-small {
			padding: 0.5rem;
		}

		.--pad-even {
			padding: 1rem;
		}

		.--width-content {
			width: 50rem;
		}

		.--width-content-padded {
			width: 48rem;
		}

		.--apply-foreground {
			display: flex;
			flex-direction: column;
			align-items: stretch;

			padding: 1rem;

			gap: 1rem;

			background-color: var(--color-foreground);
			color: var(--color-text);
			border-radius: 1rem;
		}

		.--apply-block {
			display: flex;
			flex-direction: row;
			align-items: center;

			padding: 0.5rem 1rem;

			gap: 1rem;
		}
	}
</style>
