<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import NavigateButton from '$lib/components/button/navigate.svelte';
	let { children } = $props();

	let user = {
		first_name: 'Иван',
		last_name: 'Иванов',
		full_name(): string {
			return this.first_name + ' ' + this.last_name;
		}
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="--font-rubik">
	<h1>Школа</h1>
	<a href="/" data-current={page.url.pathname === '/'}> Мои курсы </a>
	<a href="/grades" data-current={page.url.pathname.startsWith('/grades')}> Оценки </a>
	<span class="gap"></span>
	<NavigateButton icon="user" label={user.full_name()} onclick={() => {}} />
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
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0.75rem 1.5rem;
			gap: 2rem;
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
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: var(--color-foreground-shade);
			padding: 0.5rem 1rem;
			gap: 1rem;

			a {
				color: inherit;
				text-decoration: none;
			}
		}

		#app > main {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 4rem 0;
			gap: 1rem;
			color: var(--color-foreground);
		}

		.gap {
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

		.bullet {
			display: block;
			background-color: var(--color-text);
			width: 0.375rem;
			height: 0.375rem;
			border-radius: 100%;
		}

		.status {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0.375rem 0.75rem;
			border-radius: 0.5rem;
			gap: 0.375rem;
			font-size: 0.75rem;
			font-weight: 600;
			color: var(--color-text);
		}

		body,
		button,
		input {
			font-family: 'Inter', sans-serif;
			font-optical-sizing: auto;
			font-style: normal;
		}

		.--font-rubik {
			font-family: 'Rubik', sans-serif;
			font-optical-sizing: auto;
			font-style: normal;
		}
	}
</style>
