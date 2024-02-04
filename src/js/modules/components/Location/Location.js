import './Location.styles.scss';

export function Location() {
    const root = document.querySelector('.map');

    root.innerHTML += `
        <h2>Место проведения мероприятия</h2>
        <p>г. Краснодар, Зиповская ул., 5В</p>
        <div class="location">
            <div><h2>Как добраться?</h2></div>
            <div class="yandexMap"><a href="https://yandex.ru/maps/org/prostranstvo/135085512711/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Пространство</a><a href="https://yandex.ru/maps/35/krasnodar/category/rental_of_venues_for_cultural_events/15215599314/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Аренда площадок для культурно-массовых мероприятий в Краснодаре</a><a href="https://yandex.ru/maps/35/krasnodar/category/photo_studio/84843009243/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Фотостудия в Краснодаре</a><iframe src="https://yandex.ru/map-widget/v1/?ll=38.990728%2C45.063661&mode=search&oid=135085512711&ol=biz&z=16.57" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </div>
    `;
}
