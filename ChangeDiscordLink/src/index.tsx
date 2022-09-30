import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

const Patcher = create('ChangeDiscordLink');
const Messages = window.enmity.modules.common.Messages;

const ChangeDiscordLink: Plugin = {
   ...manifest,

   onStart() {      
      const customText = "rosie";
      
      Patcher.before(Messages, "sendMessage", (self, args, orig) => {
        const content = args[1]["content"];
      
        if(!content.includes("discord.com/channels")) return;
      
        args[1]["content"] = content.replace("discord.com/channels", customText + ".discord.com/channels");
      });
   },
   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(ChangeDiscordLink);