//alert("js loaded");

// globals

var locations = [

    [1,		'Basilica of St. Mary of the Immaculate Conception, Norfolk',	'Bassin Zim Chapel, Papaye',					19.164,		-71.986],


	[2,		'Blessed Sacrament, Harrisonburg',						'St. Isidore, Anse-&agrave;-Galets',					18.8317,	-72.8642],
	[3,		'Cathedral of the Sacred Heart, Richmond',					'St. Paul\'s Chapel of Sacred Heart, Carissade',	19.133,		-72.083],

	[4,		'Catholic Community of Lynchburg College',						'Matenwa Learning Center, La Gonave', 			18.809,		-72.984],
	[5,		'Christ the King, Abingdon',						'St. Louis King of France, Pointe-&agrave;-Raquettes',		18.7833,	-73.0667],
	[6,		'Church of St. Therese, Chesapeake',							'Maison Fortune Orphanage, Hinche',				19.14188,	-72.0],

	[7,		'Church of the Good Shepherd, Smithfield',						'St. Anthony of Padua, Croix Fer',				18.856,		-71.851],

	[8,		'Church of the Holy Angels, Portsmouth',						'St. Peter, Roy Sec',							18.8928,	-71.8378],
	[9, 	'Church of the Holy Family, Virginia Beach', 					'St. Jude, Baptiste',							18.8,		-71.783],
	[10, 	'Church of the Holy Spirit, Virginia Beach',					'Our Lady of Mt. Carmel, Saut D\'Eau',			18.8222,	-72.2164],
	[11, 	'Church of the Redeemer, Mechanicsville',						'AFAL womens organization, Lascahobas',			18.83243,	-71.93098],
	[12,	'Church of the Resurrection, Portsmouth',						'St. Peter, Roy Sec',							18.8928,	-71.8378],
	[13,	'Church of the Sacred Heart, Prince George County',				'St. Joseph, Marche Canard',					18.7833,	-72.0333],
	[14,	'Church of the Transfiguration, Fincastle',						'St. Peter and Paul, Marmont',					19.067,		-71.983],

	[15,	'Holy Comforter, Charlottesville',								'St. Michael\'s Parish, Saltadere',				19.133,		-71.733],

	[16,	'Incarnation, Charlottesville', 					'Little Brothers & Sisters of the Incarnation, Pandiassou',	19.13363,	-72.04674],
	[17,	'Maison Fortune Orphanage Foundation, Chesapeake', 				'Maison Fortune Orphanage, Hinche',				19.14188,	-72.0],
	[18,  	'Newman Community at VA Tech, Blacksburg', 						'St. Rose of Lima School, Jacsonville', 		19.3603,	-72.1483],
	[19,	'Our Lady of Nazareth, Roanoke',								'Ecole Normale de Hinche, Papaye',				19.16396,	-71.98575],
	[20,	'Our Lady of Perpetual Help, Salem',							'Sacre Coeur,  Cabestor',						18.867,		-72],
	[21,	'Our Lady of the Blessed Sacrament, West Point',				'Sts. Peter and Paul, Marmont',					19.067,		-71.983],
	[22,	'Prince of Peace, Chesapeake',	'Ecole Louverture-Cleary Croix-des-Bouquets, Maison Fortune Orphanage Hinche',	19.14188,	-72.0],

	[23,	'Resurrection, Moneta',								'Jesus The Good Sheperd Orphanage, Croix-des-Bouquets',		18.590, 	-72.240],
	[24,	'Sacred Heart, Covington',										'St. Rose of Lima Chapel, Matabonite',			19.3603,	-72.1483],
	[25,	'Sacred Heart, Norfolk',										'St. Gabriel\'s, Lascahobas',					18.83019,	-71.93588],
	[26,	'St. Ann, Ashland',												'Our Lady Of Perpetual Help, Dubuisson',		18.85,		-72.167],
	[27,	'St. Anne, Bristol',											'St.  Francis of Assisi, Cerca La Source',		19.1667,	-71.7833],
	[28,	'St. Bede, Williamsburg',										'St. Joseph, Thomond',							19.02,		-71.97],
	[29,	'St. Bridget, Richmond',									'St. Paul Chapel\'s of Sacred Heart, Carissade',	19.133,		-72.083],
	[30,	'St. Edward the Confessor, Richmond',							'Sainte-Famille, Cerca Carvajal',				19.25,		-71.95],
	[31,	'St. Elizabeth, Richmond',									'New Jerusalem School for the Deaf, Mirebalais',	18.83,		-72.1],

	[32,	'St. Francis of Assisi, Rocky Mount',							'St. Anne, Trianon',							18.753,		-72.148],

	[33,	'St. Francis of Assisi, Staunton',					'St. Louis King of France, Pointe-&agrave;-Raquettes',		18.7833,	-73.0667],
	[34,	'St. Gregory the Great, VA Beach',					'Seminary, Hinche & Our Lady of Miraculous Medal, Hinche',	19.14078,	-72.00125],
	[35,	'St. John, Dinwiddie',											'St. Joseph, Marche Canard',					18.7833,	-72.0333],
	[36,	'St. John the Evangelist, Waynesboro', 					'St. Louis King of France, Pointe-&agrave;-Raquettes', 	18.7833, 	-73.0667],

	[37,	'St. Jude, Franklin', 											'Our Lady of Lourdes, Belladere',				18.8669,	-71.7631],

	[38,	'St. Kateri Tekakwitha, Poquoson (Tabb)',					'St. Michael\'s School and Parish, Boucan Carre',	18.95,		-72.1333],
	[39,	'St. Mark, Virginia Beach',										'Maison Fortune Orphanage, Hinche',				19.14188,	-72.0],

	[40,	'St. Mary, Blacksburg',											'St. John the Baptist, Savanette', 				19.3854,	-72.1266],
	[41,	'St. Mary, Chesapeake',											'St. Peter, Roy Sec',							18.8928	, 	-71.8378],
	[42,	'St. Mary, Richmond',											'St. Benoit de Angouman, Angouman',				19.1897,	-71.8889],

	[43,	'St. Mary of the Annunciation, Ladysmith',						'St. Martin School, Hinche',					19.13621,	-72.01402],
	[44,	'St. Mary of the Presentation, Suffolk', 						'Our Lady of Lourdes, Belladere',				18.8669,	-71.7631],

	[45,	'St. Michael, Richmond', 										'St. John Baptiste, Dos Palais', 				18.833, 	-71.883],
	[46,	'St. Nicholas, Virginia Beach',									'St. Anne, Maissade',							19.1667,	-72.1333],
	[47,	'St. Patrick, Lexington', 										'St. Joseph, Fonds Pierre', 					18.917,		-71.95],
	[48,	'St. Paul, Portsmouth',											'St. Peter, Roy Sec',							18.8928,	-71.8378],
	[49,	'St. Paul, Richmond', 											'Notre Dame des Douleurs, Pouly', 				18.8334,	-71.8517],
	[50,	'St. Stephen Martyr, Chesapeake',								'Maison Fortune Orphanage, Hinche',				19.14188,	-72.0],

	[51,	'St. Thomas Aquinas, Charlottesville',							'St. Michael\'s Parish, Saltadere',				19.133,		-71.733],
	[52,	'St. Thomas More, Lynchburg',									'Our Lady of the Nativity, Savanette',			18.75,		-71.867],
	[53,	'Sts. Peter and Paul, Palmyra', 								'St. Joseph, Fonds Pierre',						18.917,		-71.95]

	];

    var mk = [];
    var info = [];   // text for bubbles
    var winfo;
    var iw = [];                     // information window

    var twinlistBtn;

    window.onload = function()  {
       initialize();
       $("twinlist").onclick = showLocation;
       $("twinlist").onselect = showLocation;
       twinlistBtn = document.getElementById("twinlistBtn");
   	   twinlistBtn.onclick = showLocation;
    }


    function initialize() {
      mk = new Array(locations.length);

      var mapOptions = {
          center: new google.maps.LatLng(19.03, -72.25),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

      var myLatlng;
      for (i = 0; i < locations.length; i++) {
          var rtwin = locations[i][1];
          var htwin = locations[i][2];
          info.push(htwin);
         // alert(i + " " + info[i]);

   		   myLatlng = new google.maps.LatLng(locations[i][3],locations[i][4] );

   		  //mk[i] = new google.maps.Marker({position: myLatlng, title: htwin, map: map});


          //google.maps.event.addListener(mk[i], 'click', function() {
    		//map.setZoom(10);
    		//map.setCenter(mk[i].getPosition());
  		  //});


  		  mk[i] = new MarkerWithLabel({
		         position: myLatlng,
		         map: map,
		         draggable: true,
		         raiseOnDrag: false,
		         labelContent: locations[i][0],
		         labelAnchor: new google.maps.Point(6, 30),
		         labelClass: "labels", // the CSS class for the label
		         labelInBackground: false
		    });
        //alert(i + " " + info[i]);
		    iw[i] = new google.maps.InfoWindow({
		         content: info[i]
		    });

         // google.maps.event.addListener(mk[i], "click", function (e) { iw[i].open(map, this); });

      }

      //alert("0 " + info[0]);
	    //iw.push(new google.maps.InfoWindow({content: info[0], width:192, height:100}));
	    iw.push(new google.maps.InfoWindow({content: info[0]}));
      google.maps.event.addListener(mk[0], "mousedown", function (e) { iw[0].open(map, this); });

      //alert("1 " + info[1]);
	    iw.push( new google.maps.InfoWindow({content: info[1]}));
      google.maps.event.addListener(mk[1], "mousedown", function (e) { iw[1].open(map, this); });

      //alert("2 " + info[2]);
	    iw.push( new google.maps.InfoWindow({content: info[2]}));
      google.maps.event.addListener(mk[2], "mousedown", function (e) { iw[2].open(map, this); });

	    //alert("3 " + info[3]);
	    iw.push( new google.maps.InfoWindow({content: info[3]}));
      google.maps.event.addListener(mk[3], "mousedown", function (e) { iw[3].open(map, this); });

	    //alert("4 " + info[4]);
	    iw.push( new google.maps.InfoWindow({content: info[4]}));
      google.maps.event.addListener(mk[4], "mousedown", function (e) { iw[4].open(map, this); });

      //alert("5 " + info[5]);
	    iw.push( new google.maps.InfoWindow({content: info[5]}));
      google.maps.event.addListener(mk[5], "mousedown", function (e) { iw[5].open(map, this); });

      //alert("6 " + info[6]);
	    iw.push( new google.maps.InfoWindow({content: info[6]}));
      google.maps.event.addListener(mk[6], "mousedown", function (e) { iw[6].open(map, this); });

      //alert("7 " + info[7]);
	    iw.push( new google.maps.InfoWindow({content: info[7]}));
      google.maps.event.addListener(mk[7], "mousedown", function (e) { iw[7].open(map, this); });

      //alert("8 " + info[8]);
	  iw.push( new google.maps.InfoWindow({content: info[8]}));
      google.maps.event.addListener(mk[8], "mousedown", function (e) { iw[8].open(map, this); });

      //alert("9 " + info[9]);
	  iw.push( new google.maps.InfoWindow({content: info[9]}));
      google.maps.event.addListener(mk[9], "mousedown", function (e) { iw[9].open(map, this); });

      //alert("10 " + info[10]);
	  iw.push(new google.maps.InfoWindow({content: info[10]}));
      google.maps.event.addListener(mk[10], "mousedown", function (e) { iw[10].open(map, this); });

      //alert("11 " + info[11]);
	  iw.push( new google.maps.InfoWindow({content: info[11]}));
      google.maps.event.addListener(mk[11], "mousedown", function (e) { iw[11].open(map, this); });

      //alert("12 " + info[12]);
	  iw.push( new google.maps.InfoWindow({content: info[12]}));
      google.maps.event.addListener(mk[12], "mousedown", function (e) { iw[12].open(map, this); });

	  //alert("13 " + info[13]);
	  iw.push( new google.maps.InfoWindow({content: info[13]}));
      google.maps.event.addListener(mk[13], "mousedown", function (e) { iw[13].open(map, this); });

	 //alert("14 " + info[14]);
	  iw.push( new google.maps.InfoWindow({content: info[14]}));
      google.maps.event.addListener(mk[14], "mousedown", function (e) { iw[14].open(map, this); });

      //alert("15 " + info[15]);
	  iw.push( new google.maps.InfoWindow({content: info[15]}));
      google.maps.event.addListener(mk[15], "mousedown", function (e) { iw[15].open(map, this); });



      //alert("16 " + info[16]);
	  	  iw.push( new google.maps.InfoWindow({content: info[16]}));
      google.maps.event.addListener(mk[16], "mousedown", function (e) { iw[16].open(map, this); });

      //alert("17 " + info[17]);
	  	  iw.push( new google.maps.InfoWindow({content: info[17]}));
      google.maps.event.addListener(mk[17], "mousedown", function (e) { iw[17].open(map, this); });

      //alert("18 " + info[18]);
	  	  iw.push( new google.maps.InfoWindow({content: info[18]}));
      google.maps.event.addListener(mk[18], "mousedown", function (e) { iw[18].open(map, this); });



      //alert("19 " + info[19]);
	  iw.push( new google.maps.InfoWindow({content: info[19]}));
      google.maps.event.addListener(mk[19], "mousedown", function (e) { iw[19].open(map, this); });

      //alert("20 " + info[20]);
	  iw.push( new google.maps.InfoWindow({content: info[20]}));
      google.maps.event.addListener(mk[20], "mousedown", function (e) { iw[20].open(map, this); });

	  //alert("21 " + info[21]);
	  iw.push( new google.maps.InfoWindow({content: info[21]}));
      google.maps.event.addListener(mk[21], "mousedown", function (e) { iw[21].open(map, this); });

	 //alert("22 " + info[22]);
	  iw.push( new google.maps.InfoWindow({content: info[22]}));
      google.maps.event.addListener(mk[22], "mousedown", function (e) { iw[22].open(map, this); });

      //alert("23 " + info[23]);
	  iw.push( new google.maps.InfoWindow({content: info[23]}));
      google.maps.event.addListener(mk[23], "mousedown", function (e) { iw[23].open(map, this); });

      //alert("24 " + info[24]);
	  iw.push( new google.maps.InfoWindow({content: info[24]}));
      google.maps.event.addListener(mk[24], "mousedown", function (e) { iw[24].open(map, this); });

      //alert("25 " + info[25]);
	  iw.push( new google.maps.InfoWindow({content: info[25]}));
      google.maps.event.addListener(mk[25], "mousedown", function (e) { iw[25].open(map, this); });

      //alert("26 " + info[26]);
	  iw.push( new google.maps.InfoWindow({content: info[26]}));
      google.maps.event.addListener(mk[26], "mousedown", function (e) { iw[26].open(map, this); });

      //alert("27 " + info[27]);
	  iw.push( new google.maps.InfoWindow({content: info[27]}));
      google.maps.event.addListener(mk[27], "mousedown", function (e) { iw[27].open(map, this); });

      //alert("28 " + info[28]);
	  iw.push(new google.maps.InfoWindow({content: info[28], width:192, height:100}));
      google.maps.event.addListener(mk[28], "mousedown", function (e) { iw[28].open(map, this); });

      //alert("29 " + info[29]);
	  iw.push( new google.maps.InfoWindow({content: info[29]}));
      google.maps.event.addListener(mk[29], "mousedown", function (e) { iw[29].open(map, this); });

      //alert("30 " + info[30]);
	  iw.push( new google.maps.InfoWindow({content: info[30]}));
      google.maps.event.addListener(mk[30], "mousedown", function (e) { iw[30].open(map, this); });

	  //alert("31 " + info[31]);
	  iw.push( new google.maps.InfoWindow({content: info[31]}));
      google.maps.event.addListener(mk[31], "mousedown", function (e) { iw[31].open(map, this); });

	  //alert("32 " + info[32]);
	  iw.push( new google.maps.InfoWindow({content: info[32]}));
      google.maps.event.addListener(mk[32], "mousedown", function (e) { iw[32].open(map, this); });

      //alert("33 " + info[33]);
	  iw.push( new google.maps.InfoWindow({content: info[33]}));
      google.maps.event.addListener(mk[33], "mousedown", function (e) { iw[33].open(map, this); });

      //alert("34 " + info[34]);
	  iw.push( new google.maps.InfoWindow({content: info[34]}));
      google.maps.event.addListener(mk[34], "mousedown", function (e) { iw[34].open(map, this); });

      //alert("35 " + info[35]);
	  iw.push( new google.maps.InfoWindow({content: info[35]}));
      google.maps.event.addListener(mk[35], "mousedown", function (e) { iw[35].open(map, this); });

      //alert("36 " + info[36]);
	  iw.push( new google.maps.InfoWindow({content: info[36]}));
      google.maps.event.addListener(mk[36], "mousedown", function (e) { iw[36].open(map, this); });

      //alert("37 " + info[37]);
	  iw.push( new google.maps.InfoWindow({content: info[37]}));
      google.maps.event.addListener(mk[37], "mousedown", function (e) { iw[37].open(map, this); });

      //alert("38 " + info[38]);
	  iw.push(new google.maps.InfoWindow({content: info[38], width:192, height:100}));
      google.maps.event.addListener(mk[38], "mousedown", function (e) { iw[38].open(map, this); });



      //alert("39 " + info[39]);
	  iw.push( new google.maps.InfoWindow({content: info[39]}));
      google.maps.event.addListener(mk[39], "mousedown", function (e) { iw[39].open(map, this); });

	  //alert("40 " + info[40]);
	  iw.push( new google.maps.InfoWindow({content: info[40]}));
      google.maps.event.addListener(mk[40], "mousedown", function (e) { iw[40].open(map, this); });

	 //alert("41 " + info[41]);
	  iw.push( new google.maps.InfoWindow({content: info[41]}));
      google.maps.event.addListener(mk[41], "mousedown", function (e) { iw[41].open(map, this); });

      //alert("42 " + info[42]);
	  iw.push( new google.maps.InfoWindow({content: info[42]}));
      google.maps.event.addListener(mk[42], "mousedown", function (e) { iw[42].open(map, this); });

      //alert("43 " + info[43]);
	  iw.push( new google.maps.InfoWindow({content: info[43]}));
      google.maps.event.addListener(mk[43], "mousedown", function (e) { iw[43].open(map, this); });

      //alert("44 " + info[44]);
	  iw.push( new google.maps.InfoWindow({content: info[44]}));
      google.maps.event.addListener(mk[44], "mousedown", function (e) { iw[44].open(map, this); });

      //alert("45 " + info[45]);
	  iw.push( new google.maps.InfoWindow({content: info[45]}));
      google.maps.event.addListener(mk[45], "mousedown", function (e) { iw[45].open(map, this); });

      //alert("46 " + info[46]);
	  iw.push( new google.maps.InfoWindow({content: info[46]}));
      google.maps.event.addListener(mk[46], "mousedown", function (e) { iw[46].open(map, this); });

      //alert("47 " + info[47]);
	  iw.push(new google.maps.InfoWindow({content: info[47], width:192, height:100}));
      google.maps.event.addListener(mk[47], "mousedown", function (e) { iw[47].open(map, this); });

      //alert("48 " + info[48]);
	  iw.push( new google.maps.InfoWindow({content: info[48]}));
      google.maps.event.addListener(mk[48], "mousedown", function (e) { iw[48].open(map, this); });

      //alert("49 " + info[49]);
	  iw.push( new google.maps.InfoWindow({content: info[49]}));
      google.maps.event.addListener(mk[49], "mousedown", function (e) { iw[49].open(map, this); });

	  //alert("50 " + info[50]);
	  iw.push( new google.maps.InfoWindow({content: info[50]}));
      google.maps.event.addListener(mk[50], "mousedown", function (e) { iw[50].open(map, this); });

	 //alert("51 " + info[51]);
	  iw.push( new google.maps.InfoWindow({content: info[51]}));
      google.maps.event.addListener(mk[51], "mousedown", function (e) { iw[51].open(map, this); });

      //alert("52 " + info[52]);
	  iw.push( new google.maps.InfoWindow({content: info[52]}));
      google.maps.event.addListener(mk[52], "mousedown", function (e) { iw[52].open(map, this); });

      //alert("53 " + info[53]);
	  //iw.push( new google.maps.InfoWindow({content: info[53]}));
      //google.maps.event.addListener(mk[53], "mousedown", function (e) { iw[53].open(map, this); });

      //alert("54 " + info[54]);
	  //iw.push( new google.maps.InfoWindow({content: info[54]}));
      //google.maps.event.addListener(mk[54], "mousedown", function (e) { iw[54].open(map, this); });



   }

   function showLocation()  {
		var list_index = $(twinlist).selectedIndex;
	    //alert(list_index);
	    var lastindex = 54;

	    if (list_index==lastindex) {
			location.reload();
			$(twinlist).selectedIndex= 0;
			return;
		}

        var locations_index = list_index - 1;
//alert(locations_index);
if (locations_index >= 0)  {
	    var rtwin = locations[locations_index][1];
	    var htwin = locations[locations_index][2];


	    var mapOptions = {
	       center: new google.maps.LatLng(19.03, -72.25),
	       zoom: 9,
	       mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	    var myLatlng = new google.maps.LatLng(locations[locations_index][3],locations[locations_index][4] );


	    var marker = new MarkerWithLabel({
	 		   position: myLatlng,
	 		   map: map,
	 		   draggable: false,
	 		   raiseOnDrag: false,
	 		   labelContent: locations[locations_index][0],
	 		   labelAnchor: new google.maps.Point(6, 30),
	 		   labelClass: "labels", // the CSS class for the label
	 		   labelInBackground: false
	 		});

	    var info = htwin;
	 	var iw = new google.maps.InfoWindow({
	 		         content: info
	 		});
	    google.maps.event.addListener(marker, "mousedown", function (e) { iw.open(map, this); });

}  // if
   }