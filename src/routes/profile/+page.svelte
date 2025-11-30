<script lang="ts">
	import { goto } from '$app/navigation';
	import NavigateButton from '$lib/components/button/navigate.svelte';
	import Main from '$lib/components/layout/main.svelte';
</script>

<Main>
	<NavigateButton
		icon="user"
		label="Выйти из аккаунта"
		onclick={() => {
			goto('/logout');
		}}
	/>
</Main>
