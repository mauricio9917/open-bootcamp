import APIRequest from '../utils/config/axios.config'


export default function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500
        }
    }) // https://randomuser.me/api/
}

