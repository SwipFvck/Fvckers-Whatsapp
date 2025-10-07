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
  
Recode? Creadit Me, Please do not sell this script, because this script is provided for free by Swiper Fvck.

Looking for hosting needs? Contact me:
WhatsApp: 6282120820483
Telgram: t.me/SwiperFvck2

Thank you very much
*/

require('./system/config');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidDecode } = require("@swiperfvck/fbail");
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const readline = require("readline");
const { smsg } = require('./system/lib/myfunction');
//============
const question = (text) => new Promise(res => {
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question(text, ans => { rl.close(); res(ans) });
});
//============
async function StartFvck() {
const { state, saveCreds } = await useMultiFileAuthState('./session');
const fvk = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !global.usePairingCode,
auth: state,
browser: ["Ubuntu","Chrome","20.0.04"]
});
if (global.usePairingCode && !fvk.authState.creds.registered) {
const phone = await question("Enter Your Number Phone::\n");
const code = await fvk.requestPairingCode(phone.trim());
console.log(`Pairing Code: ${code}`);
}
//============
fvk.ev.on("connection.update", ({ connection, lastDisconnect }) => {
if (connection === "open") return console.log("WhatsApp Connected!");
if (connection !== "close") return;
const code = new Boom(lastDisconnect?.error)?.output?.statusCode || 0;
const reason = {
401: "Bad Session!", 428: "Session replaced!", 408: "Timeout!",
440: "Exit, rescan!", 410: "Closed, retry...", 500: "Restart required!"
}[code] || `Unknown: ${code}`;
console.log(reason);
(code === 401 || code === 428) ? StartFvck() : StartFvck();
});
//============
fvk.ev.on("messages.upsert", async ({ messages, type }) => {
try {
const msg = messages[0] || messages[messages.length - 1];
if (type !== "notify" || !msg?.message || msg.key?.remoteJid == "status@broadcast") return;
const m = smsg(fvk, msg);
require('./system/whatsapp')(fvk, m, msg);
} catch (e) {
console.log(e);
}});
//============
fvk.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
const decode = jidDecode(jid) || {};
return decode.user && decode.server ? decode.user + '@' + decode.server : jid}
return jid;
};
//============
fvk.sendText = (jid, text, quoted = '', opts = {}) => fvk.sendMessage(jid, { text, ...opts }, { quoted });
fvk.ev.on('creds.update', saveCreds);
return fvk;
}
//============
console.log(
`
Developer: Swiper Fvck
Agency: Fvckers
Version: 3.0.0
Name Script: Base Bot WhatsApp
`
);
StartFvck();
