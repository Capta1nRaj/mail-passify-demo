'use client'

const { default: axios } = require("axios")
const { getCookie } = require("cookies-next")

async function sessionCheck(userName, userToken, userId) {
    const data = { userName, userToken, userId }
    const response = await axios.post('http://localhost:3000/api/sessionCheck', data)
    return response.data.response;
}

module.exports = sessionCheck