function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1); 
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ; 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    const distance = R * c; // Distance in km
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function calculateCombinedRating(attraction1, attraction2) {
    return attraction1.rating + attraction2.rating;
}

export function sortAttractions(attractions) {
    const pairs = [];
    const threshold = 10; 

    for (let i = 0; i < attractions.length - 1; i++) {
        for (let j = 0; j < attractions.length; j++) {
            if (i !== j && calculateDistance(attractions[i].latitude, attractions[i].longitude, attractions[j].latitude, attractions[j].longitude) < threshold) {
                pairs.push([attractions[i], attractions[j]]);
            }
        }
    }


    pairs.sort((pair1, pair2) => calculateCombinedRating(pair2[0], pair2[1]) - calculateCombinedRating(pair1[0], pair1[1]));

    return pairs.slice(0, 7);
}

function calculateCenter(lat1, lng1, lat2, lng2) {
    const centerLat = (lat1 + lat2) / 2;
    const centerLng = (lng1 + lng2) / 2;
    return { centerLat, centerLng };
}



export const generateDayItinerary = (sortedRestaurants, sortedAttractions) => {
    const itinerary = {};
    console.log("sortedAttractions in :",sortedAttractions)
    itinerary[8] = sortedRestaurants[0];
    itinerary[14] = sortedRestaurants[1];
    itinerary[20] = sortedRestaurants[2];

    if (sortedAttractions.length > 0) {
    
        let attractionTimes;
        switch (sortedAttractions.length) {
            case 1:
                attractionTimes = [9];
                break;
            case 2:
                attractionTimes = [9, 15];
                break;
            case 3:
                attractionTimes = [9, 15, 18];
                break;
            default:
                attractionTimes = [9, 12, 15, 18];
                break;
        }
        
        for (let i = 0; i < sortedAttractions.length; i++) {
            itinerary[attractionTimes[i]] = sortedAttractions[i];
        }
    }
    
    return itinerary;
};
export const weekItinerary = (sortedWeekAttractions, sortedRestaurants) => {
    const weekItinerary = {};
    for (let i = 0; i < 6; i++) {
        const dailyAttractions = sortedWeekAttractions.slice(i * 1, i * 1 + 1);
        const dailyRestaurants = sortedRestaurants.slice(i * 3, i * 3 + 3);
        weekItinerary[i] = generateDayItinerary(dailyRestaurants, dailyAttractions[0]);
    }

    return weekItinerary;
};
