import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { Messages } from "enmity/metro/common";
import manifest from '../manifest.json';

const Patcher = create('ChangeDiscordLink');

let customText = "you-are-sus"; //for now, edit this here :)

const ChangeDiscordLink: Plugin = {
   ...manifest,

   onStart() {
    Patcher.before(Messages, "sendMessage", (notMessage, theMessage, alsoNotMessage) => {
      let message = theMessage[1]["content"];
      let newMessage;
      if (message.includes("discord.com/channels/")) {
         newMessage == message.replace("discord.com/channels/", customText + ".discord.com/channels/")
      }
      theMessage[1]["content"] = newMessage;
    });
   },
   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(ChangeDiscordLink);
