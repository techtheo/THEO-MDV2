const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || " mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349134983467";




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


global.SESSION_ID = process.env.SESSION_ID ||  
"SUHAIL_13_41_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT3BjNGJkem1tbGtyNGxPOU5CdlJ0ano5YXUrOUoyeE5KOGhWWkt4aXQvdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVGxfSG1tdjdSZnE2THRGUTh4enpKQVwiLFxuICBcInBob25lSWRcIjogXCI3ZDAyNDA3Ny04YjUyLTQ4NTctYTQ3Yy1hYjExNWZhNmZjYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMjExLFxuICAgICAgNSxcbiAgICAgIDIwMyxcbiAgICAgIDE3MixcbiAgICAgIDUsXG4gICAgICAyMTIsXG4gICAgICAxNjgsXG4gICAgICA1NSxcbiAgICAgIDE5MixcbiAgICAgIDI1NSxcbiAgICAgIDMwLFxuICAgICAgMTA0LFxuICAgICAgMTU0LFxuICAgICAgNjQsXG4gICAgICAxNTksXG4gICAgICAxMTQsXG4gICAgICAxNzMsXG4gICAgICAxODAsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMTYyLFxuICAgICAgMTY4LFxuICAgICAgOTcsXG4gICAgICA3MSxcbiAgICAgIDExNCxcbiAgICAgIDE1OSxcbiAgICAgIDE2MSxcbiAgICAgIDIzNixcbiAgICAgIDEwOCxcbiAgICAgIDIzLFxuICAgICAgMTc5LFxuICAgICAgOTYsXG4gICAgICAyMSxcbiAgICAgIDE4LFxuICAgICAgMTcyLFxuICAgICAgMTQsXG4gICAgICAyMjMsXG4gICAgICA5NixcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vbWdGc1E4OEcvdEFZWUR5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRlhQbFZ1ek9NVTh1Y3JId3ZOamNOaU53b1lzTEpZVTd5WFdJQWZzemVDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEYnQrZVIzOUFiNnhzbXNJcldJYzFhZmJ1VU55RmErUXZhQ2k2MDNqY2ErWDQ1dTRqQ24xRFN0L3RxVUtWRzVLSDAzOStxUyt0SUVQUzRObm1vUzhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2RERMdVJod0ZpWjNvclJGeXpGTEprZ1ZEamJ3NDUwNERUd3hPcE5jcE01VGZJdnVxa0JBcHBpdTV1Z0NyTVQwamZ4Sm1VUU9rcGFEa0dXcVlOUjVndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzQ5ODM0Njc6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGVvXCIsXG4gICAgXCJsaWRcIjogXCIxMzc5MTQ5MjM2MjM2OTo2MEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzQ5ODM0Njc6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzA1Mjc0XG59Igp9" 
 // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "Theo_Idolo",


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
