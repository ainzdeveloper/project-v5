const fs = require('fs-extra');
const pathFile = 'autoacp.txt';

module.exports.config = {
  name: "autoacceptmessagerequest",
  version: "1.0.0"
};

module.exports.run = async ({ api }) => {
  try {
    if (!fs.existsSync(pathFile)) fs.writeFileSync(pathFile, 'false');
    
    const isEnable = fs.readFileSync(pathFile, 'utf-8');
    
    const list = [
      ...(await api.getThreadList(1, null, ['PENDING'])),
      ...(await api.getThreadList(1, null, ['OTHER']))
    ];
    
    if (isEnable == 'true') {
      list.forEach(thread => {
        api.handleMessageRequest(thread[0].threadID, (err) => {
          if (err) return console.error(err);
          api.sendMessage('Successfully accepted friend request in thread:', thread[0].threadID);
        });
      });
    }
  } catch (error) {
    console.error('Error handling event:', error);
  }
};