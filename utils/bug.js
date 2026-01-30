async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Join Our WhatsApp Channel",
                    body: " 𓆩 wxyzcosinus 𓆪 ", // mettez votre nom 
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029VbC27Qy4dTnRtous0T2p`,// ici vous pouvez mettre le lien de votre chaîne WhatsApp, groupe ou autre 
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;