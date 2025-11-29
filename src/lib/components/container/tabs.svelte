<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	let { left, right, left_tab, right_tab } = $props();

	let left_selected = $state(true);

	function update(new_value: boolean) {
		left_selected = new_value;
	}
</script>

<section class="tab-container">
	<header>
		<button disabled={left_selected} onclick={() => update(true)}>
			<Icon icon={left_tab.icon} />
			<span>{left_tab.name}</span>
		</button>
		<button disabled={!left_selected} onclick={() => update(false)}>
			<Icon icon={right_tab.icon} />
			<span>{right_tab.name}</span>
		</button>
	</header>
	<section style={left_selected ? '' : 'display: none;'}>
		{@render left()}
	</section>
	<section style={!left_selected ? '' : 'display: none;'}>
		{@render right()}
	</section>
</section>

<style>
	.tab-container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 50rem;
		background-color: var(--color-background-highlight);
		border-radius: 1rem;

		& > header {
			display: flex;
			flex-direction: row;
			align-items: center;
			border-radius: 1rem 1rem 0 0;
			overflow: hidden;

			button {
				background-color: var(--color-foreground-shade);
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 0.5rem 1rem;
				gap: 1rem;
				border: none;
				border-radius: 0.5rem;
				font-weight: 500;
				font-size: 1rem;
				flex: 1;
				justify-content: center;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				color: var(--color-text);

				&:disabled {
					background-color: var(--color-foreground);
				}

				&:not(:disabled) {
					background-color: transparent;
					color: var(--color-foreground);
				}

				&:not(:disabled):hover {
					cursor: pointer;
					opacity: 0.5;
				}

				&:focus {
					text-decoration: underline;
					text-decoration-thickness: 2px;
				}
			}
		}

		:global section {
			overflow: hidden;

			display: flex;
			flex-direction: column;
			align-items: stretch;
			background-color: var(--color-foreground);
			color: var(--color-text);
			border-radius: 0 0 1rem 1rem;

			.--requires-padding {
				padding: 1rem 1rem 0 1rem;
			}
		}
	}
</style>
