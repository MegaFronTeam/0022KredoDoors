document.addEventListener("DOMContentLoaded", () => {
  function init() {
    const markIcon = 'img/svg/map.png';
    //- const markIconColor = 'img/svg/map-color.png';
    var center = [55.43000996299983,37.55045821807436];
    var myMap = new ymaps.Map('map', {
  
      center: center,
      zoom: 10,
      controls: ['zoomControl']
    });
    myPlacemark = new ymaps.Placemark(center, {});
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    //на мобильных устройствах... (проверяем по userAgent браузера)
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // ... отключаем перетаскивание карты
      myMap.behaviors.disable('drag');
    }
  }
  ymaps.ready(init);
});