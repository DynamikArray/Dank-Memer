const { GenericImageCommand } = require('../../models/')

module.exports = new GenericImageCommand({
  triggers: ['humanity', 'savehumanity'],
  usage: '{command} <something to save humanity>',
  description: 'idk what to put here tbh',

  requiredArgs: 'You need to include something that will save humanity, try again',
  textLimit: 50,
  textOnly: true
})
