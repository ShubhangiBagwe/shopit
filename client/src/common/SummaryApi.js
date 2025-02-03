export const baseURL = "http://localhost:8000"

const Summary = {
    register: {
        url: '/api/user/register',
        method: 'post'
    },
    login: {
        url: '/api/user/login',
        method: 'post'
    },
    forgot_password: {
        url: '/api/user/forgot-password',
        method: 'put'
    },
    forgot_password_otp_verification: {
        url: 'api/user/verify-forgot-password-otp',
        method: 'put'
    }
}

export default Summary