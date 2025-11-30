<script lang="ts">
	import Icon from '$lib/components/icon.svelte';

	let { icon, label, onclick } = $props();
</script>

<button class="--apply-block" {onclick} type="submit">
	{#if icon.length > 0}
		<Icon {icon} />
	{/if}
	<span>{label}</span>
	<span class="vbar"></span>
	<Icon icon="angle_right" />
</button>

<style>
	button {
		background-color: var(--color-foreground-shade);
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
