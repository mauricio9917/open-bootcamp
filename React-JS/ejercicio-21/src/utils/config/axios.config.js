import axios from 'axios'

// Default config for axios

export default axios.create (
    {
        baseURL: 'https://api.chucknorris.io',
        // baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        timeOut: 5000
    }
)