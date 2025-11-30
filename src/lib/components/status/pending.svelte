<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
</script>

<div class="status --flex-row --pad-small --gaps-small">
	<Icon icon="clock" />
	<span>на проверке</span>
</div>

<style>
	.status {
		background-color: var(--color-blue);
	}
</style>
