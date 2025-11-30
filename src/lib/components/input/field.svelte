<script lang="ts">
	import Icon from '$lib/components/icon.svelte';

	let { icon, type, placeholder, label } = $props();

	let value = $state('');
</script>

{#snippet field()}
	<div class="input-field --flex-row --gaps">
		<Icon {icon} />
		<span class="vbar"></span>
		<input {type} {placeholder} autocomplete="off" bind:value />
	</div>
{/snippet}

{#if label.length === 0}
	{@render field()}
{:else}
	<div class="--flex-col --gaps-tiny">
		<span class="label --font-rubik">{label}</span>
		{@render field()}
	</div>
{/if}

<style>
	.input-field {
		position: relative;
		height: 2rem;
		background-color: var(--color-foreground-shade);
		border-radius: 0.5rem;

		:global svg {
			position: absolute;
			left: 1rem;
			top: 0.5rem;
		}

		:global .vbar {
			position: absolute;
			left: 3rem;
			top: 0.5rem;
		}

		input {
			padding: 0 1rem 0 4rem;
			border: none;
			flex: 1;
			height: 100%;
			background-color: transparent;
			font-weight: 500;
			font-size: 1rem;
			outline: none;
			border-radius: 0.5rem;

			&:focus {
				outline: 2px solid var(--color-text);
			}
		}
	}

	.label {
		font-size: 0.75rem;
		font-weight: 600;
	}
</style>
