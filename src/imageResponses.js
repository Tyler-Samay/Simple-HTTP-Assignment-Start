const fs = require('fs');

const dankMemes = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMemes = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
    response.write(dankMemes);
    response.end();
}

module.exports.getDankMemes = getDankMemes;