import axios from 'axios'
const spurl="http://localhost:8081/admin/";
class AdminService {
    getHotels(){
        return axios.get(spurl+'allhotels');
    }
    createHotel(Hotel){
        return axios.post(spurl+'create',Hotel);
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
