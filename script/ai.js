module.exports.config = {
  name: `ai`,
  version: "1.1.0",
  permission: 0,
  credits: "Metoushela",
  description: "",
  prefix: false,
  premium: false,
  category: "without prefix",
  usage: ``,
  cooldowns: 3,
  dependency: {
    "axios": ""
  }
};

module.exports.run = async function ({api, event, args}) {
  try{
  const axios = require('axios');
  let ask = args.join(' ');
  if (!ask) {
    return api.sendMessage('🤖 𝗔𝗹𝘃𝗮𝗿𝗲𝘇 𝗔𝗜\n━━━━━━━━━━━\n\nplease provide a question.', event.threadID, event.messageID)
  }

  const res = await axios.get(`https://kaiz-apis.gleeze.com/api/gpt-4o?q=${ask}&uid=${event.senderID}`);
  const reply = res.data.response;
  if (res.error) {
    return api.sendMessage('having some unexpected error while fetching api.', event.threadID, event.messageID)
  } else {
    return api.sendMessage(`🤖 𝗔𝗹𝘃𝗮𝗿𝗲𝘇 𝗔𝗜\n━━━━━━━━━━━\n\n${reply}\n\nby Alvarez Walker and Ulric Atayi`, event.threadID, event.messageID)
  }
  } catch (error) {
    return api.sendMessage('having some unexpected error', event.threadID, event.messageID)
  }
                           }
