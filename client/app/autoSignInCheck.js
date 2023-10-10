'use client'

const { default: axios } = require("axios")
const { getCookie } = require("cookies-next")

async function autoSignInCheck(userName, userToken, userId) {
    const data = { userName, userToken, userId }
    const response = await axios.post('http://localhost:8000/autoSignIn', data)
    return response.data.response;
}

module.exports = autoSignInCheck 