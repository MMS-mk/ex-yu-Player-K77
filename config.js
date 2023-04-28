/*
|--------------------------------------------------------------------------
| Конфигурација на сктирптата - Trajce Gogov
|--------------------------------------------------------------------------
|
| За да го конфигурирате стримот треба да ги промените овие сетинзи
|
*/

var settings = {
    'radio_name': 'Kanal77', 
    'url_streaming': 'https://radiocnd.mms.mk/proxy/webradio1metadata',
    'url_streaming2': 'https://radiocnd.mms.mk/proxy/webradio1metadata/stream', 
    'streaming_type': 'shoutcast', 
    'api_key': 'cae6a7d0071ec26ee581082dc65eefdf', 
    'historic': true,
    'next_song': false, 
    'default_cover_art': 'img/bg-capa.png', 
};

const RADIO_NAME = settings.radio_name;
const URL_STREAMING = settings.url_streaming;
const URL_STREAMING2 = settings.url_streaming2;
const STREAMING_TYPE = settings.streaming_type;
const API_KEY = settings.api_key;
const HISTORIC = settings.historic;
const NEXT_SONG = settings.next_song;
const DEFAULT_COVER_ART = settings.default_cover_art;
