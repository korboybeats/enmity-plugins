import { FormRow, FormInput, StyleSheet, FormSection, View } from 'enmity/components';
import { SettingsStore } from 'enmity/api/settings';
import { React } from 'enmity/metro/common';
import { customText } from '../index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
  });

interface SettingsProps {
   settings: SettingsStore;
}
let setLinkVal;
export default ({ settings }: SettingsProps) => {
   return (
    <View
    style={styles.container}
    >
    <FormInput
        onChange={v => setLinkVal(v)}
        title='Link Text'
    />
  </View>
)};