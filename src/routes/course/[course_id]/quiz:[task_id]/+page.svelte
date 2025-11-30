<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { addMinutes, getTimeDiffString } from '$lib';
	import type { QuizTask } from '$lib/api.js';
	import Navigate from '$lib/components/button/navigate.svelte';
	import Icon from '$lib/components/icon.svelte';
	import Main from '$lib/components/layout/main.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';

	let time = $state(new Date());
	let interval: any;
	onMount(() => {
		interval = setInterval(() => {
			time = new Date();
			// TODO: Handle running out of time
		}, 500);
	});
	onDestroy(() => {
		clearInterval(interval);
	});

	let { data } = $props();

	let in_progress = $state(false);
	let end_time = $state(new Date());

	function start() {
		in_progress = true;
		end_time = addMinutes(time, (data.task.task as QuizTask).duration_minutes);
	}
</script>

<nav class="--font-rubik --flex-row --pad --gaps">
	<Icon icon="symbol_hashtag" />
	<a href="/course/{data.course.id}">{data.course.name}</a>
	<Icon icon="angle_right" />
	<a href="?">Домашние задания</a>
	<Icon icon="angle_right" />
	<a href="?">{data.task.name} — {data.task.details}</a>
</nav>

{#if in_progress}
	<header class="tracker --flex-row --pad-even --gaps-double">
		<ProgressBar percentage={0} />
		<span class="--font-rubik --flex-row --gaps-half">
			<Icon icon="clock" />
			{getTimeDiffString(time, end_time)}
		</span>
	</header>

	<Main>
		<div class="--flex-col --width-content">
			<h1>{data.task.name}</h1>
			<h3>{data.task.details}</h3>
		</div>
		<section class="--apply-foreground --width-content">
			{#each (data.task.task as QuizTask).questions as question, index}
				<div class="options --flex-col --gaps-half">
					<header class="--flex-col">
						<h2 class="--font-rubik">{index + 1}. {question.label}</h2>
						<h4 class="--font-rubik">{question.points} балл(-а/-ов)</h4>
					</header>
					{#each question.options as option}
						<div class="--flex-row --gaps-half">
							<input
								id="{question.label.toLowerCase()}-{option.label.toLowerCase()}"
								type={question.allow_multiple ? 'checkbox' : 'radio'}
								name={question.label.toLowerCase()}
							/>
							<label for="{question.label.toLowerCase()}-{option.label.toLowerCase()}"
								>{option.label}</label
							>
						</div>
					{/each}
				</div>
				{#if index < (data.task.task as QuizTask).questions.length - 1}
					<span class="hbar"></span>
				{/if}
			{/each}
		</section>
		<section class="--flex-row-reverse --width-content">
			<Navigate icon="file" label="Отправить" onclick={() => {}} />
		</section>
	</Main>
{:else}
	<Main>
		{#if data.task.is_submitted}
			Submitted
		{:else}
			<section class="--flex-col --width-content">
				<h1>Начать тест?</h1>
				<p>
					После того как тест начат у Вас не будет возможности приостановить таймер. Убедитесь в
					качестве своего интернет соединения и доступности времени.
				</p>
				<div class="--flex-row-reverse">
					<Navigate icon="file" label="Начать" onclick={start} />
				</div>
			</section>
		{/if}
	</Main>
{/if}

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

	h2 {
		font-size: 1rem;
		font-weight: 600;
	}

	h4 {
		font-size: 0.75rem;
		font-weight: 600;
		opacity: 0.5;
	}
</style>
