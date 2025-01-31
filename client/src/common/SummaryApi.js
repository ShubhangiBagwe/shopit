export const baseURL = "http://localhost:8000"

const Summary = {
    register: {
        url: '/api/user/register',
        method: 'post'
    },
    login: {
        url: '/api/user/login',
        method: 'post'
    }
}

export default Summary