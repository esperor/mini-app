import React from 'react';
import Map, {GeolocateControl, NavigationControl, Source, useControl} from 'react-map-gl/maplibre';
import type {MapContextValue} from "react-map-gl/dist/esm/components/map";

import NavigationBar from "~/widgets/navigation-bar";
import 'maplibre-gl/dist/maplibre-gl.css';
import IndoorEqual from "~/mapbox-gl-indoorequal/indoorEqual.ts";

const IndoorControl = () => {

    useControl((context: MapContextValue) => {

        const indoorEqual =  new IndoorEqual(context.map.getMap(), {url: "https://tiles.ijo42.ru/"});
        indoorEqual.loadSprite({ update: true } );
        return indoorEqual;
    }, {position:"bottom-right"})
    return null;
};
function MapPage() {
    return (
        <>
            {/*<HeaderBar pageName={"Интерактивная карта"}/>*/}
            {/*<Layout>*/}
    <Map
        initialViewState={{
            latitude:  58.007469,
            longitude: 56.187188,
            zoom: 16
        }}
        style={{width: '100%', height: '80vh'}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=1XfSivF5uaaJV0EiuRS1"
        attributionControl={false}
    >
        <GeolocateControl position="bottom-right"/>
        <NavigationControl position="bottom-right"/>
        <IndoorControl />
    </Map>
    {/*</Layout>*/}
    <NavigationBar/>
        </>
    );
}

export default MapPage;