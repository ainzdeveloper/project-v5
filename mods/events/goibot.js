module.exports.config = {
  name: "goibot",
  version: "1.0.1"
};
module.exports.run = async function({ api, event, args, Threads, Users }) {
 
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  

  var tl = ["bawal mag mura rito", "saksakin kita mura ka nang mura e", "isa pang mura saksakin kita sa leeg", "bawal nga mag mura rito kakaltukan kita jan e", "bawal mag mura rito nakikita ka ng Diyos", "isa pang mura sasapakin ka ng admin ko", "bad word!", "bad!", "sumbong kita sa mama mo nag mumura ka", "kagatin kita jan mura ka nang mura e"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
  
  
  
  var tl = ["iloveyoumore", "iloveyoumore what's wrong love?", "iloveyoumore you know that.", "Iloveyou in every universe.", "iloveyousm", "iloveyou, wanna go on a date?", "suksukpekpek", "ilysm>-<", ">//<"];
  var daniel = tl[Math.floor(Math.random() * tl.length)]


  var tl = ["don't force someone who's not into you", "may iba na ’yon", "’di kana mahal ’non.", "kung ako na lang sana", "if you were mine you would not get the same", "kung ako yan...", "nandito naman ako e", "kung ako ’yon di kita sasayangin"];
  var retri = tl[Math.floor(Math.random() * tl.length)]
  
  
  
  var tl = ["yes?", "yes baby?", "im here love", "tumatae e", "yes love?", "im here!", "help for commands", "yes master?"];
  var master = tl[Math.floor(Math.random() * tl.length)]
  
  
  
  
  
    var tl = ["haahahaha", "whahaha", "jajajajaj", "tawa tawa geng geng", "happy?", "la naman nakakatawa"];
  var happy = tl[Math.floor(Math.random() * tl.length)]
  


  
    if (event?.body?.indexOf("Burat")==0 ||(event?.body?.indexOf("burat")==0 ||(event?.body?.indexOf("Puke")==0 ||(event?.body?.indexOf("puke")==0 ||(event?.body?.indexOf("tangina")==0 ||(event?.body?.indexOf("Tangina")==0 ||(event?.body?.indexOf("Tanginamo")==0 ||(event?.body?.indexOf("Tanginamo")==0 ||(event?.body?.indexOf("taina")==0 ||(event?.body?.indexOf("Taina")==0 ||(event?.body?.indexOf("Pota")==0 ||(event?.body?.indexOf("pota")==0 || (event?.body?.indexOf("gago")==0 || (event?.body?.indexOf("Gago")==0 || (event?.body?.indexOf("tanga")==0 ||(event?.body?.indexOf("Tanga")==0 ||(event?.body?.indexOf("bobo")==0 ||(event?.body?.indexOf("Bobo")==0 ||(event?.body?.indexOf("Tarantado")==0 || (event?.body?.indexOf("tarantado")==0 || (event?.body?.indexOf("ulol")==0 || (event?.body?.indexOf("tang ina")==0 ||(event?.body?.indexOf("Tang ina")==0 ||(event?.body?.indexOf("po ta")==0 ||(event?.body?.indexOf("Pota")==0 || (event?.body?.indexOf("ulol")==0 || (event?.body?.indexOf("Ulol")==0 || (event?.body?.indexOf("tanginamoka")==0)))))))))))))))))))))))))))) {
      var msg = {
				body: `${rand}`
			}
			api.sendMessage(msg, event.threadID, event.messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
  };
  
  
    if (event?.body?.indexOf("Iloveyou")==0 ||(event?.body?.indexOf("iloveyou")==0 ||(event?.body?.indexOf("Loveyou")==0 ||(event?.body?.indexOf("loveyou")==0 ||(event?.body?.indexOf("love u")==0 ||(event?.body?.indexOf("Love u")==0 ||(event?.body?.indexOf("Love you")==0 ||(event?.body?.indexOf("love you")==0 ||(event?.body?.indexOf("mahal kita")==0 ||(event?.body?.indexOf("Mahal kita")==0 ||(event?.body?.indexOf("Iloveyoutoo")==0 ||(event?.body?.indexOf("Iloveyoutoo")==0 || (event?.body?.indexOf("Iloveyoumore")==0 || (event?.body?.indexOf("iloveyoumore")==0 || (event?.body?.indexOf("i love you")==0 ||(event?.body?.indexOf("I love you")==0 ||(event?.body?.indexOf("ily")==0))))))))))))))))) {
      var msg = {
				body: `${daniel}`
			}
			api.sendMessage(msg, event.threadID, event.messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
  };
  
  
    if (event?.body?.indexOf("HAHAHA")==0 ||(event?.body?.indexOf("hahaha")==0 ||(event?.body?.indexOf("HAHA")==0 ||(event?.body?.indexOf("haha")==0 ||(event?.body?.indexOf("HAHAHA")==0 ||(event?.body?.indexOf("hahaha")==0 ||(event?.body?.indexOf("Hahaha")==0 ||(event?.body?.indexOf("Haha")==0 ||(event?.body?.indexOf("HAHAHAHA")==0 ||(event?.body?.indexOf("hahahaha")==0 ||(event?.body?.indexOf("whahaha")==0 ||(event?.body?.indexOf("Whahaha")==0 || (event?.body?.indexOf("😆")==0 || (event?.body?.indexOf("😂️")==0)))))))))))))) {
      var msg = {
				body: `${happy}`
			}
			api.sendMessage(msg, event.threadID, event.messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
  };

  
    if (event?.body?.indexOf("I miss you")==0 ||(event?.body?.indexOf("i miss you")==0 ||(event?.body?.indexOf("I miss her")==0 ||(event?.body?.indexOf("i miss her")==0 ||(event?.body?.indexOf("Imissher")==0 ||(event?.body?.indexOf("imissher")==0 ||(event?.body?.indexOf("Imisshim")==0 ||(event?.body?.indexOf("imisshim")==0 ||(event?.body?.indexOf("miss")==0 ||(event?.body?.indexOf("Miss")==0 ||(event?.body?.indexOf("miss kona sya")==0 ||(event?.body?.indexOf("Ako paba")==0 || (event?.body?.indexOf("aq paba")==0 || (event?.body?.indexOf("ako paba")==0)))))))))))))) {
      var msg = {
				body: `${retri}`
			}
			api.sendMessage(msg, event.threadID, event.messageID);
    api.setMessageReaction("😆️", event.messageID, (err) => {}, true)
  };
  
  
    if (event?.body?.indexOf("sakit")==0 ||(event?.body?.indexOf("Sakit")==0 ||(event?.body?.indexOf("Ansakit")==0 ||(event?.body?.indexOf("ansakit")==0 ||(event?.body?.indexOf("aray")==0 ||(event?.body?.indexOf("Aray")==0 ||(event?.body?.indexOf("break")==0 ||(event?.body?.indexOf("Break")==0 ||(event?.body?.indexOf("sad")==0 ||(event?.body?.indexOf("Sad")==0 ||(event?.body?.indexOf("misskona")==0 ||(event?.body?.indexOf("😢")==0 || (event?.body?.indexOf("mess")==0 || (event?.body?.indexOf("imisshir")==0)))))))))))))) {
      var msg = {
				body: `${retri}`
			}
			api.sendMessage(msg, event.threadID, event.messageID);
    api.setMessageReaction("😢️", event.messageID, (err) => {}, true)
  };

  
    if (event?.body?.indexOf("bot")==0 ||(event?.body?.indexOf("Bots")==0 ||(event?.body?.indexOf("net")==0 ||(event?.body?.indexOf("Automatic")==0 ||(event?.body?.indexOf("botnic")==0 ||(event?.body?.indexOf("Robott")==0 ||(event?.body?.indexOf("Bot")==0 ||(event?.body?.indexOf("Robot")==0 ||(event?.body?.indexOf("butttt")==0 ||(event?.body?.indexOf("but")==0 ||(event?.body?.indexOf("bbbbooottttt")==0 ||(event?.body?.indexOf("bottttt")==0 || (event?.body?.indexOf("booot")==0 || (event?.body?.indexOf("Autobot")==0 || (event?.body?.indexOf("Bot")==0))))))))))))))) {
      var msg = {
				body: `${master}`
			}
			api.sendMessage(msg, event.threadID, event.messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
  };
}

