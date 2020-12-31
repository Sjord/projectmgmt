// Mozilla User Preferences for project PROJECT

// Save any downloaded files to the project directory, instead of the default Downloads directory.
user_pref("browser.download.folderList", 2);
user_pref("browser.download.dir", "PROJECTDIR");

// Show the current project name in the URL bar
user_pref("browser.urlbar.placeholderName", "PROJECT");

// Don’t suggest search terms in the URL bar
user_pref("browser.urlbar.suggest.searches", false);

// Enable the MessPostage browser extension:
user_pref("extensions.webextensions.uuids", "{\"webcompat@mozilla.org\":\"6d303bcd-47a1-584c-a42b-3735f351d811\",\"screenshots@mozilla.org\":\"459d5770-1566-154f-b862-7422f80ae902\",\"{cd982b7a-ece2-4476-a2bc-5b0d085ccbcd}\":\"1364d876-8814-2749-9a9e-c5a82c6a2b2c\"}");

// Use Burp as proxy
user_pref("network.proxy.ftp", "localhost");
user_pref("network.proxy.ftp_port", PORT);
user_pref("network.proxy.http", "localhost");
user_pref("network.proxy.http_port", PORT);
// user_pref("network.proxy.share_proxy_settings", true);
// user_pref("network.proxy.socks", "localhost");
// user_pref("network.proxy.socks_port", PORT);
user_pref("network.proxy.ssl", "localhost");
user_pref("network.proxy.ssl_port", PORT);
user_pref("network.proxy.type", 1);

// Don’t warn about closing multiple tabs
user_pref("browser.tabs.warnOnClose", false);

// Don't check if Firefox is the default browser
user_pref("browser.shell.checkDefaultBrowser", false);
