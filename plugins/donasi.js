let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • SMARTFREN  [6285896677508]
│ • SMARTFREN [62887437035456]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [62887437035456]
│ • Gopay [62887437035456]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
