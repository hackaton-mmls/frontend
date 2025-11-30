<script lang="ts">
	import StatusAlert from '$lib/components/status/alert.svelte';
	import StatusToday from '$lib/components/status/today.svelte';
	import StatusNormal from '$lib/components/status/normal.svelte';
	import { getTimeDiff } from '$lib';

	let { timestamp } = $props();
</script>

{#if getTimeDiff(new Date(), timestamp) <= 0}
	<StatusToday {timestamp} />
{:else if getTimeDiff(new Date(), timestamp) <= 3}
	<StatusAlert {timestamp} />
{:else}
	<StatusNormal {timestamp} />
{/if}
