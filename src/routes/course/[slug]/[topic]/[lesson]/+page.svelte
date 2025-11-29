<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusNormal from '$lib/components/status/normal.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
	import StatusFilesize from '$lib/components/status/filesize.svelte';

	let { data } = $props();
</script>

<nav class="--font-rubik">
	<Icon icon="symbol_hashtag" />
	<a href="/course/{data.slug}">{data.course_name}</a>
	<Icon icon="angle_right" />
	<a href="/course/{data.slug}/{data.topic}">{data.topic_name}</a>
	<Icon icon="angle_right" />
	<a href="/course/{data.slug}/{data.topic}/{data.lesson}">{data.lesson_name}</a>
</nav>

<main>
	<header>
		<h1 class="--font-rubik">{data.lesson_name}</h1>
		<h3>
			{data.timestamp.toLocaleString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })}
		</h3>
	</header>

	<video src="https://example.com">
		<track kind="captions" />
	</video>

	<section class="fieldset">
		<header class="--font-rubik">
			<Icon icon="connections" />
			<span>Материалы к уроку</span>
		</header>
		<section>
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
	<section class="fieldset">
		<header class="--font-rubik">
			<Icon icon="folder_zip" />
			<span>Домашние задания</span>
		</header>
		<section>
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
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 50rem;

		h1,
		h3 {
			margin: 0;
			font-size: 2rem;
		}

		h3 {
			opacity: 0.5;
			font-size: 1rem;
		}
	}

	video {
		width: 50rem;
		background-color: black;
		border-radius: 0.5rem;
	}

	.fieldset {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 50rem;

		header {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			padding: 0.5rem 1rem;
			font-weight: 500;
		}

		section {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			border-radius: 1rem;
			overflow: hidden;
		}
	}
</style>
