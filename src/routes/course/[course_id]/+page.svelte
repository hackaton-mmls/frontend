<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import TabContainer from '$lib/components/container/tabs.svelte';
	import InputField from '$lib/components/input/field.svelte';
	import Accordion from '$lib/components/container/accordion.svelte';
	import NavigateButton from '$lib/components/button/navigate.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusAuto from '$lib/components/status/auto.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
	import StatusDone from '$lib/components/status/done.svelte';
	import { goto } from '$app/navigation';
	import Main from '$lib/components/layout/main.svelte';
	import { API, getTaskIcon } from '$lib/api.js';
	import Spinner from '$lib/components/spinner.svelte';

	let { data } = $props();
</script>

<nav class="--font-rubik --flex-row --pad --gaps">
	<Icon icon="symbol_hashtag" />
	<a href="/course/{data.course.id}">{data.course.name}</a>
</nav>

<Main>
	<TabContainer
		left_tab={{ icon: 'scroll', name: 'Уроки' }}
		right_tab={{ icon: 'folder_zip', name: 'Домашние задания' }}
	>
		{#snippet left()}
			<div class="--requires-padding">
				<!-- TODO: Make it functional -->
				<InputField icon="search" type="text" placeholder="Поиск..." label="" />
			</div>
			{#await API.getCourseTopics(data.course.id)}
				<Spinner />
			{:then topics}
				{#each topics as topic}
					<Accordion icon="folder" title={topic.name}>
						{#if topic.lessons.length === 0}
							Пусто
						{:else}
							{#each topic.lessons as lesson}
								<NavigateButton
									icon="text"
									label={lesson.name}
									onclick={() => goto(`/course/${data.course.id}/${topic.id}/${lesson.id}`)}
								/>
							{/each}
						{/if}
					</Accordion>
				{/each}
			{:catch error}
				<span class="error-label">
					<Icon icon="exclamation" />
					Ошибка: {error.message}
				</span>
			{/await}
		{/snippet}
		{#snippet right()}
			{#await API.getCourseTasks(data.course.id)}
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
							{#if task.grade == null}
								{#if task.is_submitted}
									<StatusPending />
								{:else}
									<StatusAuto timestamp={task.timestamp} />
								{/if}
							{:else}
								<StatusDone grade={task.grade} />
							{/if}
						</CardButton>
					{/each}
				{/if}
			{/await}
		{/snippet}
	</TabContainer>
</Main>
