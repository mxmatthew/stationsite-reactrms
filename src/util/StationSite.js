const StationSite = {
    
    async SendRequest(uri, method, body) {
        const accessToken = await localStorage.getItem("at");
    
        try {
            const response = await fetch(uri, { 
                method: method,
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": accessToken
                 },
                body: body
            });
    
            return await response.json();
        } catch(err) {
            console.log(err);
        }
    },

    async GetStationList() {
        const user = JSON.parse(await localStorage.getItem("user"));

        const res = await StationSite.SendRequest(`https://api.stationsite.co.uk/user/${user.id}/stations`, 'GET');
        
        if (res.error) {
            console.log(res.error);
            return {}
        } else {
            return res.stations;
        }
    },

    async RegisterStation(data) {
        const res = await StationSite.SendRequest(`https://api.stationsite.co.uk/station/register`, 'POST', JSON.stringify(data));
        return res;
    }
    
}

export default StationSite;