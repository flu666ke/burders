import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    }
})

 // create an object with the requests we need
const burgerAPI = {

    getBurgers() {
        return instance.get('burgers').then(response => response.data);
    },

    getBurger(burgerId) {
        return instance.get(`burgers/${burgerId}`).then(response => response.data);
    },

    postOrder(order) {
        return instance
            .post('orders/', {
                body: JSON.stringify(order)
            })
            .then(response => response.data);
    },

    deleteOrder(orderId) {
        return instance.delete(`orders/${orderId}`).then(response => response.data);
    }
}

export default burgerAPI;




