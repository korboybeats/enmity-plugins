import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { Messages } from "enmity/metro/common";
import manifest from '../manifest.json';

const Patcher = create('ChangeDiscordLink');

let customText = "rosie";

const ChangeDiscordLink: Plugin = {
   ...manifest,

   onStart() {
      Patcher.before(Messages, "sendMessage", (_, args, orig) => {
         let msg = args[1]["content"];
         if (!msg.includes("discord.com/channels/")) return orig(...args);
         let newMessage = msg.replace("discord.com/channels/", customText + ".discord.com/channels/")
         args[1]["content"] = newMessage;
         return orig(...args);
     });
   },
   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(ChangeDiscordLink);
