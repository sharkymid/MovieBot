const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
    
    var movie = [];
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;
    
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else if (message.content.startsWith(prefix + "hola")) {
        message.channel.send("Hola que tal?");
    }
    
    var i = 0

    switch (command){
        case "movielist":
            message.channel.send('uwu')
            for(var j =0; j < 2; j++){
                message.channel.send(j + ". " + movie[j])
            }
            break;
        case "movieadd": 
            movie.push(args)
            message.channel.send(movie[i] + " se agrego a la lista");
            break;
        case "movieremove": 
            message.channel.send(movie[i] + " fue removida de la lista")
            removeItemFromArr(movie, args);
            break;

}
});
var removeItemFromArr = ( arr, item ) => {
    var i = arr.indexOf( item );
    i !== -1 && arr.splice( i, 1 );
};

client.login(config.token);   


/*PS C:\Users\Gaston\Desktop\Javascript\MovieBot> node bot.js
(node:10668) UnhandledPromiseRejectionWarning: Error [TOKEN_INVALID]: An invalid token was provided.
    at WebSocketManager.connect (C:\Users\Gaston\Desktop\Javascript\MovieBot\node_modules\discord.js\src\client\websocket\WebSocketManager.js:135:26)
    at Client.login (C:\Users\Gaston\Desktop\Javascript\MovieBot\node_modules\discord.js\src\client\Client.js:221:21)
(node:10668) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by       rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:10668) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
PS C:\Users\Gaston\Desktop\Javascript\MovieBot>*/

