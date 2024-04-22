module.exports = {
 config: {
   name: "bot",
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
 if (event.body && event.body.toLowerCase() === "bot") {
 return message.reply({
 body: `Yesss? I'm here how can I help you? `,
 });
 }
 }
}
