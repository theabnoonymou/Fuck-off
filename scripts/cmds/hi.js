module.exports = {
 config: {
   name: "hi",
   version: "1.0",
   author: "Kylepogi",
   countDown: 2,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "hi") {
 return message.reply({
 body: `Hey I'm 𝗭𝗲𝗽𝗵𝘆𝗿𝘂𝘀 𝗔𝗶 your virtual assistant, just type ai and ask you a question and I'll do my best to answer it.`,
 });
 }
 }
}
