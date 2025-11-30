<script>
	import Main from '$lib/components/layout/main.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusDone from '$lib/components/status/done.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
	import Icon from '$lib/components/icon.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';
	import { API, getTaskIcon } from '$lib/api';
	import Spinner from '$lib/components/spinner.svelte';
	import { goto } from '$app/navigation';
</script>

<Main>
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
									{#if task.is_submitted}
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
												<StatusPending />
											{:else}
												<StatusDone grade={task.grade} />
											{/if}
										</CardButton>
									{/if}
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
	.tasks {
		padding: 0.5rem;
	}
</style>
