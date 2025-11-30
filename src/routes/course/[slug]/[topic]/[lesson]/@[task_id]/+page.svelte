<script lang="ts">
	import Main from '$lib/components/layout/main.svelte';

	let { data } = $props();
</script>

<Main>
	{#if data.task_type === 'test'}
		<section class="--apply-foreground --width-content">Test</section>
	{/if}
</Main>
