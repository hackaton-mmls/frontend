<script lang="ts">
	import { getTimeDiffString } from '$lib';
	import { getUserFullName, type EssayTask, type User } from '$lib/api.js';
	import Navigate from '$lib/components/button/navigate.svelte';
	import Icon from '$lib/components/icon.svelte';
	import Main from '$lib/components/layout/main.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';

	let { data } = $props();

	const min_words = (data.task.task as EssayTask).min_words;
	let essay = $state('');
	let percentage = $derived(() => {
		const words = essay.length === 0 ? [] : essay.split(' ');
		return Math.min(Math.round((words.length / min_words) * 100), 100);
	});
</script>

<nav class="--font-rubik --flex-row --pad --gaps">
	<Icon icon="symbol_hashtag" />
	<a href="/course/{data.course.id}">{data.course.name}</a>
	<Icon icon="angle_right" />
	<a href="?">Домашние задания</a>
	<Icon icon="angle_right" />
	<a href="?">{data.task.name} — {data.task.details}</a>
</nav>

<header class="tracker --flex-row --pad-even --gaps-double">
	<ProgressBar percentage={percentage()} />
	<span class="--font-rubik --flex-row --gaps-half">
		<Icon icon="clock" />
		{getTimeDiffString(new Date(), data.task.timestamp)}
	</span>
</header>
<Main>
	<div class="--flex-col --width-content">
		<h1>{data.task.name}</h1>
		<h3>{data.task.details}</h3>
	</div>
	{#if data.task.is_submitted}
		{#if data.task.grade != null}
			<section class="--apply-foreground --width-content">
				<b>{getUserFullName(data.task.grade.comment?.author as User)}:</b>
				<div>
					{data.task.grade.comment?.contents}
				</div>
			</section>
		{/if}
		<textarea class="--width-content-padded" value={essay} disabled></textarea>
	{:else}
		<textarea class="--width-content-padded" placeholder="Пишите здесь..." bind:value={essay}
		></textarea>
		{#if percentage() === 100}
			<section class="--flex-row-reverse --width-content">
				<Navigate icon="file" label="Отправить" onclick={() => {}} />
			</section>
		{/if}
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

		&[disabled] {
			background-color: var(--color-foreground-shade);
			border: none;
			outline: none;
		}
	}
</style>
