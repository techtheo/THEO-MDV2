const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_00_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2LFxuICAgICAgICA2MixcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU3LFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInd4T25XbEJqMTZ2VUluMDBWcmRVWTZ3emJwYTNhVm1JVm1UY2dYeldRak09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpBdm9OeldDVG1leFN5c2tiSUFMUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZThmN2Y0NTktNGEzZS00YTQ0LWE0YjktMjY3YzNkOGIzOTBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTE1LFxuICAgICAgMTI4LFxuICAgICAgMTk1LFxuICAgICAgMTcxLFxuICAgICAgMixcbiAgICAgIDM4LFxuICAgICAgMjEsXG4gICAgICAxMzQsXG4gICAgICAyNixcbiAgICAgIDI1MixcbiAgICAgIDExMCxcbiAgICAgIDE5NSxcbiAgICAgIDI0MSxcbiAgICAgIDI0NixcbiAgICAgIDI1MixcbiAgICAgIDE0MyxcbiAgICAgIDQ4LFxuICAgICAgMTIyLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDE3LFxuICAgICAgMTQ3LFxuICAgICAgMzUsXG4gICAgICA1NixcbiAgICAgIDMwLFxuICAgICAgMTc5LFxuICAgICAgODMsXG4gICAgICAxNyxcbiAgICAgIDIxMyxcbiAgICAgIDExNixcbiAgICAgIDEzMCxcbiAgICAgIDE3NCxcbiAgICAgIDIzOSxcbiAgICAgIDY2LFxuICAgICAgNzEsXG4gICAgICAxNTMsXG4gICAgICAxMDcsXG4gICAgICAxMTgsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFJQQzdKOVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDk5NDU3Mjk6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPZG9nd3VcIixcbiAgICBcImxpZFwiOiBcIjEyNzY1MDczOTc4OTkzMDozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUDUvZTBIRU9MVXhyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitKZXU2TGYrK0VBVExCSSt1MWx1Y04rQlFhdDVpdjRjM1gwMzJwelBIem89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWS95cnpYeXdNU0E3UmRTcDlGaWVQRlczb3V3Tmt2WDYyLzVyTWJvZ3p6RlFJNy9PcTV0YWRYNEtFU3IzUmxtbXR3aEJPNGJpVU45VHc2VFZBTmhuQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQjJNbnNqaGNtWmdvR3BlaHJPYTRKL0NhZU1Ed1k3QTVRMTB1VjBJSSt3cTcvT0ZpMDFwRHIvVlhleDJ2enV2K3dsaGRaeUxoTFhaeUlnZk9keTFvQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0OTk0NTcyOTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU1MDI0Mzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
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
