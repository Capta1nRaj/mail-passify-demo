'use client'

const { default: axios } = require("axios")
const { getCookie } = require("cookies-next")

const userName = getCookie('userName')
const userToken = getCookie('token')
const userId = getCookie('id')

async function autoSignInCheck() {
    const data = { userName, userToken, userId }
    const response = await axios.post('http://localhost:8000/autoSignIn', data)
    return response.data.response;
}

module.exports = autoSignInCheck 