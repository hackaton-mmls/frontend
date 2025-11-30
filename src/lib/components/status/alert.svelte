<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import { getTimeDiffString } from '$lib';

	let { timestamp } = $props();
</script>

<div class="status --flex-row --pad-small --gaps-small">
	<Icon icon="exclamation" />
	<span>{getTimeDiffString(new Date(), timestamp as Date)}</span>
</div>

<style>
	.status {
		background-color: var(--color-yellow);
	}
</style>
