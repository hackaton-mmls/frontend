<script lang="ts">
	import { USER } from '$lib';
	import Main from '$lib/components/layout/main.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';
</script>

<Main>
	<section class="--apply-foreground --width-content">
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
	<a href="/course/math">Go to Math</a>
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
</style>
