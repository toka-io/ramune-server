import React, { PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string,
  submitText: PropTypes.string
};

const defaultProps = {
  regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  text: 'Ship it!',
  submitText: 'Shipped :)'
};

class ShipIt extends React.Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.shipIt = this.shipIt.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.state = {
      active: false,
      disabled: true,
      sent: false,
      text: this.props.text
    }
  }
     
  isActive() {
    return (this.state.active) ? ' active' : '';
  }  
  
  isSent() {
    return (this.state.sent) ? ' sent' : '';
  }  
  
  sendEmail(e) {
    e.preventDefault();
    if(this.props.regex.test(ReactDOM.findDOMNode(this.refs.emailInput).value)) {
      this.setState({
        active: false,
        sent: true,
        text: this.props.submitText
      });
    }
  }
  
  shipIt() {
    this.setState({active: true});
    ReactDOM.findDOMNode(this.refs.shipItBtn).focus();
  }
  
  validateEmail(e) {    
    if(this.props.regex.test(e.target.value))
      this.setState({disabled: false});
    else
      this.setState({disabled: true});
  }
  
  render() {
    return (
      <div className='centerMe'>
        <div className={'cta'+this.isActive()+this.isSent()} onClick={this.shipIt}>
          <span ref="shipItBtn">{this.state.text}</span>
          <form onSubmit={this.sendEmail}>
            <div className='input'>
              <input placeholder='E-mail' onChange={this.validateEmail} ref="emailInput" />
            </div>
            <div className='button'>
              <button disabled={this.state.disabled} type='submit'>Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ShipIt.propTypes = propTypes;
ShipIt.defaultProps = defaultProps;

export default ShipIt;