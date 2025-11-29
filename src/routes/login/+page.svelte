<script lang="ts">
	import '../../app.css';

	let email = $state('');
	let password = $state('');

	function submit() {
		alert(email + ' ' + password);
	}
</script>

<form action="" method="dialog" class="hero bg-base-200 min-h-screen" onsubmit={submit}>
	<div class="hero-content flex-col lg:flex-row">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Вход в аккаунт <span class="text-primary">студента</span></h1>
			<p class="py-6">Аккаунт, предоставленный вам вашей школой</p>
		</div>
		<div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
			<div class="card-body">
				<fieldset class="fieldset">
					<label class="fieldset">
						<span class="label">Почта:</span>
						<input
							id="in-email"
							type="email"
							class="input validator"
							placeholder="student@example.edu"
							required
							bind:value={email}
						/>
						<div class="validator-hint mt-0 hidden">Введите действительный адресс</div>
					</label>
					<label class="fieldset">
						<span class="label">Пароль:</span>
						<input
							id="in-password"
							type="password"
							class="input validator"
							placeholder="Пароль"
							minlength="8"
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{'{'}8,{'}'}"
							required
							bind:value={password}
						/>
						<p class="validator-hint mt-0 hidden">
							Must be more than 8 characters, including
							<br />At least one number
							<br />At least one lowercase letter
							<br />At least one uppercase letter
						</p>
					</label>
					<!-- TODO: Add an actual link or delete this -->
					<div><a class="link link-hover" href=".">Забыли пароль?</a></div>
					<button type="submit" class="btn btn-primary mt-4">Войти</button>
				</fieldset>
			</div>
		</div>
	</div>
</form>
