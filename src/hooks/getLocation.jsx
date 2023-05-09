import { data } from "autoprefixer";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";


export const getLocation = async () => {
    function locationSuccess(pos) {
        const crd = pos.coords;
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${crd.latitude}&longitude=${crd.longitude}&localityLanguage=en`
        fetch(geoApiUrl)
            .then(response => response.json())
            .then(data => data)
            .catch(err => err.message)
    }
    function locationError(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    await navigator.geolocation.getCurrentPosition(locationSuccess, locationError)
}