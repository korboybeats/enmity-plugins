function s(e){window.enmity.plugins.registerPlugin(e)}function d(e){return window.enmity.patcher.create(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const c=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;var r="CustomDiscordLink",l="0.1.1",w="Port of that one powercord plugin lol",a=[{name:"rosie",id:"582594004479246343"}],u={name:r,version:l,description:w,authors:a};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text;const y=o.TextInput;o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const g=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var h=({settings:e})=>n.createElement(g,{label:"Prefix",trailing:n.createElement(y,{placeholder:"Prefix"})});const t=d("ChangeDiscordLink"),F={...u,onStart(){let e="rosie";t.before(c,"sendMessage",(S,m,p)=>{const i=m[1].content;!i.includes("discord.com/channels")||(m[1].content=i.replace("discord.com/channels",e+".discord.com/channels"))})},onStop(){t.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(h,{settings:e})}};s(F);
