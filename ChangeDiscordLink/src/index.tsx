import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { React, Messages } from 'enmity/metro/common';
import manifest from '../manifest.json';


import Settings from './components/Settings';

const Patcher = create('ChangeDiscordLink');

const ChangeDiscordLink: Plugin = {
   ...manifest,

   onStart() {      
      let customText = "rosie";
      
      Patcher.before(Messages, "sendMessage", (self, args, orig) => {
        const content = args[1]["content"];
      
        if(!content.includes("discord.com/channels")) return;
      
        args[1]["content"] = content.replace("discord.com/channels", customText + ".discord.com/channels");
      });
   },
   onStop() {
      Patcher.unpatchAll();
   },
   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(ChangeDiscordLink);