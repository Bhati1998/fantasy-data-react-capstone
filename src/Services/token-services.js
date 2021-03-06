import config from '../config'
const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.API_ENDPOINT.TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.API_ENDPOINT.TOKEN_KEY)
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.API_ENDPOINT.TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(email, password) {
        return window.btoa(`${email}:${password}`)
    },
    saveUserId(userId) {
        return window.sessionStorage.setItem('user_id', userId);
    },
    getUserId(user_id) {
        return window.sessionStorage.getItem('user_id', user_id)
    }
}

export default TokenService