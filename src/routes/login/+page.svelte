<script>
	import { goto } from '$app/navigation';
	import ButtonNavigate from '$lib/components/button/navigate.svelte';
	import InputField from '$lib/components/input/field.svelte';
	import Main from '$lib/components/layout/main.svelte';
</script>

<Main>
	<h1>Вход в систему как <span style="color: var(--color-blue);">студент</span></h1>
	<section class="--apply-foreground">
		<InputField icon="at_sign" type="text" placeholder="student@example.edu" label="Почта" />
		<InputField icon="key" type="password" placeholder="Пароль" label="Пароль" />
		<div class="--flex-row-reverse">
			<ButtonNavigate
				icon=""
				label="Войти"
				onclick={() => {
					goto('/');
				}}
			/>
		</div>
	</section>
</Main>
