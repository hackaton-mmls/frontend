<script lang="ts">
	let { data } = $props();
</script>

<main class="--flex-col-center --gaps">
	{#if data.task_type === 'test'}
		<section class="--apply-foreground --width-content">Test</section>
	{/if}
</main>
