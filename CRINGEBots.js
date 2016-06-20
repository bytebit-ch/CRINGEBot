var Discord = require("discord.js");
var Client = new Discord.Client();
var prefix = "-cringe "

Client.loginWithToken("MTkwMTY1NzIzODAzNDE4NjI0.CjnxIQ.hNxTgFEvsAmA1EhbPobrcA5WyzQ");

Client.on("message", function(message) {
    if(message.content ===  prefix + "toriel") {
		Client.reply(message, "https://i.redditmedia.com/27QBUIguENGt6DWNw8yPkFS9xVQ1wLyp0Un001NKDVQ.jpg?w=750&s=d24465fa17d068abc0388b5cb8b5ac19");
	}
	
	if(message.content === prefix + "temmie") {
		Client.reply(message, "https://i.ytimg.com/vi/1LIcuQorgA8/hqdefault.jpg");
	}
	
	if(message.content === prefix + "badtime") {
		Client.reply(message, "http://i1.kym-cdn.com/photos/images/original/001/027/703/0a1.png");
	}
	
	if(message.content === prefix + "pony") {
		Client.reply(message, "http://66.media.tumblr.com/569cb3b4c4d4f18639ba24ffa28f5fc8/tumblr_nzfmhh0XYD1tgb6wyo1_1280.png");
	}
	
	if(message.content === prefix + "undertail") {
		Client.reply(message, "https://lh3.googleusercontent.com/-0js9N6_FLqA/V1hm4vh8BEI/AAAAAAAAAxc/FDwguthLQrAqwKJunpVtljmqIKYcUwzEQCL0B/w326-h290-no/AngrySansBlueStop.png");
		Client.reply(message, "Your Searching porn, Dont you?");
    }
	
	if(message.content === prefix + "kiss") {
		Client.reply(message, "http://orig10.deviantart.net/bc59/f/2015/343/e/b/asgore_x_asriel_undertale_by_undertalefnafawesome-d9jlg29.png");
	}
	
	if(message.content === prefix + "sans") {
		Client.reply(message, "https://i.ytimg.com/vi/iLngb8DgttI/hqdefault.jpg");
	}
	
	if(message.content === prefix + "asriel") {
		Client.reply(message, "http://img1.joyreactor.cc/pics/post/Undertale-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Frisk-Undertale-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8-2638803.jpeg");
	}
	
	if(message.content === prefix + " mettaton") {
		Client.reply(message, "http://66.media.tumblr.com/d66aaf851e7396d464157651f07eb20f/tumblr_o5vz9glCVX1vqqpo2o1_500.png")
	}
});
