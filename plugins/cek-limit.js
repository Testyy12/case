const axios = require('axios')

let handler = async (m, { melda, text, reply }) => {
    reply(`— infokan`) 
}

handler.command = ["limit", "cek-limit"];
handler.owner = true

module.exports = handler;