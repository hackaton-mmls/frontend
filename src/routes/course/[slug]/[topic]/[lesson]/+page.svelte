<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusNormal from '$lib/components/status/normal.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
	import StatusFilesize from '$lib/components/status/filesize.svelte';

	let { data } = $props();
</script>

<nav class="--font-rubik --flex-row --pad --gaps">
	<Icon icon="symbol_hashtag" />
	<a href="/course/{data.slug}">{data.course_name}</a>
	<Icon icon="angle_right" />
	<a href="/course/{data.slug}/{data.topic}">{data.topic_name}</a>
	<Icon icon="angle_right" />
	<a href="/course/{data.slug}/{data.topic}/{data.lesson}">{data.lesson_name}</a>
</nav>

<main class="--flex-col-center --gaps">
	<header class="--flex-col --width-content">
		<h1 class="--font-rubik">{data.lesson_name}</h1>
		<h3>
			{data.timestamp.toLocaleString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })}
		</h3>
	</header>

	<video
		controls
		src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
		poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
		width="800"
		class="--width-content"
	>
		<track kind="captions" />
		Sorry, your browser doesn't support embedded videos, but don't worry, you can
		<a href="https://archive.org/details/BigBuckBunny_124">download it</a>
		and watch it with your favorite video player!
	</video>

	<section class="fieldset --flex-col --width-content">
		<header class="--font-rubik --apply-block">
			<Icon icon="connections" />
			<span>Материалы к уроку</span>
		</header>
		<section class="--flex-col">
			<CardButton icon="picture" label="Презентация" topic="" is_completed="false">
				<StatusFilesize filesize={1.2 * 1024 * 1024} />
			</CardButton>
			<CardButton
				icon="popup"
				label="yandex.ru/some_additional_material"
				topic=""
				is_completed="false"
			>
				{#snippet children()}{/snippet}
			</CardButton>
			<CardButton
				icon="popup"
				label="yandex.ru/some_additional_material"
				topic=""
				is_completed="false"
			>
				{#snippet children()}{/snippet}
			</CardButton>
		</section>
	</section>
	<section class="fieldset --flex-col --width-content">
		<header class="--font-rubik --apply-block">
			<Icon icon="folder_zip" />
			<span>Домашние задания</span>
		</header>
		<section class="--flex-col">
			<CardButton icon="file" label="Тест" topic="Тема 1: «Урок 1»" is_completed="false">
				<StatusNormal timestamp={new Date(2025, 11, 15)} />
			</CardButton>
			<CardButton icon="file" label="Тест" topic="Тема 4: «Урок 1»" is_completed="true">
				<StatusPending />
			</CardButton>
		</section>
	</section>
</main>

<style>
	main > header {
		h1,
		h3 {
			margin: 0;
		}

		h1 {
			font-size: 2rem;
		}

		h3 {
			opacity: 0.5;
			font-size: 1rem;
		}
	}

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
