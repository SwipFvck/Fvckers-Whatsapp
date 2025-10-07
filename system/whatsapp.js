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
const jimp = require("jimp")
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
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
//============
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
const second = fs.readFileSync("./system/lib/media/second.jpg")
const thumb = fs.readFileSync("./system/lib/media/thumb.jpg")
const reply = fs.readFileSync("./system/lib/media/reply.jpg")
//============
const resize = async (image, width, height) => {
let oyy = await jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//============
const FakeLocation = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? { remoteJid: 'status@broadcast' } : {})
},
message: {
locationMessage: {
name: `Name: ${pushname}\nCommand ${command}`,
jpegThumbnail: ''
}
}
}
//============
const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: "Fvckers", 
body: `Swiper Fvck`, 
thumbnailUrl: reply, 
sourceUrl: "https://t.me/SwiperFvck2", 
}}}, {quoted: FakeLocation})
}
//============
switch(command) {
case 'public': {
if (!isAccess) return Reply(msg.owner);
if (isPublic()) return Reply("It's been public for a while now");
setPublic(true);
Reply(msg.succes);
}
break;
//============
case 'self': {
if (!isAccess) return Reply(msg.owner);
if (!isPublic()) return Reply("It's been self for a while now");
setPublic(false);
Reply(msg.succes);
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
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: mekkk
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "Base Bot Fvckers"
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({
image: {
url: "https://files.catbox.moe/s3n7n2.jpg"
}
}, {
upload: conn.waUploadToServer
})),
title: ``,
gifPlayback: true,
subtitle: 'Bot WhatsApp',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
name: 'single_select',
buttonParamsJson: JSON.stringify({
title: 'Select Menu',
sections: [{
title: '',
highlight_label: "<!>",
rows: [{ 
header: 'All Menu', 
title: 'Show All Features', 
description: '', 
id: `allmenu`
}],
}],
}),
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "[ WhatsApp ]",
url: `https://wa.me/6282120820483`,
}),
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "[ Telegram ]",
url: `https://t.me/SwiperFvck2`,
}),
}],
}),
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
thumbnail: fs.readFileSync("./system/lib/media/second.jpg"),
sourceUrl: `https://t.me/SwiperFvck2`,
mediaType: 1,
renderLargerThumbnail: false
}
}
}),
},
},
}, {
quoted: FakeLocation
});

await conn.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
});
}
break
//============
case 'allmenu': {
const mekkk = `
Your Name: *${pushname}*
Your Number: *${m.sender.split('@')[0]}*
Your Status: ${isAccess ? '*Owner*' : '*Free*'}

Feature:
  - addprem
  - delplrem
  - self
  - public
`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: mekkk
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "Base Bot Fvckers"
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({
image: {
url: "https://files.catbox.moe/s3n7n2.jpg"
}
}, {
upload: conn.waUploadToServer
})),
title: ``,
gifPlayback: true,
subtitle: 'Bot WhatsApp',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "[ WhatsApp ]",
url: `https://wa.me/6282120820483`,
}),
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "[ Telegram ]",
url: `https://t.me/SwiperFvck2`,
}),
}],
}),
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
thumbnail: fs.readFileSync("./system/lib/media/second.jpg"),
sourceUrl: `https://t.me/SwiperFvck2`,
mediaType: 1,
renderLargerThumbnail: false
}
}
}),
},
},
}, {
quoted: FakeLocation
});

await conn.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
});
}
break
//============
case "addprem": {
if (!isAccess) return Reply(msg.owner);
if (!text) return Reply(`❌ Example: ${prefix + command} (number)`);
let user = text.replace(/[^\d]/g, "");
addPremiumUser(user, 30);
Reply(`✅ Added Premium:\n• ${user} (30 days)`)}
break;
//============
case "delprem": {
if (!isAccess) return Reply(msg.owner);
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