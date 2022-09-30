import { FormRow, FormInput, StyleSheet } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';

const styles = StyleSheet.create({
    plsWhiteText: {
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      padding: 10
    }
  });

interface SettingsProps {
   settings: SettingsStore;
}

export default ({ settings }: SettingsProps) => {
   return <FormRow
      label='Prefix'
      trailing={
        <FormInput
        style={styles.plsWhiteText}
        placeholder="Prefix"
        />
      }
   />;
};