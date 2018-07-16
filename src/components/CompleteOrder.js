import React from 'react';

class CompleteOrder extends React.Component {


    render() {
         const { rate, name, driver, address, phone } = this.props.details;
        return(
            <div className="order__complete">
                <p>Order # {this.props.index + 1}</p>
                <p>Driver: {driver}</p>
                <p>Rate: {rate}</p>
                <p>Address: {address}</p>
                <p>Phone: {phone}</p>
                <p>Customer: {name}</p>
            </div>
        )
    }
}

export default CompleteOrder;