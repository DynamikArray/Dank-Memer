exports.run = getDogPic

async function getDogPic (Memer, msg) {
  const data = await Memer._snek.get('https://boob.bot/api/v2/img/boobs', {headers: {Key: Memer.config.porn}})

  msg.channel.createMessage({
    embed: {
      title: 'Here, take some boobs.',
      color: Memer.randomColor(),
      image: { url: data.body.url },
      footer: { text: 'Free nudes thanks to boobbot & tom <3' }
    }
  })
}

exports.props = {
  name: 'boobies',
  usage: '{command}',
  aliases: ['boobs'],
  cooldown: 1000,
  description: 'See some cute ~~birbs~~ boobs!',
  perms: ['embedLinks'],
  isNSFW: true
}
