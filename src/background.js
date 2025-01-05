console.debug('background Start');

// test= 1 single menu with onclick 
// test = 2 refresh,remove prevents exception 
// test = 3 shows indentation differences, (no icon for msg menu - fixed in daily)

var testRun = 3;

await((async () => {

	if (testRun == 1) {
		await messenger.menus.create({ id: "Top_Id", title: "test1 - onclick ", contexts: ["message_list"], onclick: test });
	} else if (testRun == 2) {
		await messenger.menus.create({ id: "Top_Id", title: "test1 - onclick ", contexts: ["folder_pane"], onclick: test });
		await messenger.menus.refresh();
		await messenger.menus.removeAll();
	} else if (testRun == 3) {
		await messenger.menus.create({ id: "Top_Id", title: "Menu Top", contexts: ["folder_pane"], visible: true });
		await messenger.menus.create({ id: "sub_1", parentId: "Top_Id", title: "Submenu 1", contexts: ["folder_pane"], onclick: test, visible: true });
		await messenger.menus.create({ id: "sub_1_1", parentId: "sub_1", title: "Submenu 1-1", contexts: ["folder_pane"], onclick: test, visible: true });
		await messenger.menus.create({ id: "sub_2", parentId: "Top_Id", title: "Submenu 2", contexts: ["folder_pane"], onclick: test, visible: true });
	}

	await messenger.LegacyHelper.registerGlobalUrls([
		["resource", "apim", "api/"],
]);

})());

async function test() {
	console.debug('test func');
	let rv = await browser.AsyncPrompts.asyncAlert("API", "testing");

}
