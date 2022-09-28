import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { getByProps } from "enmity/metro";
import { create } from "enmity/patcher";
import { Toasts } from "enmity/metro/common";
import manifest from "../manifest.json";
import { React } from "enmity/metro/common";
import { makeStore } from "enmity/api/settings";
import { ScrollView } from "enmity/components";
const Patcher = create("sex");
const FluxDispatcher = getByProps(
    "_currentDispatchActionType",
    "_subscriptions",
    "_waitQueue"
);
const sex =
    "https://assets-prd.ignimgs.com/2020/09/15/among-us-button-1600131255112.jpg";
const sexplugin: Plugin = {
    ...manifest,
    onStart() {
        const Settings = makeStore(this.name);
        FluxDispatcher.dispatch({
            type: "LOAD_MESSAGES",
        });
        Settings.set("test", "test");
        FluxDispatcher.dispatch({
            type: "LOAD_MESSAGES_SUCCESS",
            channelId: 0,
            messages: [],
            isBefore: false,
            isAfter: false,
            hasMoreBefore: false,
            hasMoreAfter: false,
            limit: 25,
            jump: undefined,
            isStale: false,
            truncate: undefined,
        }); // wake up the handler?????? this does nothing lmao
        let attempt = 0;
        let attempts = 3;
        const lateStartup = () => {
            try {
                attempt++;
                console.log(
                    `sex delayed start attempt ${attempt}/${attempts}.`
                );
                Toasts.open({
                    content: `sex start attempt ${attempt}/${attempts}.`,
                    source: { uri: sex },
                });
                const MessageCreate =
                    FluxDispatcher._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(
                        (h) => h.name === "MessageStore"
                    );
                const MessageUpdate =
                    FluxDispatcher._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(
                        (h) => h.name === "MessageStore"
                    );

                const LoadMessages =
                    FluxDispatcher._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(
                        (h) => h.name === "MessageStore"
                    );
                Patcher.before(
                    MessageCreate,
                    "actionHandler",
                    (_, args: any) => {
                        args[0].message.content = "sex";
                    }
                );
                Patcher.before(
                    MessageUpdate,
                    "actionHandler",
                    (_, args: any) => {
                        args[0].message.content = "sex";
                    }
                );
                Patcher.before(
                    LoadMessages,
                    "actionHandler",
                    (_, args: any) => {
                        args[0].messages = args[0].messages.map((n) => {
                            n.content = "sex";
                            return n;
                        });
                    }
                );
                console.log(`sex delayed start successful.`);
                Toasts.open({
                    content: `sex delayed start successful.`,
                    source: { uri: sex },
                });
            } catch {
                if (attempt < attempts) {
                    console.warn(
                        `sex failed to start. Trying again in ${attempt}0s.`
                    );
                    Toasts.open({
                        content: `sex failed to start trying again in ${attempt}0s.`,
                        source: { uri: sex },
                    });
                    setTimeout(lateStartup, attempt * 10000);
                } else {
                    console.error(`sex failed to start. Giving up.`);
                    Toasts.open({
                        content: `sex failed to start. Giving up.`,
                        source: { uri: sex },
                    });
                }
            }
        };
        setTimeout(lateStartup, 300);
    },
    onStop() {
        Patcher.unpatchAll();
    },
    patches: [],
};

registerPlugin(sexplugin);
