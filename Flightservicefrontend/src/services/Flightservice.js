import axios from 'axios';
const FLI_API_BASE_URL="http://localhost:8080/Flightservice"
const PAA_API_BASE_URL="http://localhost:8080/Passengerservice"
class Flightservice {


    getflight()
    {
        return axios.get(FLI_API_BASE_URL+'/flights');
    }
    getflightbyid(id)
    {
        return axios.get(FLI_API_BASE_URL+'/gflights/'+id);
    }
    aupdateflight(flight,id)
    {
        return axios.put(FLI_API_BASE_URL+'/uflight/'+id,flight);
    }
    deleteflight(id)
    {
        return axios.delete(FLI_API_BASE_URL+'/dflight/'+id);
    }
    addflight(flight)
    {
        return axios.post(FLI_API_BASE_URL+'/newflight',flight);
    }
    updflights(id,as)
    {
        return axios.put(FLI_API_BASE_URL+'/uflight/'+id+'/'+as);
    }
    createbooking(passenger)
    {
        return axios.post(PAA_API_BASE_URL+'/cpassenger',passenger);
    }
}

export default new Flightservice();