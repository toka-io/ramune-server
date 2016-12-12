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
  
  componentDidMount() {
    $(".cta span").click(function(){
      $(".cta:not(.sent)").addClass("active");
      $("input").focus();
    });

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    $(".centerMe input").on('input', function(){
        if(regex.test($(this).val())) {
            $("button").removeAttr("disabled"); }
        else {
            $("button").attr("disabled", "disabled"); }
    });

    $(".centerMe form").submit(function(x){
        x.preventDefault();
        if(regex.test($(".centerMe input").val())) {
            $(".cta span").text("Shipped :)");
            $(".cta").removeClass("active").addClass("sent");
        }
    });  
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