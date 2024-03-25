import http from "../utils/request";

export function login() {
    const form = {
        email: 'admin@kth.se',
        password: 'password'
    }

    return new Promise((resolve, reject) => {
        http.post('/api/login', form)
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    })
}