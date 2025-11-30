<script lang="ts">
	import Navigate from '$lib/components/button/navigate.svelte';
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
	<textarea class="--width-content-padded" placeholder="Пишите здесь..." bind:value={essay}
	></textarea>
	{#if essay.length > min_length}
		<section class="--flex-row-reverse --width-content">
			<Navigate icon="file" label="Отправить" onclick={() => {}} />
		</section>
	{/if}
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

	textarea {
		background-color: var(--color-foreground);
		color: var(--color-text);
		border-radius: 0.5rem;
		border: 4px solid var(--color-background);
		outline: 2px solid var(--color-foreground);
		min-height: 8rem;
		font-size: 1rem;
		padding: 1rem;
		resize: vertical;

		&:focus {
			outline: 2px solid var(--color-blue);
		}
	}
</style>
