const express   = require('express');
const $         = jQuery = require('jquery');
let app = new express();

app.use(express.static(__dirname + '/js'));
app.use('/js',      express.static(__dirname + '/source/js/'));
app.use('/style',   express.static(__dirname + '/source/style/'));
app.use('/jquery',  express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/source/site/home/index.html');
});

app.get('/feed', function(req, res) {
    res.send('Feed do pess.<p><a href="/">BACK</a></p>');
});

app.get('/messenger', function(req, res) {
    res.send('Messenger do pess.<p><a href="/">BACK</a></p>');
});

app.get('/about', function(req, res) {
    res.send('Sobre o pess.<p><a href="/">BACK</a></p>');
});

// Corre top to bottom, se não encontrar nenhuma das outras páginas, abre este request
app.get('*', function(req, res) {
    res.send('404<p><a href="/">BACK</a></p>');
});

let port = 12345;
app.listen(port, function() {
    console.log('Servidor a ouvir localhost: ' + port);

    // Nome do diretorio onde está os ficheiros
    console.log(__dirname);
})