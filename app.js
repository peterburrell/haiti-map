const twins = [
    { church: 'Basilica of St. Mary of the Immaculate Conception, Norfolk', twin: 'Bassin Zim Chapel, Papaye', lat: 19.164, lng: -71.986 },
    { church: 'Blessed Sacrament, Harrisonburg', twin: 'St. Isidore, Anse-&agrave;-Galets', lat: 18.8317, lng: -72.8642 },
    { church: 'Cathedral of the Sacred Heart, Richmond', twin: 'St. Paul\'s Chapel of Sacred Heart, Carissade', lat: 19.133, lng: -72.083 },
    { church: 'Catholic Community of Lynchburg College', twin: 'Matenwa Learning Center, La Gonave', lat: 18.809, lng: -72.984 },
    { church: 'Christ the King, Abingdon', twin: 'St. Louis King of France, Pointe-&agrave;-Raquettes', lat: 18.7833, lng: -73.0667 },
    { church: 'Church of St. Therese, Chesapeake', twin: 'Maison Fortune Orphanage, Hinche', lat: 19.14188, lng: -72.0 },
    { church: 'Church of the Good Shepherd, Smithfield', twin: 'St. Anthony of Padua, Croix Fer', lat: 18.856, lng: -71.851 },
    { church: 'Church of the Holy Angels, Portsmouth', twin: 'St. Peter, Roy Sec', lat: 18.8928, lng: -71.8378 },
    { church: 'Church of the Holy Family, Virginia Beach', twin: 'St. Jude, Baptiste', lat: 18.8, lng: -71.783 },
    { church: 'Church of the Holy Spirit, Virginia Beach', twin: 'Our Lady of Mt. Carmel, Saut D\'Eau', lat: 18.8222, lng: -72.2164 },
    { church: 'Church of the Redeemer, Mechanicsville', twin: 'AFAL womens organization, Lascahobas', lat: 18.83243, lng: -71.93098 },
    { church: 'Church of the Resurrection, Portsmouth', twin: 'St. Peter, Roy Sec', lat: 18.8928, lng: -71.8378 },
    { church: 'Church of the Sacred Heart, Prince George County', twin: 'St. Joseph, Marche Canard', lat: 18.7833, lng: -72.0333 },
    { church: 'Church of the Transfiguration, Fincastle', twin: 'St. Peter and Paul, Marmont', lat: 19.067, lng: -71.983 },
    { church: 'Holy Comforter, Charlottesville', twin: 'St. Michael\'s Parish, Saltadere', lat: 19.133, lng: -71.733 },
    { church: 'Incarnation, Charlottesville', twin: 'Little Brothers & Sisters of the Incarnation, Pandiassou', lat: 19.13363, lng: -72.04674 },
    { church: 'Maison Fortune Orphanage Foundation, Chesapeake', twin: 'Maison Fortune Orphanage, Hinche', lat: 19.14188, lng: -72.0 },
    { church: 'Newman Community at VA Tech, Blacksburg', twin: 'St. Rose of Lima School, Jacsonville', lat: 19.3603, lng: -72.1483 },
    { church: 'Our Lady of Nazareth, Roanoke', twin: 'Ecole Normale de Hinche, Papaye', lat: 19.16396, lng: -71.98575 },
    { church: 'Our Lady of Perpetual Help, Salem', twin: 'Sacre Coeur,  Cabestor', lat: 18.867, lng: -72 },
    { church: 'Our Lady of the Blessed Sacrament, West Point', twin: 'Sts. Peter and Paul, Marmont', lat: 19.067, lng: -71.983 },
    { church: 'Prince of Peace, Chesapeake', twin: 'Ecole Louverture-Cleary Croix-des-Bouquets, Maison Fortune Orphanage Hinche', lat: 19.14188, lng: -72.0 },
    { church: 'Resurrection, Moneta', twin: 'Jesus The Good Sheperd Orphanage, Croix-des-Bouquets', lat: 18.590, lng: -72.240 },
    { church: 'Sacred Heart, Covington', twin: 'St. Rose of Lima Chapel, Matabonite', lat: 19.3603, lng: -72.1483 },
    { church: 'Sacred Heart, Norfolk', twin: 'St. Gabriel\'s, Lascahobas', lat: 18.83019, lng: -71.93588 },
    { church: 'St. Ann, Ashland', twin: 'Our Lady Of Perpetual Help, Dubuisson', lat: 18.85, lng: -72.167 },
    { church: 'St. Anne, Bristol', twin: 'St.  Francis of Assisi, Cerca La Source', lat: 19.1667, lng: -71.7833 },
    { church: 'St. Bede, Williamsburg', twin: 'St. Joseph, Thomond', lat: 19.02, lng: -71.97 },
    { church: 'St. Bridget, Richmond', twin: 'St. Paul Chapel\'s of Sacred Heart, Carissade', lat: 19.133, lng: -72.083 },
    { church: 'St. Edward the Confessor, Richmond', twin: 'Sainte-Famille, Cerca Carvajal', lat: 19.25, lng: -71.95 },
    { church: 'St. Elizabeth, Richmond', twin: 'New Jerusalem School for the Deaf, Mirebalais', lat: 18.83, lng: -72.1 },
    { church: 'St. Francis of Assisi, Rocky Mount', twin: 'St. Anne, Trianon', lat: 18.753, lng: -72.148 },
    { church: 'St. Francis of Assisi, Staunton', twin: 'St. Louis King of France, Pointe-&agrave;-Raquettes', lat: 18.7833, lng: -73.0667 },
    { church: 'St. Gregory the Great, VA Beach', twin: 'Seminary, Hinche & Our Lady of Miraculous Medal, Hinche', lat: 19.14078, lng: -72.00125 },
    { church: 'St. John, Dinwiddie', twin: 'St. Joseph, Marche Canard', lat: 18.7833, lng: -72.0333 },
    { church: 'St. John the Evangelist, Waynesboro', twin: 'St. Louis King of France, Pointe-&agrave;-Raquettes', lat: 18.7833, lng: -73.0667 },
    { church: 'St. Jude, Franklin', twin: 'Our Lady of Lourdes, Belladere', lat: 18.8669, lng: -71.7631 },
    { church: 'St. Kateri Tekakwitha, Poquoson (Tabb)', twin: 'St. Michael\'s School and Parish, Boucan Carre', lat: 18.95, lng: -72.1333 },
    { church: 'St. Mark, Virginia Beach', twin: 'Maison Fortune Orphanage, Hinche', lat: 19.14188, lng: -72.0 },
    { church: 'St. Mary, Blacksburg', twin: 'St. John the Baptist, Savanette', lat: 19.3854, lng: -72.1266 },
    { church: 'St. Mary, Chesapeake', twin: 'St. Peter, Roy Sec', lat: 18.8928, lng: -71.8378 },
    { church: 'St. Mary, Richmond', twin: 'St. Benoit de Angouman, Angouman', lat: 19.1897, lng: -71.8889 },
    { church: 'St. Mary of the Annunciation, Ladysmith', twin: 'St. Martin School, Hinche', lat: 19.13621, lng: -72.01402 },
    { church: 'St. Mary of the Presentation, Suffolk', twin: 'Our Lady of Lourdes, Belladere', lat: 18.8669, lng: -71.7631 },
    { church: 'St. Michael, Richmond', twin: 'St. John Baptiste, Dos Palais', lat: 18.833, lng: -71.883 },
    { church: 'St. Nicholas, Virginia Beach', twin: 'St. Anne, Maissade', lat: 19.1667, lng: -72.1333 },
    { church: 'St. Patrick, Lexington', twin: 'St. Joseph, Fonds Pierre', lat: 18.917, lng: -71.95 },
    { church: 'St. Paul, Portsmouth', twin: 'St. Peter, Roy Sec', lat: 18.8928, lng: -71.8378 },
    { church: 'St. Paul, Richmond', twin: 'Notre Dame des Douleurs, Pouly', lat: 18.8334, lng: -71.8517 },
    { church: 'St. Stephen Martyr, Chesapeake', twin: 'Maison Fortune Orphanage, Hinche', lat: 19.14188, lng: -72.0 },
    { church: 'St. Thomas Aquinas, Charlottesville', twin: 'St. Michael\'s Parish, Saltadere', lat: 19.133, lng: -71.733 },
    { church: 'St. Thomas More, Lynchburg', twin: 'Our Lady of the Nativity, Savanette', lat: 18.75, lng: -71.867 },
    { church: 'Sts. Peter and Paul, Palmyra', twin: 'St. Joseph, Fonds Pierre', lat: 18.917, lng: -71.95 }
];

const map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(19.03, -72.25),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});


const info = new google.maps.InfoWindow();
const markers = [];
const select = document.getElementById('twins');

select.onchange = function() {
    let num = select.options[select.selectedIndex].value;

    if(num === 'none') {
        info.close();
        return;
    }

    google.maps.event.trigger(markers[num], 'click');
};

twins.forEach(function(twin, i) {
    let marker = new google.maps.Marker({
        position: { lat: twin.lat, lng: twin.lng },
        label: { text: i+1 + '', color: 'white' }, 
        title: twin.twin,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillOpacity: 0.8,
            fillColor: '#1864ab',
            strokeOpacity: 1,
            strokeColor: '#1864ab'
        },
        map: map
    });

    let html = '<strong>' + twin.twin + '</strong><br/>' + twin.church;

    marker.addListener('click', function(e) {
        info.setContent(html);
        info.open(map, marker);
    });

    markers.push(marker);

    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = twin.church;
    select.appendChild(option);
});