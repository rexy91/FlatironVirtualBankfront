import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


class AddCreditCard extends Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
      };

    render() {
        return (
            <div id="PaymentForm">
                <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
                />
                <form>
                    <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                ...
                </form>
            </div>
        );
    }
}

export default AddCreditCard;
