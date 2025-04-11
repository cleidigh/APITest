console.debug('background Start');

import  * as menus from "/Modules/menus.mjs";
import  * as export1 from "/Modules/export.mjs";

export1.exp1()
menus.test();
//misc.help()
messenger.WindowListener.registerChromeUrl([
	["content", "apitest2", "chrome/"]
]);

async function test() {
	console.debug('test func');
	let rv = await browser.AsyncPrompts.asyncAlert("API", "testing");

}
