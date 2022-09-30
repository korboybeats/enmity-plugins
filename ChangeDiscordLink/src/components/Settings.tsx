import { FormInput } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';
import { get, set } from 'enmity/api/settings'

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <>
      <FormInput
         value={get("ChangeDiscordLink", "urlPrefix", "")}
         onChange={v => set("ChangeDiscordLink", "urlPrefix", v)}
         placeholder={`Prefix`}
         title='Custom URL Prefix'
      />
   </>
};