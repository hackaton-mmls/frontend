<script lang="ts">
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
	<section class="--width-content">
		<Dropzone
			accept={['application/pdf']}
			maxSize={10 * 1024 * 1024 * 1024}
			multiple={true}
			onDrop={handleFilesSelect}
		/>
	</section>
	{#each files.acceptedFiles as file}
		<section class="uploaded-file --apply-foreground --width-content-padded">
			<span>{file.name}</span>
			<ProgressBar percentage={100} />
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
