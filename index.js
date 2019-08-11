Discord = require("discord.js");
client = new Discord.Client();

client.on("message", async msg =>
{
  if (msg.author.id == 598406309058183170 && msg.content.startsWith("!dm"))
  {
    let msg_to_send = msg.content.substring(4);
    let memarr = msg.guild.members.array();
    for (let i = 0; i < memarr.length; i++)
    {
      let mem = memarr[i]
      await mem.send(msg_to_send).catch(()=>{});
    }
  }
});

client.login("NjA4Nzg1NzU4MjA3MDgyNTAw.XVCC9g.0XBKDG43dDZDzyXpy19wzw-GdrU");
