const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_57_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjExLFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEWE94Y2RVejF6SjNsUzZDWHlUaWVrd3ltTUdIT2kvYk5neEFEWkdGYW1zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDNnk5cUh1cFFCdWttcVRtM2VaaURBXCIsXG4gIFwicGhvbmVJZFwiOiBcImUzOWVkMzEyLTBhMGUtNGU0ZC1iZjZhLTM2MGJiMmRjZWM4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAxLFxuICAgICAgMjQ0LFxuICAgICAgMTksXG4gICAgICA1MyxcbiAgICAgIDIxLFxuICAgICAgMTYzLFxuICAgICAgMTg3LFxuICAgICAgMTYzLFxuICAgICAgMTQsXG4gICAgICAzLFxuICAgICAgNjcsXG4gICAgICAxMzIsXG4gICAgICA3OCxcbiAgICAgIDIyNixcbiAgICAgIDEwLFxuICAgICAgMTE3LFxuICAgICAgMTY5LFxuICAgICAgMzcsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMTY0LFxuICAgICAgMjQ3LFxuICAgICAgOTQsXG4gICAgICAyNTIsXG4gICAgICAyMTYsXG4gICAgICAxOSxcbiAgICAgIDIyOCxcbiAgICAgIDcxLFxuICAgICAgMTg0LFxuICAgICAgNzcsXG4gICAgICAxNTYsXG4gICAgICAxNixcbiAgICAgIDEyNSxcbiAgICAgIDE1LFxuICAgICAgMTYsXG4gICAgICAyMzksXG4gICAgICAxNDksXG4gICAgICAyMzMsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5RTJYSzdNUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDk4MzQ2Nzo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRoZW9cIixcbiAgICBcImxpZFwiOiBcIjEzNzkxNDkyMzYyMzY5OjcyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vbWdGc1FzcWl1dFFZWUd5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRlhQbFZ1ek9NVTh1Y3JId3ZOamNOaU53b1lzTEpZVTd5WFdJQWZzemVDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVS1BwTUJiOTM2NUUycWxSeWxYdW03RlpBVzdVcTlxK2JVZ3FveXRJSzN3cmdGUitXa0NHZWVOMDJ4YWRYQVZNWUtjWU90dGVwQ0FnM2RCQWNEbldEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXRW9lY1dYVVRxSWdxNlVXWENzR2t4T3NDbWZYVDNZUWMvbHNHVHRVL3hWWmpDVnlJcVRMaUxzUVV4QmJxQ3hrZUlLUnBpeEFnZlVmbzI4SStWZ3dndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM0OTgzNDY3OjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUyMDYzNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
