import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { React, Messages } from 'enmity/metro/common';
import { get } from 'enmity/api/settings';
import manifest from '../manifest.json';
import Settings from './components/Settings';

get("ChangeDiscordLink", "customText", "")
const Patcher = create('ChangeDiscordLink');
const ChangeDiscordLink: Plugin = {
   ...manifest,

   onStart() {      
      Patcher.before(Messages, "sendMessage", (self, args, orig) => {
         let customText = get('ChangeDiscordLink', "urlPrefix", "stable")
         const formatString = (text: string) => {
            let format1 = text.split(" ").map(e => e.toLowerCase()).join('-')
            let format2: string[] = [];
            let alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890-_'
            format1.includes(alphabet) 
                ? []
                : format1.split('').map((char: string)=> {
                    if (!alphabet.includes(char)) return format2.push('-')
                    return format2.push(char)
        
                }).join('')
        
            return format2.join('')
            
        }
        
        console.log(formatString("Hello World ?a?")) // hello-world--a-

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