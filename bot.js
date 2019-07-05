const {Client, Attachment, RichEmbed, Guild, GuildMember, MessageMentions, Role} = require('discord.js');
const bot = new Client();
const superagent = require('superagent');
const PREFIX = '​';
const testpre = '-';

bot.on('ready', () =>{
	console.log('Night Raid is on.');
	bot.user.setActivity('raiding on the night.', { type: ('PLAYING')})
})

bot.on('guildMemberAdd', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "wɇƚ¢¤₥ɇ-ƀ¤¤ꞩʈ");
	if(!channel) return;
	channel.sendMessage(`Welcome in Night Raid, ${member}. have fun raiding.`);
})

bot.on('guildMemberRemove', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "wɇƚ¢¤₥ɇ-ƀ¤¤ꞩʈ");
	if(!channel) return;
	channel.sendMessage(`You were not enough for Night Raid, ${member}...`)
})
bot.on('message', msg=>{

	mention = msg.mentions.users.first();

	if(msg.content === 'I love you Tatsumi!'){
		if(msg.author.id === '596034659419422739'){
			const esdeath = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596568910036467721/tenor.gif');
			msg.channel.sendMessage("Tatsumi... :heart:");
			msg.channel.sendMessage(esdeath);
		}
		else{
			return;
		}
	}
	if(msg.content === '...'){
		if(msg.author.id === '596034659419422739'){
			const esdeath = new Attachment('https://cdn.discordapp.com/attachments/596552545095254032/596587075302850560/image0.gif');
			msg.channel.sendMessage("I'm going to torture you to death. >:)");
			msg.channel.sendMessage(esdeath);
		}
		else{
			return;
		}
	}
	if(msg.content === 'How are my boobs, Tatsumi?'){
		if(msg.author.id === '596034659419422739'){
			const esdeath = new Attachment('https://cdn.discordapp.com/attachments/596552545095254032/596587280395927592/image0.gif');
			msg.channel.sendMessage("So? How are them?");
			msg.channel.sendMessage(esdeath);
		}
		else{
			return;
		}
	}
	if(msg.content === 'I want to do it with you, Tatsumi...'){
		if(msg.author.id === '596034659419422739'){
			const esdeath = new Attachment('https://cdn.discordapp.com/attachments/596552550027755525/596589057182531584/image0.jpg');
			msg.channel.sendMessage("Let's have fun...");
			msg.channel.sendMessage(esdeath);
		}
		else{
			return;
		}
	}
	if(msg.content === 'I love you Esdeath!'){
		if(msg.author.id === '285962307987701762'){
			const tatsumi = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596570280101543936/wpid-screenshot_2014-11-15-18-18-02-1.png');
			msg.channel.sendMessage("Esdeath. :heart:");
			msg.channel.sendMessage(tatsumi);
		}
		else{
			return;
		}
	}
	if(msg.content === 'Incursio!'){
		if(msg.author.id === '285962307987701762'){
			const tatsumi = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596585226550116368/tenor_4.gif');
			msg.channel.sendMessage(tatsumi);
		}
		else{
			return;
		}
	}
	if(msg.content === 'Let me kiss you Tatsumi. O3O'){
		if(msg.author.id === '201584405116878848'){
			const lubbok = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596577303509860382/akame-ga-kill-funny-gif-4.gif');
			msg.channel.sendMessage(lubbok);
		}
		else{
			return;
		}
	}
	if(msg.content === ':3'){
		if(msg.author.id === '162214121822093313'){
			const leone = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596579161942786068/tumblr_n98t3jkF421r0ifk5o1_1280.gif');
			msg.channel.sendMessage(leone);
		}
		else{
			return;
		}
	}
	if(msg.content === 'Tatsumi...'){
		if(msg.author.id === '162214121822093313'){
			const leone = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596571495501791260/tenor_1.gif');
			msg.channel.sendMessage("Ta- tsu- mi-...");
			msg.channel.sendMessage(leone);
		}
		else{
			return;
		}
	}
	if(msg.content === 'Me go cry...'){
		if(msg.author.id === '333357946744602647'){
			const akame = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596572201163948043/WeakEquatorialHermitcrab-size_restricted.gif');
			msg.channel.sendMessage(akame);
		}
		else{
			return;
		}
	}
	if(msg.content === 'Ready to die?'){
		if(msg.author.id === '333357946744602647'){
			const akame = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596574044497903616/1519679125_e9926172148a.gif');
			msg.channel.sendMessage(akame);
		}
		else{
			return;
		}
	}
	if(msg.content === "Please... Don't die Tatsumi..."){
		if(msg.author.id === '333357946744602647'){
			const akame = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596576058472529920/3f71a113af26224cbfb30bdd9894042a.gif');
			msg.channel.sendMessage(akame);
		}
		else{
			return;
		}
	}
	if(msg.content === "Adios... Esdeath and Tatsumi."){
		if(msg.author.id === '333357946744602647'){
			const akame = new Attachment('https://cdn.discordapp.com/attachments/596552545095254032/596577319607336961/75f1126c6b2ec1969fc2eb3900b587272253b146_hq.gif');
			msg.channel.sendMessage(akame);
		}
		else{
			return;
		}
	}
	if(msg.content === "*Staring intensely.*"){
		if(msg.author.id === '216320185873727488'){
			const kurome = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596582707752861696/tenor_2.gif');
			msg.channel.sendMessage(kurome);
		}
		else{
			return;
		}
	}
	if(msg.content === "Grand Chariot!"){
		if(msg.author.id === '375093545809477633'){
			const wave = new Attachment('https://cdn.discordapp.com/attachments/574383177418670080/596583737207160858/tenor_3.gif');
			msg.channel.sendMessage(wave);
		}
		else{
			return;
		}
	}
	if(msg.content === "-help"){
		const embed = new RichEmbed()
		.setTitle('Available Commands :')
		.addField('General commands', "'-help' : Shows you all available commands.\n'-meme' : Sends memes.")
		.addField('Moderation commands', "'-kick' : Kicks a specific user from the server.\n'-ban' : Ban a specific user from the server.\n'-unban' : Unban a specific user from the server (Only with the discord ID).\n'-purge' : Pruge a specific amount of messages on the channel.\n'-announcement' : Makes a public announcement to the server.")
		.addField("Esdeath's commands", "'I love you Tatsumi' : Show your love to your Tatsumi.\n'...' : Somebody is about to have a bad time...\n'How are my boobs, Tatsumi?' : Esdeath want to do fan service for her Tatsumi.\n'I want to do it with you, Tatsumi...' : Tatsumi didn't expect that...")
		.addField("Tatsumi's commands", "'I love you Esdeath!' : Show your love to your Esdeath.\n'Incursio!' : Show your real power to everyone.")
		.addField("Lubbock's commands", "'Let me kiss you Tatsumi. O3O' : Why though?")
		.addField("Leone's commands", "':3' : OwO.\n'Tatsumi...' : Oh no... Tatsumi cannot handle even more fan services!")
		.addField("Akame's commands", "'Me go cry...' : Everyone knows that Akame cries a lot...\n'Ready to die?' : She has no mercy.\n'Please... Don't die Tatsumi...' : Yeah I know... It's not the only girl that loves him.\n'Adios... Esdeath and Tatsumi.' : They die. Big spoiler.")
		.addField("Kurome's commands", "'*Staring intensely.*' : Please stop...")
		.addField("Wave's commands", "'Grand Chariot!' : Another badass Teigu.")
		.setColor(0x160033)
		msg.channel.sendEmbed(embed);
	}
	if(msg.content === "-roles"){
		const embed = new RichEmbed()
		.setTitle('Night Raid roles :')
		.addField('All tooken roles', "Esdeath (Kideath)\nTatsumi (LxnelyKing)\nLubbock (Ø₱)\nLeone (AkimboDice)\nAkame (Fridy)\nKurome (Naipeu)\nWave (ℝ𝔹𝕏𝟝𝟘𝟘𝟘)\n \nPlease contact Fridy#8811 to claim an unclaimed character.")
		.setColor(0x160033)
		msg.channel.sendEmbed(embed);
	}
	if(msg.content === "-meme"){
		const randomPuppy = require('random-puppy');
		const snekfetch = require('snekfetch');
		let reddit = [
			"meme",
			"animemes",
			"MemesOfAnime",
			"animememes",
			"AnimeFunny",
			"dankmemes",
			"dankmeme",
			"wholesomememes",
			"MemeEconomy",
			"meirl",
			"me_irl",
			"2meirl4meirl"
		];
		let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];
		msg.channel.startTyping();
		randomPuppy(subreddit).then(url =>{
			snekfetch.get(url).then(async res =>{
				await msg.channel.sendMessage({
					files: [{
						attachment: res.body,
						name: 'meme.png'
					}]
				}).then(msg.channel.stopTyping());
			});
		});
	}
	let args = msg.content.substring(PREFIX.length - 1).split(" ");
	switch(args[0]){
		case '-purge':
			const command = args.join(" ");
			if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("You don't have the permission to purge messages!");
			if(!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("I don't have the allowed permission to purge messages!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a number of messages to be purged!');
			msg.channel.bulkDelete(args[1]);
		break;
		case '-announcement':
			if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.sendMessage("You don't have the permission to make an announcement!");
			if(!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.channel.sendMessage("I don't have the allowed permission to make an announcement!");
			if(!args[1]) return msg.channel.sendMessage('What are you trying to announce?')
			const aMessage = args.join(" ").slice(14);
			const achannel = bot.channels.find(channel => channel.name === "₳ᵰᵰ¤ᵾᵰ¢ɇ₥ɇᵰʈ");
			const aAuthor = msg.author.username
			const agif = new Attachment('https://media.discordapp.net/attachments/596552545095254032/596560337533272084/1486990413_Flag.gif');
			if(!achannel) return;
			msg.channel.bulkDelete(1);
			achannel.sendMessage('@everyone \n \n' + aMessage + '\n \n' + 'Announcement made by ' + aAuthor + '.')
			achannel.sendMessage(agif)
		break;
		case '-kick':
			const tuser = msg.mentions.users.first();
			const kreason = args.join(" ").slice(28);
			if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to kick someone!");
			if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to kick someone!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			if(tuser){
				const member = msg.guild.member(tuser)
				if(member){
					if(!kreason){
						member.kick('You were kicked.');
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(kembed);
					}
					else{
						member.kick(kreason);
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", kreason);
						msg.channel.sendEmbed(kembed);
					}
				}
			}
		break;
		case '-ban':
			if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to ban someone!");
			if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to ban someone!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			const user = msg.mentions.users.first();
			const breason = args.join(" ").slice(27);
			if(user){
				const member = msg.guild.member(user)
				if(member){
					if(!breason){
						member.ban('You were banned.');
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(bembed);
					}
					else{
						member.ban(breason);
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", breason);
						msg.channel.sendEmbed(bembed);
					}
				}
			}
		break;
		case '-unban':
			if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to unban someone!");
			if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to unban someone!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a user ID!')
			msg.guild.unban(args[1])
			const uembed = new RichEmbed()
			.setTitle('User has been unbanned!')
			msg.channel.sendEmbed(uembed);
		break;
	}
})

bot.login(process.env.BOT_TOKEN);
