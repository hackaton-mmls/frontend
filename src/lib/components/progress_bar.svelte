<script lang="ts">
	let { percentage, is_inverted = false } = $props();
</script>

<div class="progress-bar --flex-row --gaps-half" data-inverted={is_inverted}>
	<span class="indicator">
		<span class="fill" style="width: {percentage}%"></span>
	</span>
	<span class="label --font-rubik">{percentage}%</span>
</div>

<style>
	.indicator {
		display: flex;
		background-color: var(--color-foreground-shade);
		min-width: 3rem;
		height: 0.5rem;
		flex: 1;
		border-radius: 1rem;
	}

	.fill {
		background-color: var(--color-text);
		height: 100%;
		border-radius: 1rem;
	}

	.label {
		font-weight: 500;
	}

	.progress-bar {
		flex: 1;

		&[data-inverted='true'] {
			.indicator {
				background-color: var(--color-background-highlight);
			}

			.fill {
				background-color: var(--color-foreground);
			}
		}
	}
</style>
