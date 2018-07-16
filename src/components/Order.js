import React from 'react';


class Order extends React.Component {
    nameRef = React.createRef();
    rateRef = React.createRef();

    handleComplete = (e) => {
        e.preventDefault();

        const { name, phone, address} = this.props.details;
        const order = {
            name: name,
            phone: phone,
            address: address,
            driver: this.props.email,
            rate: this.rateRef.current.value,
        }

        console.log(order)

        this.props.removeFromOrders(this.props.id, order)
        this.props.addToComplete(order);
    }



    render() {
        const {name, phone, address} = this.props.details;

        return(
            <form className='order__container' onSubmit={this.handleComplete}>
                <input type="text" defaultValue={this.props.number + 1}/>
                <input type="text" defaultValue={name}/>
                <input type="text" defaultValue={address}/>
                <input type="text" defaultValue={phone}/>
                <select type="text" ref={this.rateRef}>
                    <option value="000">выбрать</option>
                    <option value="800">800</option>
                    <option value="1000">1000</option>
                    <option value="1500">1500</option>
                </select>
                <button type="submit">Complete</button>
            </form>
        )
    }
}

export default Order;