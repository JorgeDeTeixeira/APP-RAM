const http = require("http");
const host = `http://localhost`;
const PORT = 3000;
const stats = require("./appRam.js");

const server = http.createServer((req, res) => {
    let url = req.url;

    if (url === `/stats`) {
        res.end(JSON.stringify(stats, null, 4));
    } else {
        res.end(`<h1>Seja bem vindo(a)!</h1>`);
    }
});

server.listen(PORT, console.log(`Server is running in ${host}:${PORT}`));
