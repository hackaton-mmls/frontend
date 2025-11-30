<script lang="ts">
	let { filesize } = $props();
</script>

<div class="status --flex-row --pad-small --gaps-small">
	<span>{(Math.round((filesize / 1024 / 1024) * 10) / 10).toFixed(1)} MiB</span>
</div>

<style>
	.status {
		background-color: var(--color-foreground-shade);
	}
</style>
