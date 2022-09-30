import { FormRow, FormSwitch, TextInput } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <FormRow
      label='Prefix'
      trailing={
        <TextInput
        placeholder="Prefix"
        />
      }
   />;
};