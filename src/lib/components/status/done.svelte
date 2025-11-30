<script lang="ts">
	import Icon from '$lib/components/icon.svelte';

	let { grade } = $props();
</script>

<div class="status --flex-row --pad-small --gaps-small">
	<Icon icon="checkmark" />
	<span>{grade.value}/{grade.max}</span>
</div>

<style>
	.status {
		background-color: var(--color-foreground-shade);
		color: var(--text-inactive);
	}
</style>
