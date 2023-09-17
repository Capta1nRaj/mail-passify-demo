const axios = require('axios');
const { getCookie } = require('cookies-next');

async function autoSignInCheck() {

    const userName = getCookie('userName');
    const token = getCookie('token');

    const data = { userName, token };
    const response = await axios.post('http://localhost:8000/autoSignIn', data);

    if (response.data.response.status === 202) {
        console.log(response.data.response);
        return true;
    } else {
        console.log(response.data.response);
        return false;
    }

}

module.exports = autoSignInCheck;