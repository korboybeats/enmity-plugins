import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { getByProps } from "enmity/modules";
import manifest from '../manifest.json';

const sendMessage = getByProps("sendMessage")

const Patcher = create('ChangeDiscordLink');

let customText = "you-are-sus"; //for now, edit this here :)

const ChangeDiscordLink: Plugin = {
   ...manifest,

   onStart() {
    Patcher.before(sendMessage, "sendMessage", (_, args, __) => { args[1].content = args[1].content.replaceAll("discord.com/channels/", customText + ".discord.com/channels/")
    });
   },
   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(ChangeDiscordLink);
