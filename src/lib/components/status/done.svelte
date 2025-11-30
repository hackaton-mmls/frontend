<script lang="ts">
	import type { Grade } from '$lib/api';
	import Icon from '$lib/components/icon.svelte';

	let { grade } = $props();
</script>

<div class="status --flex-row --pad-small --gaps-small">
	<Icon icon="checkmark" />
	<span>{grade.value}/{grade.max}</span>
	{#if !(grade as Grade).comment?.is_read}
		<span class="notification"></span>
	{/if}
</div>

<style>
	.status {
		background-color: var(--color-foreground-shade);
		color: var(--text-inactive);
	}

	.notification {
		display: block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 100%;
		background-color: var(--color-notification);
		outline: 4px solid var(--color-foreground);
		margin-right: -0.5rem;
		margin-top: -1.5rem;
	}
</style>
