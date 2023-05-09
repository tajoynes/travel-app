import axios from "axios";

const BASE_URL = "https://travel-advisor.p.rapidapi.com/restaurants"

const options = {
    method: 'GET',
    url: BASE_URL + '/list',
    params: {
        location_id: '293919',
        restaurant_tagcategory: '10591',
        restaurant_tagcategory_standalone: '10591',
        currency: 'USD',
        lunit: 'km',
        limit: '30',
        open_now: 'false',
        lang: 'en_US'
    },
    headers: {
        'X-RapidAPI-Key': "03230b5c57msh8ca3c9f94b51555p1438acjsn82b1e3999989",
        'X-RapidAPI-Host': "travel-advisor.p.rapidapi.com"
    }
};

export const getData = async () => {
    try {
        const response = await axios.request(options);
        return response
    } catch (error) {
        console.error(error);
    }
}


