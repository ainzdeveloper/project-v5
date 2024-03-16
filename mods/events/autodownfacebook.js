module.exports.config = {
name: "autodownfacebook",
version: "2.0.0"
};

module.exports.run = async ({ api, event }) => {
    const axios = require('axios');

const fs = require('fs');
    const getFBInfo = require("@xaviabot/fb-downloader");
const fbvid = './video.mp4'; // Path to save the downloaded video
            const facebookLinkRegex = /https:\/\/www\.facebook\.com\/\S+/;

            const downloadAndSendFBContent = async (url) => {
              try {
                  
                const result = await getFBInfo(url);
                let videoData = await axios.get(encodeURI(result.sd), {
                    responseType: 'arraybuffer' });
                fs.writeFileSync(fbvid, Buffer.from(videoData.data, "utf-8"));
                return api.sendMessage({ body: "𝖠𝗎𝗍𝗈 𝖣𝗈𝗐𝗇 𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖵𝗂𝖽𝖾𝗈\n\n𝗔𝗨𝗧𝗢𝗕𝗢𝗧 𝟭.𝟬.𝟬𝗩", attachment: fs.createReadStream(fbvid) }, event.threadID, () => fs.unlinkSync(fbvid));
              }
              catch (e) {
                return console.log(e);
              }
            };

            if (facebookLinkRegex.test(event?.body)) {
                api.setMessageReaction("📥", event.messageID, () => { }, true);
         downloadAndSendFBContent(event?.body);
            }
}
