const {Client, AuthStrategy, LocalAuth} = require("whatsapp-web.js");
const qrterminal=require("qrcode-terminal")



const client =new Client({
    authStrategy : new LocalAuth({
        dataPath:"base64_session"
    })
});

client.on("ready", () => {
    console.log("✅ WhatsApp client is ready! Session restored.");
});
const myqr = (qr_parameter) => {
    console.log("QR received:", qr_parameter);
    qrterminal.generate(qr_parameter,{small:true})
};

const my_messages=(chat)=>{
    
    console.log(`${chat.from} : ${chat.body} ${chat.getContact().pushname} `)

}



client.on("qr", myqr);
client.on("message",my_messages)

client.initialize(); 