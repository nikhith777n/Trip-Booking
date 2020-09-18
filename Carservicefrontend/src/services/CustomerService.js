import axios from 'axios'
const curl='http://localhost:8082/customer/';
class CustomerService{
    createHotel(Customer){
        return axios.post(curl+'createcar',Customer);
    }

}

export default new CustomerService()
