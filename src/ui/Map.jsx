import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import mapLayer from "../../public/img/map_layer.png"

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlsaWFtbm92aWNreSIsImEiOiJjbGVlazBvcWYwaHVjM3ZtajZveGoxM244In0.hnpQA34MhL9qxzfDOcUd2g";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 2rem;
  overflow: hidden;
  cursor: disabled;
  border-radius: 2rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.5;

  img {
    width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  }
`;

function Map({children, currentElement}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const startZoom = 14;
  const endZoom = 17;
  const duration = 1000; // Duration in milliseconds
  const lng = 11.26485
  const lat = 47.44527

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // container ID
      style: "mapbox://styles/viliamnovicky/clt05cnxe006601pj7m6mg1s4",
      center: [lng, lat],
      zoom: startZoom,
      scrollZoom: true,
      dragPan: false,
    });
    
    const startTime = new Date().getTime();
    const zoomDiff = endZoom - startZoom;

    function animateZoom() {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentZoom = startZoom + zoomDiff * progress;

      map.current.setZoom(currentZoom);

      if (progress < 1) {
        requestAnimationFrame(animateZoom);
      }
    }

    animateZoom();
  }, [lat, lng, startZoom, endZoom, duration]);

  return (
    <MapContainer ref={mapContainer}>
      <img src={mapLayer}/>
    </MapContainer>
  );
}

export default Map;