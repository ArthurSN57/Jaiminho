var Eris = require('eris');
var bot = new Eris("NDg0MDIxNzI0NjM2MTE5MDUx.Dmb9KQ.1zmeF_y2WiJwQBh424f-sDQl9to");

bot.on("ready", () =>{
	console.log("Tangamandápio é linda no verão");
});

bot.on("messageCreate", (msgAnime) =>{
	if(msgAnime.content.indexOf("j!animes") == 0){
		bot.createMessage("483677961812181002", "Olá, " + msgAnime.author.mention + " te trouxe um carta!");
	}
});

bot.on("messageCreate", (msgGames) =>{
	if(msgGames.content.indexOf("j!games") == 0){
		bot.createMessage("483105091482681344", "Olá, " + msgGames.author.mention + " Tangamandápio está linda como sempre!");
	}
});

bot.on("messageCreate", (msgTv) =>{
	if(msgTv.content.indexOf("j!tv") == 0){
		bot.createMessage("483677876705558548", "Olá, " + msgTv.author.mention + " eu fiz Proerd!");
	}
});

bot.on("messageCreate", (msgTech) =>{
	if(msgTech.content.indexOf("j!tech") == 0){
		bot.createMessage("483678025628516352", "Olá, " + msgTech.author.mention + " tudo é culpa do Chaves!");
	}
});

bot.on("messageCreate", (msgSpoiler) =>{
	if(msgSpoiler.content.indexOf("j!spoiler") == 0){
		bot.createMessage("483677997124157461", "Olá, " + msgSpoiler.author.mention + " que preguiça!");
	}
});

bot.on("messageCreate", (msgMusica) =>{
	if(msgMusica.content.indexOf("j!musica") == 0){
		bot.createMessage("483684865464860687", "Olá, " + msgMusica.author.mention + " tudo é culpa do Chaves!");
	}
});

bot.on("messageCreate", (msgHelp) =>{
	if(msgHelp.content.indexOf("j!help") == 0){
		bot.createMessage(msgHelp.channel.id, "Olá, " + msgHelp.author.mention + " aqui estão os comandos básicos:\nj!animes <nome> - Para receber uma notícia de um anime.\nj!games <nome> - Para receber uma notícia de um game.\nj!tv <nome> - Para receber uma notícia de um filme/série.\nj!tech - Para receber uma notícia sobre o mundo tech.\nj!spoiler <nome> - Para receber um spoiler sobre o que você quiser.\nj!musica <nome cantor(a)> - Para receber uma notícia sobre o(a) cantor(a) ou banda.");
	}
});

bot.connect();
