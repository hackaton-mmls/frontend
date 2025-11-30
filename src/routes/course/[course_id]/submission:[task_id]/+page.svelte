<script lang="ts">
	import { getTimeDiffString } from '$lib';
	import type { SubmissionTask } from '$lib/api';
	import Navigate from '$lib/components/button/navigate.svelte';
	import Icon from '$lib/components/icon.svelte';
	import Main from '$lib/components/layout/main.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';
	import Dropzone, { type DropzoneEvent, type RejectedFile } from 'svelte-dropzone-runes';

	let { data } = $props();

	let files = $state({
		acceptedFiles: [] as File[],
		rejectedFiles: [] as RejectedFile<File>[]
	});

	function handleFilesSelect(event: DropzoneEvent<File>) {
		files = event;
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

<header class="tracker --flex-row --pad-even --gaps-double">
	<span class="gap"></span>
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
	<section class="--width-content">
		<Dropzone
			accept={(data.task.task as SubmissionTask).allowed}
			maxSize={10 * 1024 * 1024 * 1024}
			multiple={true}
			onDrop={handleFilesSelect}
		/>
	</section>
	{#each files.acceptedFiles as file}
		<section class="uploaded-file --apply-foreground --width-content-padded">
			<span>{file.name}</span>
			<ProgressBar percentage={0} />
		</section>
	{/each}
	{#if files.acceptedFiles.length > 0}
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

	.uploaded-file {
		flex-direction: row;
	}
</style>
