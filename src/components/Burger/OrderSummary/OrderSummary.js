import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {


    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return (
                <li key={igkey}>
                    <span>{igkey}</span>:{this.props.ingredients[igkey]}
                </li>);
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" Clicked={this.props.purchaseCanclled}>CANCEL</Button>
                <Button btnType="Success" Clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }

} 



export default OrderSummary;