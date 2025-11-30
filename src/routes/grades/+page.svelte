<script>
	import Main from '$lib/components/layout/main.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusDone from '$lib/components/status/done.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
	import Icon from '$lib/components/icon.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';
</script>

<Main>
	<div class="--flex-col">
		<header class="--apply-block">
			<Icon icon="symbol_hashtag" />
			<a class="subject-label --font-rubik" href="/course/math">Математика</a>
			<span class="gap"></span>
			<ProgressBar percentage={85} is_inverted={true} />
		</header>
		<section class="tasks --apply-foreground --width-content">
			<section class="--flex-col">
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
					<span class="notification"></span>
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
			</section>
		</section>
	</div>

	<div class="--flex-col">
		<header class="--apply-block">
			<Icon icon="symbol_hashtag" />
			<a class="subject-label --font-rubik" href="/course/math">Математика</a>
			<span class="gap"></span>
			<ProgressBar percentage={85} is_inverted={true} />
		</header>
		<section class="tasks --apply-foreground --width-content">
			<section class="--flex-col">
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
			</section>
		</section>
	</div>
</Main>

<style>
	.notification {
		display: block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 100%;
		background-color: var(--color-notification);
		outline: 4px solid var(--color-foreground);
		margin-left: -1.5rem;
		margin-top: -1.5rem;
	}
</style>
