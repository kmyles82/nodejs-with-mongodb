const http = require('http');
const fs = require('fs');

const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const homePage = fs.readFileSync('index.html')

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/about') {
        return res.end(aboutPage)
    } else if (req.url === '/contact') {
        return res.end(contactPage)
    } else if (req.url === '/') {
        return res.end(homePage)
    } else {
        res.writeHead(404)
        res.end('This page was not found')
    }

    
})

server.listen(3000)