<script lang="ts">
	import Icon from '$lib/components/icon.svelte';

	let { icon, label } = $props();
</script>

<button>
	<Icon {icon} />
	<span>{label}</span>
	<span class="vbar"></span>
	<Icon icon="angle_right" />
</button>

<style>
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

		span:not(.vbar) {
			flex: 1;
			text-align: left;
		}

		&:hover {
			cursor: pointer;
			background-color: var(--color-foreground-hover);
		}

		&:focus {
			outline: 2px solid black;
		}
	}
</style>
