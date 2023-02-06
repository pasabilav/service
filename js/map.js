let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.40418036719886, lng: 30.554754588955436 },
        zoom: 16,
        mapId: '348da121c748b878'
    });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 50.40418036719886, lng: 30.554754588955436},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,
        //
        // // Пишем название маркера - появится если навести на него курсор и немного подождать
        // title: 'MASTER BENZ',

        // Укажем свою иконку для маркера
        icon: "img/master-benz.png"
    });

    // Создаем наполнение для информационного окна
    var contentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h5 id="firstHeading" class="firstHeading">Master Benz</h5>'+
        '<div id="bodyContent">'+
        '<p><b><a href="https://g.page/masterbenz?gm" target="_blank">Открыть в Google</a></b> '+
        '</p>'+
        '</div>'+
        '</div>';
    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 250
    });
    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

}



