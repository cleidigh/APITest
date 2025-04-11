// menus
import  * as export1 from "/Modules/export.mjs";



await messenger.menus.create({ id: "Top_Id", title: "Menu Top", contexts: ["folder_pane"], visible: true });
await messenger.menus.create({ id: "sub_1", parentId: "Top_Id", title: "Submenu 1", contexts: ["folder_pane"], onclick: test, visible: true });
await messenger.menus.create({ id: "sub_1_1", parentId: "sub_1", title: "Submenu 1-1", contexts: ["folder_pane"], onclick: export1.exp1, visible: true });
await messenger.menus.create({ id: "sub_2", parentId: "Top_Id", title: "Submenu 2", contexts: ["folder_pane"], onclick: test, visible: true });

export function test() {
  console.log("menus test")
}