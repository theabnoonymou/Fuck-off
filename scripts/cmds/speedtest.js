module.exports = {
  config: {
    name: "speed",
    aliases: ["speed test"],
    version: "1.0",
    author: "Sandu",
    role: 0,
    shortDescription: {
      en: "Displays the current ping of the bot's system."
    },
    longDescription: {
      en: "Displays the current ping of the bot's system."
    },
    category: "System",
    guide: {
      en: "Use {p}ping to check the current ping of the bot's system."
    }
  },
  onStart: async function ({ api, event, args }) {
    const timeStart = Date.now();
    await api.sendMessage("✅ Checking Bot's speed", event.threadID);
    const ping = Date.now() - timeStart;
    api.sendMessage(`⚡ The current Bot's Speed is\n\n╔═══════════╗\n
  ➣result
  ➥Speed: ${ping}ms.\n╚════════════╝\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥: 𝑲𝒀𝑳𝑬 𝑩𝑨𝑰𝑻-𝑰𝑻(𝒉𝒂𝒏𝒅𝒔𝒐𝒎𝒆)`, event.threadID);
  }
};
