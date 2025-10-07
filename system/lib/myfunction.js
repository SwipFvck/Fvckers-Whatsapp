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

const { extractMessageContent, getDevice, jidNormalizedUser, proto, delay, getContentType, areJidsSameUser, generateWAMessage } = require("@swiperfvck/fbail")
//=====================//
exports.smsg = (conn, m, store) => {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.from = m.key.remoteJid.startsWith('status') ? jidNormalizedUser(m.key?.participant || m.participant) : jidNormalizedUser(m.key.remoteJid);
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = conn.decodeJid(m.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || ''
}
//=====================//
if (m.message) {
m.mtype = getContentType(m.message);
m.msg = (m.mtype === 'viewOnceMessage' ? 
m.message[m.mtype]?.message?.[getContentType(m.message[m.mtype]?.message)] : 
m.message[m.mtype]
) || {};
m.body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "messageContextInfo" ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text : "");
let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage || null;
m.mentionedJid = m.msg?.contextInfo?.mentionedJid || [];
if (m.quoted) {
let type = getContentType(quoted);
m.quoted = quoted?.[type] || {};
if (type === 'productMessage') {
type = getContentType(m.quoted);
m.quoted = m.quoted?.[type] || {};
}
if (typeof m.quoted === 'string') {
m.quoted = { text: m.quoted };
}
m.quoted.key = {
remoteJid: m.msg?.contextInfo?.remoteJid || m.chat || "",
participant: jidNormalizedUser(m.msg?.contextInfo?.participant || m.sender || ""),
fromMe: areJidsSameUser(
jidNormalizedUser(m.msg?.contextInfo?.participant || m.sender || ""), 
jidNormalizedUser(conn?.user?.id || "")
),
id: m.msg?.contextInfo?.stanzaId || ""
};
m.quoted.mtype = type;
m.quoted.from = /g\.us|status/.test(m.msg?.contextInfo?.remoteJid || "") 
? m.quoted.key.participant 
: m.quoted.key.remoteJid;
m.quoted.id = m.msg?.contextInfo?.stanzaId || "";
m.quoted.chat = m.msg?.contextInfo?.remoteJid || m.chat || "";
m.quoted.isBaileys = m.quoted.id 
? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 
: false;
m.quoted.sender = conn.decodeJid(m.msg?.contextInfo?.participant || "");
m.quoted.fromMe = m.quoted.sender === (conn.user?.id);
m.quoted.text = m.quoted.text || 
m.quoted.caption || 
m.quoted.conversation || 
m.quoted.contentText || 
m.quoted.selectedDisplayText || 
m.quoted.title || '';
m.quoted.mentionedJid = m.msg?.contextInfo?.mentionedJid || [];
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false;
let q = await store.loadMessage(m.chat, m.quoted.id, conn);
return exports.smsg(conn, q, store);
};
let vM = m.quoted.fakeObj = M.fromObject({
key: { remoteJid: m.quoted.chat, fromMe: m.quoted.fromMe, id: m.quoted.id },
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
});
m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key });
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => 
conn.copyNForward(jid, vM, forceForward, options);
m.quoted.download = () => conn.downloadMediaMessage(m.quoted)}}
//=====================//
if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, 'file', '', m, { ...options }) : conn.sendText(chatId, text, m, { ...options })
m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)
return m
}
