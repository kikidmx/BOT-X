 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241","233268374753";
global.sudo = process.env.SUDO || "2347045035241","233268374753";
global.owner = process.env.OWNER_NUMBER || "0721534466","233268374753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFzQlFnRmlva0VsYzYxR3k2blU5NlpOeGVIdEIrekNsOXNFcVhCMVZsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmtXL0xuVFdqM3FQUTdnbmt4cUd5bmUxeUJ2SUphKzl4Mks5emtkZlJSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTFpPc3czTmNFbytTcVVtbG42ZWFIVUtBRHdDUlFFNnU4OGhTWEpxZlZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3K2NhejRPL1pvamQ0TmwzcVBuejJoMCtXVk13eHNJMDZ0RHZiRVFqUXpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMU0F3VUdPNFZMTlh0dldyRllwbW9DVlNIWVpjZS9FYVA2Mkx0Y1d2SE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBvSE9tR1VzZVRZYTZ3ZlFCZXZ4a3A4bTNQelRMYndMcVNyUW9PV2Q3bVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FtZzdxcDI0V1V2aTdjZktsOGttVUFIMHVwT3FTcVQ0cHI2bVMxZy9rST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjFJWlRveXo0VCtwMVY1K3VTaHFhQkovR3NyMzFET2pSSjhIQWFrQnJsdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYzeHRZRkJBckFEZFByelJ4M25uZVV3Z1JjaS9JZVhnYkJveS9zellNbjBYdzRGNm5BcFd0WmRrRWVkV1phT0VmS29WMHBNb1hwQ01Ybk5zWHdxQkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IjBoVVpRY0lqSkxsdGgxcU1jWFlHRGZCTnNJdTEwQ2hWWldtTThuMWxnMUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktWWjkzcWVNUUZhM3lsTjk1QXVGM2ciLCJwaG9uZUlkIjoiMmQyNDYwZjYtY2E5Yi00ZjY5LWI5NTgtZWU2OTJhOWM0NGQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5OMlRUVENIU1dBeVFZd2wyK2N6VHZGN21FOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWVmRXajRyMTZFdWZlSnVyRmw3ZkxvZE14RmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0YzQTkzOFYiLCJtZSI6eyJpZCI6IjQwNzIxNTM0NDY2OjU4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTytocElCRU12bnZyd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDUEF5Y0lZMnF1T0VxamY1VFZpU0IzazNrbUJDcHJYQ0gyUDlNT1YybmhvPSIsImFjY291bnRTaWduYXR1cmUiOiJZakNaR0tMMGVhcDlvTUJFbFZac2dLZU5IMUljaHNjR0NEc1B1MjJGS0g3eUk0V1FPQ1VxclBxMitGV3Y5T3BEZkxFSXM0ZHRPb2hWUVRaZFNnNDhCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYktzd2xiaEFqbFlPQ3Q3bUJwMzhqcVBwTjgxYk95RGdzaE5rZFZlZ2paQ28xNUpqdTlHd0dhWTlWcEk3OVZ6bVhLUkQwS3RVYXk4OGlzUmlXUEZqQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDcyMTUzNDQ2Njo1OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRandNbkNHTnFyamhLbzMrVTFZa2dkNU41SmdRcWExd2g5ai9URGxkcDRhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3NDcwOTM3fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
