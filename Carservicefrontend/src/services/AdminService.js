import axios from 'axios'
const spurl="http://localhost:8082/admin/";
class AdminService {
    getHotels(){
        return axios.get(spurl+'allcars');
    }
    createHotel(Hotel){
        return axios.post(spurl+'createcar',Hotel);
    }
    getCustomers(){
        return axios.get(spurl+'customerdetails');
    }
    deleteHotel(hotelId){
        return axios.delete(spurl+'delete'+'/'+hotelId);
    }
    updateHotel(Hotel,hotelid){
        return axios.put(spurl+'updatestatus'+'/'+hotelid,Hotel);
    }

}

export default new AdminService()
