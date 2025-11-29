<script>
	import { goto } from '$app/navigation';
	import ButtonNavigate from '$lib/components/button/navigate.svelte';
	import InputField from '$lib/components/input/field.svelte';
</script>

<main>
	<h1>Вход в систему как <span style="color: var(--color-blue);">студент</span></h1>
	<section>
		<InputField icon="at_sign" type="text" placeholder="student@example.edu" label="Почта" />
		<InputField icon="key" type="password" placeholder="Пароль" label="Пароль" />
		<div>
			<ButtonNavigate
				icon=""
				label="Войти"
				onclick={() => {
					goto('/');
				}}
			/>
		</div>
	</section>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 1rem;
		background-color: var(--color-foreground);
		padding: 1rem;
		border-radius: 1rem;
		color: var(--color-text);

		div {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}
	}
</style>
