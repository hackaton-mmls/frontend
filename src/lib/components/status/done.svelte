<script lang="ts">
	import Icon from '$lib/components/icon.svelte';

	let { result } = $props();
</script>

<div class="status --flex-row --pad-small --gaps-small">
	<Icon icon="checkmark" />
	<span>{result}/5</span>
</div>

<style>
	.status {
		background-color: var(--color-foreground-shade);
		color: var(--text-inactive);
	}
</style>
