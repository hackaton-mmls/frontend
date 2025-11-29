<script lang="ts">
	import Icon from '$lib/components/icon.svelte';

	let { timestamp } = $props();
</script>

<div class="status">
	<Icon icon="exclamation" />
	<span
		>до {(timestamp as Date).toLocaleTimeString('ru-RU', {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit'
		})}</span
	>
</div>

<style>
	.status {
		background-color: var(--color-red);
	}
</style>
