<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import Main from '$lib/components/layout/main.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';

	let { data } = $props();

	const min_length = 200;
	let essay = $state('');
</script>

<header class="tracker --flex-row --pad-even --gaps-double">
	<ProgressBar percentage={Math.min(Math.round((essay.length / min_length) * 100), 100)} />
	<span class="--font-rubik --flex-row --gaps-half">
		<Icon icon="clock" />
		00:11:00
	</span>
</header>
<Main>
	<div class="--flex-col --width-content">
		<h1>{data.task_name}</h1>
		<h3>«{data.topic_name}: {data.lesson_name}»</h3>
	</div>
	<section class="--apply-foreground --width-content">...</section>
</Main>

<style>
	.tracker {
		background-color: var(--color-foreground);
		color: var(--color-text);
		position: sticky;
		top: 0;
		width: calc(100% - 2rem);

		span {
			font-weight: 500;
			line-height: 1;
		}
	}
</style>
