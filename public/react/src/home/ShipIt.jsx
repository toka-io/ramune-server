import React, { PropTypes } from 'react';

class ShipIt extends React.Component {
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
    return (
      <div className='centerMe'>
        <div className='cta'>
          <span>Ship it!</span>
          <form>
            <div className='input'>
              <input placeholder='E-mail' />
            </div>
            <div className='button'>
              <button disabled='disabled' type='submit'>Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ShipIt;