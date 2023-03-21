//setup server, learn how to get node.js up and running
//use the frameworks as seen in other videos to link up chat gpt
    //choose an API provider
    //create an account with open AI to setup the API in .env
    //integrate API into website
//get it to work in the most basic sense (can ask a question, and get a response)
//then build out with dnd specific attributes
//learn the prompt engineering to make the information coherent
//make the input based on fields/hidden text in the source that configures the text to produce a relevant output
// see how this goes, then try to add in the stable diffusion/other AI generated art aspect`

//const http = require('http')
//const fs = require('fs')
//const port = 3000
const {Configuration, OpenAIApi} = require("openai")
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.open_api_key,
})
const openAI = new OpenAIApi(configuration);

async function runCompletion() {
    const completion = await openAI.createCompletion ({
        model: "text-davinci-003",
        prompt: "What is the largest mountain in alaska?",
    })
    console.log(completion.data.choices[0].text)
}

runCompletion();

//!!MUST HAVE STEALTH VPN ON!!

// const server = http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     fs.readFile('index.html', function(error, data) {
//         if(error) {
//             res.writeHead(404)
//             res.write('Error: File not found')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// })

// server.listen(port, function(error){
//     if (error) {
//         console.log('something went wrong', error)
//     } else {
//         console.log("server is listening on port " + port)
//     }
// })