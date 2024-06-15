
const StationSite = {

    
    async GetStationList(userId) {
        try {
            const response = await fetch(`https://api.stationsite.co.uk/user/${userId}/stations`, { 
                method: 'GET',
                headers: { "Content-Type": "application/json", }
            });
    
            const res = await response.json();

            if (res.error) {
                console.log(res.error);
            } else {
                return res.stations;
            }
        } catch(err) {
            console.log(err);
        }
    }
    
}

export default StationSite;