<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import TabContainer from '$lib/components/container/tabs.svelte';
	import InputField from '$lib/components/input/field.svelte';
	import Accordion from '$lib/components/container/accordion.svelte';
	import NavigateButton from '$lib/components/button/navigate.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusToday from '$lib/components/status/today.svelte';
	import StatusAlert from '$lib/components/status/alert.svelte';
	import StatusNormal from '$lib/components/status/normal.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
	import StatusDone from '$lib/components/status/done.svelte';
	import { goto } from '$app/navigation';
	import Main from '$lib/components/layout/main.svelte';

	let { data } = $props();
</script>

<nav class="--font-rubik --flex-row --pad --gaps">
	<Icon icon="symbol_hashtag" />
	<a href="/course/{data.slug}">{data.course_name}</a>
</nav>

<Main>
	<TabContainer
		left_tab={{ icon: 'scroll', name: 'Уроки' }}
		right_tab={{ icon: 'folder_zip', name: 'Домашние задания' }}
	>
		{#snippet left()}
			<div class="--requires-padding">
				<InputField icon="search" type="text" placeholder="Поиск..." label="" />
			</div>
			<Accordion icon="folder" title="Тема 1">Пусто</Accordion>
			<Accordion icon="folder" title="Тема 2">
				<NavigateButton
					icon="play"
					label="Урок 1"
					onclick={() => goto(`/course/${data.slug}/topic_1/lesson_01`)}
				/>
				<NavigateButton icon="play" label="Урок 2" onclick={() => {}} />
				<NavigateButton icon="text" label="Урок 3" onclick={() => {}} />
				<NavigateButton icon="picture" label="Урок 4" onclick={() => {}} />
			</Accordion>
			<Accordion icon="folder" title="Тема 3">Пусто</Accordion>
			<Accordion icon="folder" title="Тема 4">Пусто</Accordion>
		{/snippet}
		{#snippet right()}
			<CardButton
				icon="pencil"
				label="Сочинение"
				topic="Тема 2: «Урок 1»"
				is_completed="false"
				onclick={() => {}}
			>
				<StatusToday timestamp={new Date()} />
			</CardButton>
			<CardButton
				icon="picture"
				label="Презентация"
				topic="Тема 3: «Урок 1»"
				is_completed="false"
				onclick={() => {}}
			>
				<StatusAlert timestamp={new Date(2025, 11, 1)} />
			</CardButton>
			<CardButton
				icon="file"
				label="Тест"
				topic="Тема 1: «Урок 1»"
				is_completed="false"
				onclick={() => {}}
			>
				<StatusNormal timestamp={new Date(2025, 11, 15)} />
			</CardButton>
			<CardButton
				icon="file"
				label="Тест"
				topic="Тема 4: «Урок 1»"
				is_completed="true"
				onclick={() => {}}
			>
				<StatusPending />
			</CardButton>
			<CardButton
				icon="file"
				label="Тест"
				topic="Тема 4: «Урок 1»"
				is_completed="true"
				onclick={() => {}}
			>
				<StatusDone result={4} />
			</CardButton>
			<CardButton
				icon="file"
				label="Тест"
				topic="Тема 4: «Урок 1»"
				is_completed="true"
				onclick={() => {}}
			>
				<StatusDone result={5} />
			</CardButton>
		{/snippet}
	</TabContainer>
</Main>
