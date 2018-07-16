import React from 'react';
import CompleteOrder from './CompleteOrder';
import Total from './Total';
import base from '../base';



class Complete extends React.Component {

    state = {
        complete: {},
        lelik: {},
        dima: {}
    }

    componentDidMount() {
        this.ref = base.syncState('complete', {
          context: this,
          state: 'complete'
        })
      } 
    
      componentWillUnmount() {
        base.removeBinding(this.ref);
      }



    render() {
        return(
            <React.Fragment>
                
                <Total complete={this.state.complete}/>
            
                <h2>Complete</h2>
                {Object.keys(this.state.complete).map((res, i) => {
            
                    return <CompleteOrder
                        key={i}
                        index={i}
                        details={this.state.complete[res]}
                    />
                }).reverse()}
            </React.Fragment>
        )
    }
}

export default Complete;