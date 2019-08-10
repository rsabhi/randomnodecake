const http = require('http');
const filesys = require('fs');

const server = http.createServer((reqMsg, respMsg) => {
    //console.log(reqMsg);
    //console.log(reqMsg.url, reqMsg.method, reqMsg.headers);

    const url = reqMsg.url;
    const method = reqMsg.method;
    if (url === '/'){
    respMsg.write('<html>');
    respMsg.write('<head> <title>My nodjs title</title></head>');
    respMsg.write('<body> <form action="/machu" method="POST"><input type="text" name="machu"><button type="submit">Send </button></form> </body>');
    respMsg.write('</html>');
    return respMsg.end();
    }
    if (url === '/machu' && method === 'POST') {
        const body=[];
        reqMsg.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // call back function
        reqMsg.on('end', () =>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            filesys.writeFileSync('message.txt', message);


        });

        respMsg.statusCode = 302;
        respMsg.setHeader('Location', '/');
        return respMsg.end();
    }



    respMsg.setHeader('Content-Type', 'text/html')
    respMsg.write('<html>');
    respMsg.write('<head> <title>My nodjs title</title></head>');
    respMsg.write('<body> Nodejs html page a trial </body>');
    respMsg.write('</head>');
    respMsg.write('</html>');
    respMsg.end();

});

server.listen(3000);