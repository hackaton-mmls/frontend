<script lang="ts">
	import { USER } from '$lib';
	import Icon from '$lib/components/icon.svelte';
	import Main from '$lib/components/layout/main.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';
	import CardButton from '$lib/components/button/card.svelte';
	import StatusNormal from '$lib/components/status/normal.svelte';
	import StatusPending from '$lib/components/status/pending.svelte';
</script>

<Main>
	<section class="--apply-foreground --width-content-padded">
		<header class="--flex-row --gaps">
			<div class="avatar --flex-row --font-rubik">{USER.full_name().charAt(0)}</div>
			<div class="--flex-col" style="width: 50%;">
				<h2 class="--font-rubik">Иван Иванов</h2>
				<div class="--flex-row --gaps-half">
					<span>Успеваемость:</span>
					<ProgressBar percentage={85} />
				</div>
			</div>
		</header>
	</section>

	<div class="--flex-col">
		<header class="--apply-block">
			<Icon icon="symbol_hashtag" />
			<a class="label --font-rubik" href="/course/math">Математика</a>
			<span class="gap"></span>
			<ProgressBar percentage={85} is_inverted={true} />
		</header>
		<section class="tasks --apply-foreground --width-content">
			<section class="--flex-col">
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
			</section>
		</section>
	</div>

	<div class="--flex-col">
		<header class="--apply-block">
			<Icon icon="symbol_hashtag" />
			<a class="label --font-rubik" href="/course/basic">Базовый Курс</a>
			<span class="gap"></span>
			<ProgressBar percentage={100} is_inverted={true} />
		</header>
		<section class="tasks --apply-foreground --width-content">
			<section class="--apply-block" style="opacity: 0.25;">Пусто</section>
		</section>
	</div>
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

	.label {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		color: inherit;
		font-weight: 500;
		cursor: pointer;

		&:hover {
			color: var(--color-blue);
		}
	}
</style>
