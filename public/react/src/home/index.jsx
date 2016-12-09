import CommitList from './CommitList.jsx';
import ShipIt from './ShipIt.jsx';

var ReactDOM = require('react-dom');

var Page = React.createClass({
  componentDidMount: function() {
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
  
  },
  render: function() {
    return (
      <div>
        <div className='wrapper'>
            <div className='container'>
                <h1>Welcome to Ramune!</h1>
            </div>
            <ul className='bg-bubbles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
        <CommitList 
          list={[
              {'sha': '857cd3de2f127453faa0f7dfcb66e28d918abf57'},
              {'sha': 'bee5ff9ff96e9a8439b6f14945e42b8ca73a38f3'}      
          ]} 
          />
        <ShipIt />
      </div> 
    )
  }
});

ReactDOM.render(<Page />, document.body);