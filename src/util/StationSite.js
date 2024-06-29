const dbName = 'stationsite_data';
const dbRequest = indexedDB.open(dbName, 2);
let db;

dbRequest.onsuccess = async (event) => {
     db = event.target.result;
}

dbRequest.onerror = (event) => {
    db = event.target.result;
};

dbRequest.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore("stations", { keyPath: "_id" }).createIndex("_id", "_id", { unique: true });
};


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

    async GetStationList(local) {
        let objectStore;

        if (!local) {
            const user = JSON.parse(await localStorage.getItem("user"));
            const res = await StationSite.SendRequest(`https://api.stationsite.co.uk/user/${user.id}/stations`, 'GET');

            if (res.error) return false;

            objectStore = db.transaction("stations","readwrite").objectStore("stations");
            objectStore.clear();

            res.stations.forEach((station) => {
                objectStore.add(station);
            })

            return res.stations;
        } else {
            objectStore = db.transaction("stations","readwrite").objectStore("stations");
            return objectStore.getAll();
        }
    },

    async RegisterStation(data) {
        const res = await StationSite.SendRequest(`https://api.stationsite.co.uk/station/register`, 'POST', JSON.stringify(data));

        if (res.error) return res;

        db.transaction("stations","readwrite").objectStore("stations").add(res.station);
        return res;
    },
    
    async ModifyStation(data, stationId) {
        const res = await StationSite.SendRequest(`https://api.stationsite.co.uk/station/${stationId}`, 'PUT', JSON.stringify(data));

        if (res.error) return res;

        db.transaction("stations","readwrite").objectStore("stations").put(res.station);
        db.transaction("stations","readwrite").objectStore("stations").add(res.station);
        return res;
    }

}

export default StationSite;