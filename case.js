require('./config')
const {
smsg, getGroupAdmins, sendLayanan, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, RemeldaectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DismeldaectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, useMultiFileAuthState, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const path = require('path')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const { toPTT, toAudio } = require("./lib/converter")
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");


const _cmd = JSON.parse(fs.readFileSync('./lib/database/command.json'));
const _cmdUser = JSON.parse(fs.readFileSync('./lib/database/commandUser.json'));
const { addCountCmd, getPosiCmdUser, addCountCmdUser } = require('./temporary/helpers/command')

const db_saweria = require('./lib/saweria.json')
const { Saweria } = require('./lib/saweria.js')
const { OrderKuota } = require('./lib/Orderkuota')
const Pay = new Saweria(db_saweria)
const OrkutPay = new OrderKuota()
 
//Base
module.exports = melda = async (melda, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
var isAuthor = global.ownNumb.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0])
const botNumber = await melda.decodeJid(melda.user.id)
const globalelit = `${global.ownNumb}@s.whatsapp.net`
const isOwner = globalelit.includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const isCreator = [botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
// Group
const groupMetadata = m.isGroup ? await melda.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
// Akses

// Default gateway configuration
let activeGateway = 'saweria' // Dapat diubah ke 'orderkuota'

// Balance management system
const balancePath = './datasaldo/balance.json'
const tempPath = './temp'

// Inisialisasi folder dan file yang dibutuhkan
function initializeSystem() {
    // Buat folder database jika belum ada
    if (!fs.existsSync('./datasaldo')) {
        fs.mkdirSync('./datasaldo', { recursive: true })
    }
    
    // Buat folder temp jika belum ada
    if (!fs.existsSync(tempPath)) {
        fs.mkdirSync(tempPath, { recursive: true })
    }
    
    // Inisialisasi file balance jika belum ada
    if (!fs.existsSync(balancePath)) {
        fs.writeFileSync(balancePath, JSON.stringify({}, null, 2))
    }
}

// Fungsi manajemen saldo
function getBalance(userId) {
    const balanceDb = JSON.parse(fs.readFileSync(balancePath))
    return balanceDb[userId] || 0
}

function updateBalance(userId, amount) {
    const balanceDb = JSON.parse(fs.readFileSync(balancePath))
    balanceDb[userId] = (balanceDb[userId] || 0) + amount
    fs.writeFileSync(balancePath, JSON.stringify(balanceDb, null, 2))
    return balanceDb[userId]
}

// Format angka ke rupiah
function formatRupiah(number) {
    return number.toLocaleString('id-ID')
}

// Inisialisasi sistem saat bot start
initializeSystem()

// Command handling
const depositHandler = {
    // Command deposit
    async deposit(m, text) {
        if (m.isGroup) return m.reply("Deposit hanya bisa dilakukan di private chat")

        const filePath = `${tempPath}/${m.sender.split("@")[0]}.json`
        if (fs.existsSync(filePath)) {
            return m.reply("Masih ada transaksi yang belum diselesaikan. Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
        }

        const nominal = Number(text)
        if (!nominal || nominal <= 0) {
            return m.reply("Nominal tidak valid. Harap masukkan jumlah yang benar, contoh: *.deposit* 5000")
        }

        try {
            const expirationTime = new Date(Date.now() + 10 * 60 * 1000)
            const formattedTime = expirationTime.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })

            let paymentResponse
            let paymentDetails

            if (activeGateway === 'saweria') {
                paymentResponse = await Pay.createPayment(nominal, "Deposit Saldo")
                
                if (!paymentResponse.status) {
                    return m.reply(`❌ Terjadi kesalahan saat membuat pembayaran:\n${paymentResponse.msg}`)
                }

                // Simpan data transaksi
                fs.writeFileSync(filePath, JSON.stringify({
                    gateway: 'saweria',
                    number: m.sender,
                    id: paymentResponse.data.id,
                    amount: nominal,
                    expiredAt: expirationTime.toISOString()
                }, null, 2))

                paymentDetails = `
📄 *INFO PEMBAYARAN DEPOSIT*

💰 *Total*: Rp ${formatRupiah(nominal)}
📆 *Batas Waktu*: ${formattedTime} WIB
🆔 *ID Pembayaran*: ${paymentResponse.data.id}
🏧 *Gateway*: SAWERIA

📌 *Catatan*: 
1️⃣ QR berlaku untuk 1 kali transfer
2️⃣ QR akan kedaluwarsa dalam 10 menit
3️⃣ Tunggu beberapa saat hingga status diperbarui otomatis

🛑 Ketik *.batalbeli* untuk membatalkan`

                await m.reply({ 
                    image: Buffer.from(paymentResponse.data.qr_image.split(",")[1], "base64"),
                    caption: paymentDetails 
                })

            } else {
                paymentResponse = await OrkutPay.createPayment(nominal)
                
                if (!paymentResponse) {
                    return m.reply("❌ Terjadi kesalahan saat membuat pembayaran OrderKuota")
                }

                // Simpan data transaksi
                fs.writeFileSync(filePath, JSON.stringify({
                    gateway: 'orderkuota',
                    number: m.sender,
                    amount: nominal,
                    expiredAt: expirationTime.toISOString()
                }, null, 2))

                paymentDetails = `
📄 *INFO PEMBAYARAN DEPOSIT*

💰 *Total*: Rp ${formatRupiah(nominal)}
📆 *Batas Waktu*: ${formattedTime} WIB
🏧 *Gateway*: ORDERKUOTA

📌 *Catatan*: 
1️⃣ Pembayaran berlaku untuk 1 kali transfer
2️⃣ Pembayaran akan kedaluwarsa dalam 10 menit
3️⃣ Tunggu beberapa saat hingga status diperbarui otomatis

🛑 Ketik *.batalbeli* untuk membatalkan`

                await m.reply({ text: paymentDetails })
            }

            // Proses pengecekan pembayaran
            let status = false
            const maxAttempts = 600 // 10 menit
            let attempts = 0

            while (!status && attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 1000))
                attempts++

                if (new Date() > expirationTime) {
                    fs.unlinkSync(filePath)
                    return m.reply(`❌ *Waktu pembayaran habis.*\nSilakan coba lagi.`)
                }

                if (!fs.existsSync(filePath)) {
                    return m.reply(`❌ *Transaksi telah dibatalkan.*`)
                }

                const transactionData = JSON.parse(fs.readFileSync(filePath))
                let checkStatus

                if (transactionData.gateway === 'saweria') {
                    checkStatus = await Pay.checkPayment(transactionData.id)
                    if (checkStatus.status) {
                        const newBalance = updateBalance(m.sender, nominal)
                        fs.unlinkSync(filePath)
                        return m.reply(`✅ *Pembayaran berhasil!*

💰 *Deposit*: Rp ${formatRupiah(nominal)}
💳 *Saldo sekarang*: Rp ${formatRupiah(newBalance)}

Terima kasih telah melakukan deposit!`)
                    }
                } else {
                    checkStatus = await OrkutPay.cekStatus()
                    if (checkStatus.status) {
                        const newBalance = updateBalance(m.sender, nominal)
                        fs.unlinkSync(filePath)
                        return m.reply(`✅ *Pembayaran berhasil!*

💰 *Deposit*: Rp ${formatRupiah(nominal)}
💳 *Saldo sekarang*: Rp ${formatRupiah(newBalance)}

Terima kasih telah melakukan deposit!`)
                    }
                }
            }
        } catch (error) {
            console.error(error)
            m.reply("❌ Terjadi kesalahan saat memproses deposit.")
        }
    },

    // Command batalbeli
    batalbeli(m) {
        const filePath = `${tempPath}/${m.sender.split("@")[0]}.json`
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
            return m.reply("✅ Transaksi deposit berhasil dibatalkan.")
        } else {
            return m.reply("❌ Tidak ada transaksi deposit yang aktif.")
        }
    },

    // Command setgateway
    setgateway(m, text, isOwner) {
        if (!isOwner) return m.reply(mess.owner)
        const gateway = text.toLowerCase()
        if (!['saweria', 'orderkuota'].includes(gateway)) {
            return m.reply("Gateway tidak valid. Gunakan 'saweria' atau 'orderkuota'")
        }
        activeGateway = gateway
        return m.reply(`✅ Payment gateway berhasil diubah ke ${gateway.toUpperCase()}`)
    },

    // Command cek saldo
    saldo(m) {
        const balance = getBalance(m.sender)
        return m.reply(`💳 *Saldo Anda*: Rp ${formatRupiah(balance)}`)
    }
}

// Command login
async login(m, q) {
    if (!isCreator) return m.reply(mess.owner);
    if (db_saweria.length === 1) return m.reply(`Sudah login di Saweria...`);
    if (m.isGroup) return m.reply(mess.group);
    if (!q || !q.includes(',')) return m.reply(`Contoh: ${prefix + command} email@gmail.com,password`);

    const [email, password] = q.split(',');
    await m.reply("Sedang mencoba login...");

    const res = await Pay.login(email.trim(), password.trim());
    if (!res.status) return m.reply(`❌ Terjadi kesalahan saat login:\n${res.msg}`);

    await sleep(500);
    await m.reply(`*LOGIN SUKSES ✅*\n\n*USER ID:* ${res.data.user_id}`);

    // Simpan user_id ke dalam db_saweria dan file JSON
    db_saweria.push(res.data.user_id);
    fs.writeFileSync("./lib/saweria.json", JSON.stringify(db_saweria, null, 2));
},

// Command logout
async logout(m) {
    // Implementasi logout jika diperlukan, misalnya menghapus session atau token
    // Misalnya, kita bisa menghapus user_id dari db_saweria
    const userId = m.sender; // Ambil user ID dari pengirim
    const index = db_saweria.indexOf(userId);
    if (index > -1) {
        db_saweria.splice(index, 1); // Hapus user ID dari array
        fs.writeFileSync("./lib/saweria.json", JSON.stringify(db_saweria, null, 2));
        return m.reply(`✅ Anda telah berhasil logout.`);
    } else {
        return m.reply(`❌ Anda tidak sedang login.`);
    }
}
}


//React
const moji = ['📚', '💭', '💫', '🌌', '🌏', '〽️', '🌷', '🍁', '🪻',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]
// Load / LOading Emoji ( react version )
async function loading() {
    const emojis = moji; // Array emoji yang ingin digunakan
    const totalReactions = emojis.length; // Menggunakan jumlah emoji yang ada

    // Mengirim pesan awal
    await melda.sendMessage(m.chat, { text: 'Mengirim reaksi...' }); // Pengalih isu

    for (let i = 0; i < totalReactions; i++) {
        // Mengambil emoji berdasarkan indeks
        const emoji = emojis[i]; // Menggunakan emoji dari array

        // Mengirim reaksi emoji ke pesan yang dikirim oleh pengguna
        await melda.sendMessage(m.chat, {
            react: {
                text: emoji,
                key: m.key // Menggunakan key dari pesan yang dikirim pengguna
            }
        });

        // Menunggu 1 detik sebelum mengganti reaksi berikutnya
        await sleep(1000); 
    }

    // Mengirim pesan selesai
    await melda.sendMessage(m.chat, { text: 'Reaksi selesai dikirim!' });
}
//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require('moment-timezone')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "19:00:00"){
var ucapanWaktu = "Selamat Malam🌃"
}
if(time2 < "15:00:00"){
var ucapanWaktu = "Selamat Sore🌄"
 }
if(time2 < "11:00:00"){
var ucapanWaktu = "Selamat Siang🏞️"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "Selamat Pagi🏙️ "
 }
if(time2 < "23:59:00"){
var ucapanWaktu = "Selamat Subuh🌆"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")

//Status
if (!melda.public) {
if (!m.key.fromMe) return
}

try {
ppuser = await Rifky.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/y44l0j.jpg'
}
ppnyauser = await getBuffer(ppuser)

const reSize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
let jimp = require('jimp')
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
 })
}
const fkethmb = await reSize(ppuser, 300, 300)
let jimp = require("jimp")
const resize = async (image, width, height) => {
const read = await jimp.read(image);
const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
return data;
};


const ftroli = { key: { remoteJid: '6285736178354-1625305606@g.us', participant: '6282132710183@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2024, status: 1, thumbnail: fkethmb, surface: 1, message: "ᴘʀᴏᴊᴇᴄᴛ ᴀʟɪꜰᴀᴛᴀʜ!!", orderTitle: "tes", sellerJid: '0@s.whatsapp.net' } } }

const TeksMenu = `
**Alfiky ID: Solusi Hosting & Top Up Game Terpercaya**

Hii Kakk ${pushname} ✨

Alfiky ID menyediakan layanan hosting dan top up game terlengkap untuk memenuhi kebutuhan Anda. Kami menawarkan berbagai pilihan hosting yang handal dan cepat, serta berbagai macam game populer untuk diisi ulang dengan harga yang terjangkau.

**Mengapa memilih Alfiky ID?**

* **Terpercaya:** Kami adalah penyedia layanan hosting dan top up game yang terpercaya dengan reputasi yang baik.
* **Lengkap:** Kami menyediakan berbagai macam layanan hosting dan game untuk memenuhi semua kebutuhan Anda.
* **Terjangkau:** Kami menawarkan harga yang terjangkau untuk semua layanan kami.
* **Cepat:** Kami memproses pesanan Anda dengan cepat dan efisien.
* **Handal:** Kami menggunakan teknologi terkini untuk memastikan layanan kami selalu handal.

**Hubungi kami sekarang untuk informasi lebih lanjut!**

Anda dapat menghubungi kami melalui:

* ${email}
* ${ownNumb}
* ${website}

Kami siap membantu Anda dengan semua kebutuhan hosting dan top up game Anda.

`

//Reply

const reply = async (teks) => {
const Thezy = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Muhammad Fauzi Alifatah`,
newsletterJid: `120363367787013309@newsletter`,
},
externalAdReply: {
showAdAttribution: true,
title: `ᴘʀᴏᴊᴇᴄᴛ ᴀʟɪꜰᴀᴛᴀʜ`, 
body: `${ucapanWaktu}`, 
thumbnailUrl: `https://files.catbox.moe/xn41io.jpg`, 
thumbnail: '',
sourceUrl: 'https://heylink.me/FauziAlifatah/', 
},
},
text: teks, 
};
return melda.sendMessage(m.chat, Thezy, {
quoted: ftroli, ephemeralExpiration: 86400,
});
};

const pluginsLoader = async (directory) => {
let plugins = [];
const folders = fs.readdirSync(directory);
folders.forEach(file => {
const filePath = path.join(directory, file);
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath];
}
const plugin = require(filePath);
plugins.push(plugin);
} catch (error) {
console.log(`${filePath}:`, error);
}
}
});
return plugins;
};

const pluginsDisable = true;
const plugins = await pluginsLoader(path.resolve(__dirname, "./plugins"));
const plug = { 
melda,
isOwner,
command,
isCmd,
reply,
addCountCmd, 
getPosiCmdUser, 
randomemoji, 
text,
args,
botNumber,
pushname,
isGroup: m.isGroup,
isPrivate: !m.isGroup
};

for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
if (plugin.owner && !isOwner) {
return reply(mess.owner);
}
if (plugin.premium && !isPremium) {
return reply(mess.premium);
}
if (plugin.group && !plug.isGroup) {
return reply(mess.ingroup);
}
if (plugin.private && !plug.isPrivate) {
return reply(mess.private);
}
if (typeof plugin !== "function") return;
await plugin(m, plug);
}
}

if (!pluginsDisable) return;

if (m.message) {
if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
} else if (m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
}
}



switch (command) {

case 'menu':
    case 'layanan': {
// validasi Hanya bisa chat Di Privasi
if (m.isGroup) return; 

await sendLayanan(TeksMenu);
        break;

}

case 'login': {
    const q = text; // Ambil input dari pengguna
    await depositHandler.login(m, q);
    break;
}

case 'logout': {
    await depositHandler.logout(m);
    break;
}


case 'deposit': {
    await depositHandler.deposit(m, text)
    break
}

case 'batalbeli': {
    depositHandler.batalbeli(m)
    break
}

case 'setgateway': {
    depositHandler.setgateway(m, text, isOwner)
    break
}

case 'saldo': {
    depositHandler.saldo(m)
    break
}


case 'addfile': {
if (!text.includes("./")) return m.reply(`Contoh: ${prefix+command} ./path/to/file.txt`); 
let filePath = path.resolve(text);
let dir = path.dirname(filePath);
let fileName = path.basename(filePath);
if (!fs.existsSync(dir)) {
return m.reply('Direktori tidak ditemukan!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (fs.existsSync(filePath)) {
fs.appendFileSync(filePath, buffer);
m.reply(`Berhasil menambahkan konten ke ${fileName}`);
} else {
fs.writeFileSync(filePath, buffer);
m.reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
}}
break

case 'delsampah': {
let directoryPath = './Session'
fs.readdir(directoryPath, async (err, files) => {
if (err) {
console.error('Unable to scan directory: ', err);
return reply(`Gagal memindai direktori: ${err.message}`);
}
const filteredArray = files.filter(item => 
item.startsWith('pre-key') || 
item.startsWith('sender-key') || 
item.startsWith('session-') || 
item.startsWith('app-state')
);
let teks = `Terdeteksi ${filteredArray.length} file sampah! \n\n`;
if (filteredArray.length === 0) {
return reply(teks);
}
filteredArray.forEach((file, i) => {
teks += `${i + 1}. ${file}\n`;
});
reply(teks);
await sleep(2000);
const tuts = await reply('_Menghapus sampah..._');
for (const file of filteredArray) {
try {
fs.unlinkSync(`${directoryPath}/${file}`);
} catch (e) {
console.error(`Gagal menghapus file: ${file}`, e);
}}
});
}
break

case 'addcase': {
    if 
if (!text) return reply(`Contoh: ${prefix+command} case nya`);
const namaFile = path.join(__dirname, 'case.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan case baru:');
console.log(caseBaru);
return reply('Sukses menambahkan case!');
}});
} else {
console.error(result.message);
return reply(result.message);
}});
}
break

case 'addconst': {
addCountCmd('#addconst', m.sender, _cmd)
if (!text) return reply(`Contoh: ${prefix+command} const barunya`);
const namaFile = path.join(__dirname, 'case.js');
const constBaru = `${text}\n\n`;
const tambahConst = (data, constBaru) => {
const posisiIsAntiLink = data.indexOf("const isAntiLink");
if (posisiIsAntiLink !== -1) {
const kodeBaruLengkap = data.slice(0, posisiIsAntiLink) + constBaru + data.slice(posisiIsAntiLink);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan const isAntiLink di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahConst(data, constBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan const baru:');
console.log(constBaru);
return reply('Sukses menambahkan const!');
}});
} else {
console.error(result.message);
return reply(result.message);
}});
}
break;
// Status
case 'public': {
if (!isCreator) return reply('*khusus Premium*') 
melda.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
melda.public = true
reply('succes')
}
break

case 'getfunc':
case 'cekfunc':
case 'cekfunction': {
if (!isOwner) return onlyOwn();
if (!text) return reply(`Contoh: ${prefix+command} functionName`);
const functionName = text.trim();
if (!functionName) return reply(`Masukkan nama function yang ingin dicek. Contoh: ${prefix+command} functionName`);
const cekFunction = async (functionName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const functionRegex = new RegExp(`function ${functionName}\\s*\\([\\s\\S]*?\\)\\s*\\{[\\s\\S]*?\\}`, 'g');
const match = fileContent.match(functionRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const functionLines = match[0].split('\n');
const startLine = lines.indexOf(functionLines[0]) + 1;
const endLine = startLine + functionLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekFunction(functionName);
if (result.error) {
reply(result.error);
} else if (result.found) {
const message = `
*FUNCTION DITEMUKAN!*
• Nama funct: ${functionName}
• Baris awal: ${result.startLine}
• Baris akhir: ${result.endLine}

Mau sekalian di ambil?`;
let kun = `{\"display_text\":\"YA\",\"id\":\"${prefix}getfunc ${text}\"}`
quickreply1(m.chat, message, kun, m)
userSessions[m.sender] = { functionToRetrieve: result, functionName };
} else {
reply(`Function '${functionName}' tidak ditemukan.`);
}
}
break

case 'self': {
if (!isCreator) return reply('*khusus Premium*') 
melda.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
melda.public = false
reply('succes')
}
break


default:

if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}

}
} catch (err) {
const errId = `${global.ownNumb}@s.whatsapp.net`
melda.sendMessage(errId, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})