<script lang="ts">
	import { getTimeDiffString } from '$lib';

	let { timestamp } = $props();
</script>

<div class="status">
	<span>{getTimeDiffString(new Date(), timestamp as Date)}</span>
</div>

<style>
	.status {
		background-color: var(--color-foreground-shade);
	}
</style>
