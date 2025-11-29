<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	let { children, icon, title } = $props();
</script>

<details class="accordion">
	<summary class="--font-rubik">
		<Icon {icon} />
		<span>{title}</span>
		<span class="gap"> </span>
		<Icon icon="angle_down" />
	</summary>
	<section>
		{@render children()}
	</section>
</details>

<style>
	.accordion {
		:global summary::marker,
		:global summary::-webkit-details-marker {
			display: none;
		}

		summary {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			padding: 1rem;
			list-style-type: none;
			font-weight: 500;
			cursor: pointer;

			&:hover {
				background-color: var(--color-foreground-hover);
			}
		}

		& > section {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			padding: 0 1rem 1rem 1rem;
			gap: 1rem;
		}

		&:not(:open, :last-of-type) summary,
		&:open:not(:last-of-type) {
			border-bottom: 2px solid var(--color-foreground-shade);
		}

		&:open :global summary svg:last-child {
			transform: rotate(180deg);
		}
	}
</style>
