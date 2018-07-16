import React from 'react';
import { numberOfRides, totalCash } from '../helpers';

class Total extends React.Component {
    render() {
        const trips = Object.keys(this.props.complete).map(res => {
            return this.props.complete[res];
        });
        return (
            <div className="total">

                <div className="total__container">
                    <div className="total__container--item">
                        Driver
                    </div>

                    <div className="total__container--item">
                        Total Trips
                    </div>

                    <div className="total__container--item">
                        Total Cash
                    </div>
                </div>

                <div className="total__container">
                    <div className="total__container--item center">
                        Simon
                    </div>
                    <div className="total__container--item center">
                        {numberOfRides(trips, 'semen@gmail.com')}
                    </div>
                    <div className="total__container--item center">
                        {totalCash(trips, 'semen@gmail.com')}
                    </div>
                </div>

                <div className="total__container">
                    <div className="total__container--item center">
                        Lelik
                    </div>
                    <div className="total__container--item center">
                        {numberOfRides(trips, 'lelik@gmail.com')}
                    </div>

                    <div className="total__container--item center">
                        {totalCash(trips, 'lelik@gmail.com')}
                    </div>
                </div>
            </div>
        )
    }
}

export default Total;