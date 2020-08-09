module.exports = {
	name: 'answer',
  execute(message, args) {
	  answer(message.author, message, args)
	},
}

var table = require("../table")
var usr = table.usr

function answer(author, msg, value){                                                                                                                                                
  c = usr[author.id]["a"]+usr[author.id]["b"]
  if (!value.length){
    msg.reply('You ditched for no reason! Bad!')
    return
  }
  if (String(c) === value[0]){
   usr[author.id]["balance"] += c/2
   msg.reply('Current! You earned $' + c/2)
  } else {
   msg.reply('Incorrect. The correct answer is ' + c + '. But at least you tried')
  }
  usr[author.id]["hour"] ++
  usr[author.id]["answering"] = false
  table.writeFile(usr)
}

