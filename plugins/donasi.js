let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl  [6287762758045]
│ • Telkomsel [6282239202895]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [6282239202895]
│ • Gopay [6282239202895]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
