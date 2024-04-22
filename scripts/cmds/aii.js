const axios = require('axios');

const Prefixes = [
  'gpt',
  'ai',
  'Ai',
];

module.exports = {
  config: {
    name: 'ai',
    aliases: [`gpt`],
    version: '2.0',
    author: 'Kyle pogi',
    role: 0,
    category: 'ai',
    shortDescription: {
      en: 'Asks an AI for an answer.',
    },
    longDescription: {
      en: 'Asks an AI for an answer based on the user prompt.',
    },
    guide: {
      en: '{pn} [prompt]',
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p)); 

      if (!prefix) {
        return;
      }

      const prompt = args.join(" ");

      const response = await axios.get(`https://arysprak.onrender.com/api/customai?title=%F0%9F%A4%96%7C%F0%9D%97%AD%F0%9D%97%98%F0%9D%97%A3%F0%9D%97%9B%F0%9D%97%AC%F0%9D%97%A5%F0%9D%97%A8%F0%9D%97%A6+%F0%9D%97%94%F0%9D%97%9C&prompt=Hi+my+name+is+zephyrus+Ai+Develop++by+Kyle+bait-it+handsome&prompt=%F0%9D%96%A7%F0%9D%97%82%2C+%F0%9D%96%A7ello..+I+am+Kyle+bait-it+Ai+=${encodeURIComponent(prompt)}`);

      if (response.status !== 200 || !response.data) {
        throw new Error('Invalid or missing response from API');
      }

      const fullResponse = response.data.fullResponse;

      await api.sendMessage(fullResponse, event.threadID, event.messageID);

      console.log('Sent answer as a reply to user');
    } catch (error) {
      console.error(`Failed to get answer: ${error.message}`);
      api.sendMessage(
        `${error.message}.\n\nYou can try typing your question again or resending it, as there might be a bug from the server that's causing the problem. It might resolve the issue.`,
        event.threadID
      );
    }
  },
};
