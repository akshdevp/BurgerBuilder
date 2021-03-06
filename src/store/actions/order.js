import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import Orders from '../../containers/Orders/Orders';


export const purchaseBurgerSuccess = (id, orderData) => {

    return {

        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        oderId : id,
        orderData : orderData

    }

};


export const purchaseBurgerFailed = (error) => {


    return {

        type : actionTypes.PURCHASE_BURGER_FAILED,
        error : error

    }

}

export const purchaseBurgerStart = () => {
    return {
        type:actionTypes.PURCHASE_BURGER_START
    }
}


export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
        .then(response => {
          dispatch(purchaseBurgerSuccess(response.data.name, orderData))
        })
        .catch(error => {
            dispatch(purchaseBurgerFailed(error));
        });
    };
};

export const purchaseInit = () => {
    return {
        type : actionTypes.PURCHASE_INIT
    }
};

export const fetchOrdersSuccess = (orders) => {

    return {
        type : actionTypes.FETCH_ORDERS_SUCCESS,
        orders : orders
    }

};

export const fetchOrdersFail = (error) => {

    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error:error
    }

};

export const fetchOrdersStart = () => {

    return {
        
        type : actionTypes.FETCH_ORDER_START

    }
};

export const fetchOrders = () => {

  return dispatch => {

    axios.get('/orders.json').then(res => {
        dispatch(fetchOrdersStart());
        const fetchOrders = [];
        for (let key in res.data) {
            fetchOrders.push({
                ...res.data[key],
                id: key
            });
        }
        dispatch(fetchOrdersSuccess(fetchOrders))
    })
    .catch(err => {
      dispatch(fetchOrdersFail(err))
    })

  }

}

