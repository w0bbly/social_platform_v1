$(document).ready(function() {
    let nr_notificacoes = 10;

    for(var index = 0; index < nr_notificacoes; index++) {
        let html = 
            '<div class="feed_topic" id="message_' + index + '">'+
                'Mensagem - ' + index +
                '<ul style="list-style-type:square">'+
                    '<li><a href="/feed">Feed</a></li>'+
                    '<li><a href="/messenger">Messenger</a></li>'+
                    '<li><a href="/about">about</a></li>'+
                '</ul>'+
            '</div>';
        $("#main_feed").append(html);
    }
});

