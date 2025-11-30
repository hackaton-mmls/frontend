<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import Main from '$lib/components/layout/main.svelte';
	import ProgressBar from '$lib/components/progress_bar.svelte';

	let { data } = $props();
</script>

<header class="tracker --flex-row --pad-even --gaps-double">
	<ProgressBar percentage={0} />
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
	<section class="--apply-foreground --width-content">
		<div class="options --flex-col --gaps-half">
			<header class="--flex-col">
				<h2 class="--font-rubik">1. Вопрос</h2>
				<h4 class="--font-rubik">2 балла</h4>
			</header>
			<div class="--flex-row --gaps-half">
				<input id="question1-answer1" type="radio" name="question1" />
				<label for="question1-answer1">Ответ 1</label>
			</div>
			<div class="--flex-row --gaps-half">
				<input id="question1-answer2" type="radio" name="question1" />
				<label for="question1-answer2">Ответ 2</label>
			</div>
			<div class="--flex-row --gaps-half">
				<input id="question1-answer3" type="radio" name="question1" />
				<label for="question1-answer3">Ответ 3</label>
			</div>
		</div>
		<span class="hbar"></span>
		<div class="options --flex-col --gaps-half">
			<header class="--flex-col">
				<h2 class="--font-rubik">2. Вопрос</h2>
				<h4 class="--font-rubik">2 балла</h4>
			</header>
			<div class="--flex-row --gaps-half">
				<input id="question2-answer1" type="checkbox" name="question2" />
				<label for="question2-answer1">Ответ 1</label>
			</div>
			<div class="--flex-row --gaps-half">
				<input id="question2-answer2" type="checkbox" name="question2" />
				<label for="question2-answer2">Ответ 2</label>
			</div>
			<div class="--flex-row --gaps-half">
				<input id="question2-answer3" type="checkbox" name="question2" />
				<label for="question2-answer3">Ответ 3</label>
			</div>
		</div>
		<span class="hbar"></span>
		<div class="options --flex-col --gaps-half">
			<header class="--flex-col">
				<h2 class="--font-rubik">3. Вопрос</h2>
				<h4 class="--font-rubik">2 балла</h4>
			</header>
			<table>
				<tbody>
					<tr>
						<td>Ответ 1</td>
						<td>
							<select>
								<option>—</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>Ответ 2</td>
						<td>
							<select>
								<option>—</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>Ответ 3</td>
						<td>
							<select>
								<option>—</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
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

	h2 {
		font-size: 1rem;
		font-weight: 600;
	}

	h4 {
		font-size: 0.75rem;
		font-weight: 600;
		opacity: 0.5;
	}

	table {
		width: max-content;
	}
</style>
