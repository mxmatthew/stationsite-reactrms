import { useState, useEffect, useRef} from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import StationSite from '../../util/StationSite';

function StationEdit (props) {
   const [input, setInput] = useState(props.station);
   const toast = useRef(null);

   const handleInput = (e) => {
        const {name, value} = e.target;
        setInput((prev) => ({...prev,[name]: value}));
    }

    const handleSaveClick = () => {
        StationSite.ModifyStation(input, props.station._id).then((res) => {
            if (res.error) {
                toast.current.show({severity:'error', summary: 'Failed', detail: res.error, life: 6000});
            } else {
                toast.current.show({severity:'success', summary: 'Success', detail: res.success, life: 6000});
            }
        });
    }

    useEffect(() => {
        setInput(props.station)
    }, [props]);

    return ( 
        <div>
            <Toast ref={toast}></Toast>

            <h1>Manage Station</h1>
            <TabView className="mb-5" activeIndex={0}>
                <TabPanel header="Basic Info">
                    
                <div className="flex flex-column gap-2 mb-5 w-9">
                    <label htmlFor="stationName">Name</label>
                    <div className="text-sm">Enter your radio station name</div>
                    <InputText id="stationName" name="name" onChange={(handleInput)} value={input.name || ''}  />
                </div>

                <div className="flex flex-column gap-2 mb-5 w-9">
                    <label htmlFor="stationTagline">Tagline</label>
                    <div className="text-sm">Enter your station's tagline/slogan</div>
                    <InputText id="stationTagline" name="tagline" onChange={handleInput} value={input.tagline || ''}  />
                </div>

                <div className="flex flex-column mb-5 gap-2 w-9">
                    <label htmlFor="stationDescription">Description</label>
                    <div className="text-sm">Enter a description for your radio station</div>
                    <InputTextarea id="stationDescription" name="description" rows={5} cols={30} onChange={handleInput} value={input.description || ''}   />
                </div>

                <div className="flex flex-column mb-5 gap-2 mb-5 w-9">
                    <label htmlFor="stationURL">Website URL</label>
                    <div className="text-sm">Enter the URL to your station's homepage</div>
                    <InputText id="stationURL" name="websiteUrl" onChange={handleInput} value={input.websiteUrl || ''}  />
                </div>

                <div className="flex flex-column mb-5 gap-2 mb-5 w-9">
                    <label htmlFor="stationStream">Stream URL</label>
                    <div className="text-sm">Enter the URL to your station's live stream</div>
                    <InputText id="stationStream" name="streamUrl" onChange={handleInput} value={input.streamUrl || ''}   />
                </div>

                </TabPanel>
            </TabView>
            <Button label="Save" size="large" onClick={handleSaveClick} icon="pi pi-check" />
        </div>
    );
};
 
export default StationEdit;