<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusAuto from '$lib/components/status/auto.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
	import StatusDone from '$lib/components/status/done.svelte';
	import StatusFilesize from '$lib/components/status/filesize.svelte';
	import { goto } from '$app/navigation';
	import Main from '$lib/components/layout/main.svelte';
	import { API, getTaskIcon } from '$lib/api.js';
	import Spinner from '$lib/components/spinner.svelte';

	let { data } = $props();
</script>

<nav class="--font-rubik --flex-row --pad --gaps">
	<Icon icon="symbol_hashtag" />
	<a href="/course/{data.course.id}">{data.course.name}</a>
	<Icon icon="angle_right" />
	<a href="/course/{data.course.id}/{data.topic.id}">{data.topic.name}</a>
	<Icon icon="angle_right" />
	<a href="/course/{data.course.id}/{data.topic.id}/{data.lesson.id}">{data.lesson.name}</a>
</nav>

<Main>
	<header class="--flex-col --width-content">
		<h1 class="--font-rubik">{data.lesson.name}</h1>
		<h3>
			{data.lesson.timestamp.toLocaleString('ru-RU', {
				day: '2-digit',
				month: 'long',
				year: 'numeric'
			})}
		</h3>
	</header>

	{#if data.lesson.video != null}
		<video controls src={data.lesson.video} width="800" height="450" class="--width-content">
			<track kind="captions" />
			Sorry, your browser doesn't support embedded videos, but don't worry, you can
			<a href={data.lesson.video}>download it</a>
			and watch it with your favorite video player!
		</video>
	{/if}

	{#if data.lesson.contents?.length != 0}
		<p class="--width-content">
			{data.lesson.contents}
		</p>
	{/if}

	<section class="fieldset --flex-col --width-content">
		<header class="--font-rubik --apply-block">
			<Icon icon="connections" />
			<span>Материалы к уроку</span>
		</header>
		<section class="--flex-col">
			{#if data.lesson.attachments.length === 0}
				<section class="--apply-block" style="opacity: 0.25;">Пусто</section>
			{:else}
				{#each data.lesson.attachments as attachment}
					{#if attachment.is_download}
						<CardButton
							icon="picture"
							label={attachment.name}
							topic=""
							is_completed="false"
							onclick={() => {
								window.location.assign(attachment.url);
							}}
						>
							<StatusFilesize filesize={attachment.file_size || 0} />
						</CardButton>
					{:else}
						<CardButton
							icon="popup"
							label={attachment.name}
							topic=""
							is_completed="false"
							onclick={() => {
								window.location.assign(attachment.url);
							}}
						>
							{#snippet children()}{/snippet}
						</CardButton>
					{/if}
				{/each}
			{/if}
		</section>
	</section>
	<section class="fieldset --flex-col --width-content">
		<header class="--font-rubik --apply-block">
			<Icon icon="folder_zip" />
			<span>Домашние задания</span>
		</header>
		<section class="--flex-col">
			{#await API.getLessonTasks(data.course.id, data.lesson.id)}
				<Spinner />
			{:then tasks}
				{#if tasks.length === 0}
					<section class="--apply-block" style="opacity: 0.25;">Пусто</section>
				{:else}
					{#each tasks as task}
						<CardButton
							icon={getTaskIcon(task.type)}
							label={task.name}
							topic={task.details}
							is_completed={task.is_submitted}
							onclick={() => {
								goto(`/course/${data.course.id}/${task.type}:${task.id}`);
							}}
						>
							{#if task.is_submitted}
								{#if task.grade == null}
									<StatusPending />
								{:else}
									<StatusDone grade={task.grade} />
								{/if}
							{:else}
								<StatusAuto timestamp={task.timestamp} />
							{/if}
						</CardButton>
					{/each}
				{/if}
			{:catch error}
				<span class="error-label">
					<Icon icon="exclamation" />
					Ошибка: {error.message}
				</span>
			{/await}
		</section>
	</section>
</Main>

<style>
	video {
		background-color: black;
		border-radius: 0.5rem;
	}

	.fieldset {
		header {
			font-weight: 500;
		}

		section {
			border-radius: 1rem;
			overflow: hidden;
		}
	}
</style>
