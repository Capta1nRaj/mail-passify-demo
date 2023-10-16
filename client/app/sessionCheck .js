'use client'

const { default: axios } = require("axios")
const { getCookie } = require("cookies-next")

async function sessionCheck(userName, userToken, userId) {
    const data = { userName, userToken, userId }
    const response = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/sessionCheck`, data)
    return response.data.response;
}

module.exports = sessionCheck