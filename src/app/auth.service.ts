export class AuthService {

	isLoggedIn = false;

	isAuthenticated() {

		const promise = new Promise(
			(resolve, reject) => {
				setTimeout(() => {
					resolve(this.isLoggedIn)
				}, 850)
			}
		);

		return promise;
	}

	login() {

		this.isLoggedIn = true;
	}

	logout() {

		this.isLoggedIn = false;
	}

}