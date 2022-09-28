import { FormRow } from 'enmity/components';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getIDByName } from 'enmity/api/assets';
import { bulk, filters, getByProps } from 'enmity/metro';
import { React, Toasts } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

const Patcher = create('cut');

const [
   Clipboard,
   LazyActionSheet,
   ChannelStore
] = bulk(
   filters.byProps('setString'),
   filters.byProps("openLazy", "hideActionSheet"),
   filters.byProps("getChannel", "getDMFromUserId"),
);

const Cut: Plugin = {
   ...manifest,

   onStart() {
      Patcher.before(LazyActionSheet, "openLazy", (_, [component, sheet], _res) => {
         if (sheet === "MessageLongPressActionSheet") {
            component.then((instance) => {
               Patcher.after(instance, "default", (_, message, res) => {
                  if (!res.props) {
                     console.log(`[Cut Local Error: Property "Props" Does not Exist on "res"]`)
                     return res;
                  }
                  let finalLocation = res?.props?.children?.props?.children?.props?.children[1]
                  const originalMessage = MessageStore.getMessage(
                     message[0].message.channel_id,
                     message[0].message.id
                     );
                     const formElem = <FormRow
                     leading = {<FormRow.Icon source={getIDByName("ic_wand")}/>}
                     label="Cut"
                     onPress={() => {
                        Clipboard.setString(originalMessage.content)
                        const deleteEvent = {
                           type: "MESSAGE_DETELE",
                           message: {
                              ...originalMessage
                           },
                        };
                        // dispatches the event
                        FluxDispatcher.dispatch(deleteEvent);
                     }}
                     />
                     const addItem = (finalLocation: any, someRow: any) => {
                        // find copy text button and get the array index of the object
                        let findItem: any = finalLocation.find(e => e.props.message=='Copy Text')
                        let indexOfButton = finalLocation.indexOf(findItem)
                    
                        // split the array into the items before and after the button
                        let arrayBefore = finalLocation.splice(2, indexOfButton)
                        let arrayAfter = finalLocation.splice(-1, indexOfButton)
                    
                        // add the new button
                        arrayAfter.unshift(someRow)
                        // add back the copy text button
                        arrayBefore.push(findItem)
                        return arrayBefore.concat(arrayAfter) // add the arrays together again
                    }
                  let arrayWithNewItem = addItem(finalLocation, formElem) // addItem returns an array

                  finalLocation = arrayWithNewItem
               });
            });
         }
      })
      const MessageStore = getByProps("getMessage", "getMessages")
      const FluxDispatcher = getByProps(
         "_currentDispatchActionType", 
         "_subscriptions", 
         "_actionHandlers", 
         "_waitQueue"
      )
      // wake up flux message delete >:(
      for (const handler of ["MESSAGE_DELETE"]) {
         try {
            FluxDispatcher.dispatch({
                  type: handler,
                  message: {},
               });
         } catch(err) { console.log(`[Cut Local Error ${err}]`);}
      }
   },
   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(Cut);
