
'use strict';

const Alexa = require('alexa-sdk');

const handlers = {

    'LaunchRequest' : function() {
        const videoSource = 'https://hlsvod-akrsc.qa.media.lolesportsplayer.com/media/hls/2017/11/03/3cadb9d3-8792-49b0-a43b-5fbb60368e64/1509740292840/master_wired60.m3u8';
        const metadata = {
            'title': 'Sample VOD',
            'subtitle': 'Partner: Launchpad'
        };
        this.response.playVideo( videoSource, metadata );
        this.emit( ':responseReady' );
    },
    'SessionEndedRequest' : function() {
        this.response.speak( "Goodbye" );
        this.emit( ':responseReady' );  
    }
};



exports.videoTestHandler = function(event, context, callback) {

    console.info( "[videoTestHandler] new invokation" );
    console.info( "[videoTestHandler] event: " + JSON.stringify( event ));


    const alexa = Alexa.handler( event, context );                
    alexa.appId = 'amzn1.ask.skill.688c5374-01dc-47c0-ac94-84e0745eb5f3'; 
    alexa.registerHandlers( handlers );
    alexa.execute();

}



