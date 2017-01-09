import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import DiffUI from './DiffUI.jsx';
import ShipIt from './ShipIt.jsx';

const propTypes = {
  maxBubbles: PropTypes.number.isRequired
};

const defaultProps = {
  maxBubbles: 9
};

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var bubbles = [];
    for (var i=0; i < this.props.maxBubbles; i++) {
      bubbles.push(<li key={i}></li>);
    }
    return (
      <div>
        <div className='wrapper'>
            <div className='container'>
                <h1>Welcome to Ramune!</h1>
            </div>
            <ul className='bg-bubbles'>
              {bubbles}
            </ul>
          </div>
        <DiffUI />
        <ShipIt />
      </div> 
    )
  }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

ReactDOM.render(<Page />, document.body);