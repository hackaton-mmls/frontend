<script lang="ts">
	import { page } from '$app/state';
	import Main from '$lib/components/layout/main.svelte';
</script>

<Main>
	<h1 class="--font-rubik">{page.status}</h1>
	<span>{page.error?.message}</span>
</Main>

<style>
	h1 {
		font-size: 6rem;
	}

	span {
		font-size: 1rem;
	}
</style>
