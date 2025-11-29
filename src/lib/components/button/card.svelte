<script lang="ts">
	import Icon from '$lib/components/icon.svelte';

	let { children, icon, label, topic, is_completed } = $props();
</script>

<button data-completed={is_completed}>
	<Icon {icon} />
	<span class="--font-rubik">{label}</span>
	{#if topic.length !== 0}
		<span class="bullet"></span>
		<span class="--font-rubik">{topic}</span>
	{/if}
	<span class="gap"></span>
	{@render children()}
	<Icon icon="angle_right" />
</button>

<style>
	button {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		font-size: 1rem;
		background-color: var(--color-foreground);
		border: none;
		cursor: pointer;

		&:not(:last-child) {
			border-bottom: 2px solid var(--color-foreground-shade);
		}

		& > span {
			font-weight: 600;
		}

		&:hover {
			background-color: var(--color-foreground-hover);
		}

		&[data-completed='true'] {
			color: var(--color-inactive);

			.bullet {
				background-color: var(--color-inactive);
			}
		}
	}
</style>
