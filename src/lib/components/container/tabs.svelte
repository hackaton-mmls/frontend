<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	let { left, right, left_tab, right_tab } = $props();

	let left_selected = $state(true);

	function update(new_value: boolean) {
		left_selected = new_value;
	}
</script>

{#snippet button(tab: { icon: string; name: string }, selected: boolean, sets: boolean)}
	<button class="--apply-block" disabled={selected} onclick={() => update(sets)}>
		<Icon icon={tab.icon} />
		<span>{tab.name}</span>
	</button>
{/snippet}

<section class="tab-container --flex-col --width-content">
	<header class="--flex-row">
		{@render button(left_tab, left_selected, true)}
		{@render button(right_tab, !left_selected, false)}
	</header>
	<section class="--flex-col" style={left_selected ? '' : 'display: none;'}>
		{@render left()}
	</section>
	<section class="--flex-col" style={!left_selected ? '' : 'display: none;'}>
		{@render right()}
	</section>
</section>

<style>
	.tab-container {
		background-color: var(--color-background-highlight);
		border-radius: 1rem;

		& > header {
			border-radius: 1rem 1rem 0 0;
			overflow: hidden;

			button {
				background-color: var(--color-foreground-shade);
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

			background-color: var(--color-foreground);
			color: var(--color-text);
			border-radius: 0 0 1rem 1rem;

			.--requires-padding {
				padding: 1rem 1rem 0 1rem;
			}
		}
	}
</style>
