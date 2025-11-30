<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import Main from '$lib/components/layout/main.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusAuto from '$lib/components/status/auto.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
	import StatusDone from '$lib/components/status/done.svelte';
	import { API, getTaskIcon, getUserFullName } from '$lib/api.js';
	import Spinner from '$lib/components/spinner.svelte';
	import { goto } from '$app/navigation';

	let { data } = $props();
</script>

<Main>
	<section class="--apply-foreground --width-content-padded">
		<header class="--flex-row --gaps">
			<div class="avatar --flex-row --font-rubik">{getUserFullName(data.user).charAt(0)}</div>
			<div class="--flex-col" style="width: 50%;">
				<h2 class="--font-rubik">Иван Иванов</h2>
				<div class="--flex-row --gaps-half">
					<span>Успеваемость:</span>
					{#await API.getUserPerformance()}
						<Spinner />
					{:then performance}
						<ProgressBar percentage={performance} />
					{:catch error}
						<span class="error-label">
							<Icon icon="exclamation" />
							Ошибка: {error.message}
						</span>
					{/await}
				</div>
			</div>
		</header>
	</section>

	{#await API.getCourses()}
		<Spinner />
	{:then courses}
		{#each courses as course}
			<div class="--flex-col">
				<header class="--apply-block">
					<Icon icon="symbol_hashtag" />
					<a class="subject-label --font-rubik" href="/course/{course.id}">{course.name}</a>
					<span class="gap"></span>
					<ProgressBar percentage={course.performance} is_inverted={true} />
				</header>
				<section class="tasks --apply-foreground --width-content">
					{#await API.getCourseTasks(course.id)}
						<Spinner />
					{:then tasks}
						{#if tasks.length === 0}
							<section class="--apply-block" style="opacity: 0.25;">Пусто</section>
						{:else}
							<section class="--flex-col">
								{#each tasks as task}
									<CardButton
										icon={getTaskIcon(task.type)}
										label={task.name}
										topic={task.details}
										is_completed={task.is_submitted}
										onclick={() => {
											goto(`/course/${course.id}/${task.type}:${task.id}`);
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
							</section>
						{/if}
					{:catch error}
						<span class="error-label">
							<Icon icon="exclamation" />
							Ошибка: {error.message}
						</span>
					{/await}
				</section>
			</div>
		{/each}
	{:catch error}
		<span class="error-label">
			<Icon icon="exclamation" />
			Ошибка: {error.message}
		</span>
	{/await}
</Main>

<style>
	h2 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.avatar {
		justify-content: center;
		width: 4rem;
		height: 4rem;
		border-radius: 100%;
		background-color: var(--color-text);
		color: var(--color-foreground);
		font-weight: 500;
		font-size: 2rem;
	}

	.tasks {
		padding: 0.25rem 0;
		border-radius: 1rem;
		overflow: hidden;
	}
</style>
