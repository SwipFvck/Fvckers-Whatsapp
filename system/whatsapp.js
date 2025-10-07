/*
Base Name: Fvckers Base
Type: CommonJs
Version: 3.0.0
Security: No Enc 100%
Developer: Swiper Fvck

Thanks To:
  Ruzuren (My Friend)
  Kagenou (My Friend)
  GenShiro (My Friend)
  Xeight (My Friend)
  PutraTzy (My Friend)
  VX Zuu (My Friend)

Best Support:
  Allah Swt
  Dark Angel
  Vxsourcin
  Fvckers
  All Users Script
  
Recode/Add feature? Creadit Me, Please do not sell this script, because this script is provided for free by Swiper Fvck.

Looking for hosting needs? Contact me:
WhatsApp: 6282120820483
Telgram: t.me/SwiperFvck2

Thank you very much
*/

const {
default: baileys,
proto,
jidNormalizedUser,
generateWAMessage,
generateWAMessageFromContent,
getContentType,
prepareWAMessageMedia,
} = require("@swiperfvck/fbail")
//============
const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@swiperfvck/fbail");
//============
const fs = require('fs-extra');
const crypto = require("crypto")
const axios = require("axios")
const path = require("path")
const os = require('os');
const sharp = require("sharp")
const moment = require('moment-timezone')
const pino = require("pino")
const chalk = require("chalk")
const { createCanvas, loadImage } = require("canvas")
const UglifyJS = require("uglify-js");
const fetch = require("node-fetch")
const FormData = require('form-data');
const yts = require('yt-search');
const textToImage = require("text-to-image")
const { exec } = require('child_process');
const { addPremiumUser, delPremiumUser, setPublic, isPublic } = require("./lib/premiun");
//============
module.exports = async (conn, m, chatUpdate, store) => {
try {
const prefix = ''
const isCmd = body.startsWith(prefix)
const quoted = m.quoted ? m.quoted : m
const mime = quoted?.msg?.mimetype || quoted?.mimetype || null
const args = m.body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name";
const qmsg = (m.quoted || m)
const text = q = args.join(" ")
const budy = (typeof m.text === 'string' ? m.text : '');
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
//============
const botNumber = conn.decodeJid(conn.user.id);
const data = JSON.parse(fs.readFileSync("./system/database/premium.json"));
const premuser = data.premium || [];
const isAccess = [
botNumber,
global.owner + "@s.whatsapp.net",
...premuser.map(u => u.id.replace(/\D/g, "") + "@s.whatsapp.net")
].includes(m.sender);
//============
const isBotPublic = isPublic();
if (!isBotPublic && !isAccess) return;
console.log(`\x1b[35m[ PESAN ]\x1b[0m \x1b[36m${m.body || m.mtype}\x1b[0m Dari \x1b[33m${m.pushName}\x1b[0m`);
//============
const second = fs.readFileSync("./system/media/second.jpg")
const thumb = fs.readFileSync("./system/media/thumb.jpg")
const reply = fs.readFileSync("./system/media/reply.jpg")
//============
const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `Name: ${pushname}\nCommand: ${command}`,jpegThumbnail: second}}}
//============
const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: "Fvckers", 
body: `Swiper Fvck`, 
thumbnailUrl: reply, 
sourceUrl: "https://t.me/SwiperFvck2", 
}}}, {quoted: qlive})
}
//============
switch(command) {
case 'public': {
if (!isAccess) return Reply(mess.owner);
if (isPublic()) return Reply("It's been public for a while now");
setPublic(true);
Reply(mess.succes);
}
break;
//============
case 'self': {
if (!isAccess) return Reply(mess.owner);
if (!isPublic()) return Reply("It's been self for a while now");
setPublic(false);
Reply(mess.succes);
}
break;
//============
case 'menu': {
const mekkk = `
Hello *${pushname}*...

Name Bot: *Base Bot Fvckers*
Version Bot: *3.0.0*
Baileys Bot: *@swiperfvck/fbail*

Your Name: *${pushname}*
Your Number: *${m.sender.split('@')[0]}*
Your Status: ${isAccess ? '*Owner*' : '*Free*'}
`
const buttons = [{ 
buttonId: 'allmenu', 
buttonText: { displayText: 'All Feature' }, 
type: 1 
},
{
name: 'cta_url',
buttonParamsJson: JSON.stringify({
display_text: 'Developer',
url: 'https://t.me/SwiperFvck2'
})
},
{ 
name: 'cta_url',
buttonParamsJson: JSON.stringify({
display_text: 'Channel',
url: 'https://t.me/aboutfvckers'
})
}]

const buttonMessage = {
image: thumb,
caption: mekkk,
footer: "Base WhatsApp",
buttons: buttons,
headerType: 4,
viewOnce: true,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Fvckers`,
newsletterJid: `120363418557093738@newsletter`,
},
externalAdReply: {
title: `Base - 3.0.0`,
body: `Developed By SwiperFvck`,
thumbnail: second,
sourceUrl: `https://t.me/SwiperFvck2`,
mediaType: 1,
renderLargerThumbnail: false
}
}
}

await conn.sendMessage(m.chat, buttonMessage, { quoted: qlive })
}
break
//============
case 'allmenu': {
const mekkk = `
Your Name: *${pushname}*
Your Number: *${m.sender.split('@')[0]}*
Your Status: ${isAccess ? '*Owner*' : '*Free*'}

Feature:
  * addprem
  * delplrem
  * self
  * public
`
const buttons = [{
name: 'cta_url',
buttonParamsJson: JSON.stringify({
display_text: 'Developer',
url: 'https://t.me/SwiperFvck2'
})
},
{ 
name: 'cta_url',
buttonParamsJson: JSON.stringify({
display_text: 'Channel',
url: 'https://t.me/aboutfvckers'
})
}]

const buttonMessage = {
image: thumb,
caption: mekkk,
footer: "Base WhatsApp",
buttons: buttons,
headerType: 4,
viewOnce: true,
contextInfo: {
forwardingScore: 1,
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Fvckers`,
newsletterJid: `120363418557093738@newsletter`,
},
externalAdReply: {
title: `Base - 3.0.0`,
body: `Developed By SwiperFvck`,
thumbnail: second,
sourceUrl: `https://t.me/SwiperFvck2`,
mediaType: 1,
renderLargerThumbnail: false
}
}
}

await conn.sendMessage(m.chat, buttonMessage, { quoted: qlive })
}
break
//============
case "addprem": {
if (!isAccess) return Reply(mess.owner);
if (!text) return Reply(`❌ Example: ${prefix + command} (number)`);
let user = text.replace(/[^\d]/g, "");
addPremiumUser(user, 30);
Reply(`✅ Added Premium:\n• ${user} (30 days)`)}
break;
//============
case "delprem": {
if (!isAccess) return Reply(mess.owner);
if (!text) return Reply(`❌ Example: ${prefix + command} (number)`);
const user = text.replace(/[^\d]/g, "");
const removed = delPremiumUser(user);
if (removed) {
Reply(`✅ Premium dihapus:\n• ${user}`);
} else {
Reply("❌");
}
}
break;
//============
}} catch (e) {
console.error(e)}};