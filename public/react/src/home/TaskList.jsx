import React, { PropTypes } from 'react';

const propTypes = {
  list: PropTypes.array.isRequired
};

const defaultProps = {
  list: [{'sha':'asdf'}]
};

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.addCommit = this.addCommit.bind(this);
    this.setCommit = this.setCommit.bind(this);
    this.resetList = this.resetList.bind(this);
    this.state = {
      defaultList = props.list.slice();
      list = props.list;
    };
  }
  
  addCommit() {
    var arr = this.state.list.slice();
    arr.push({'sha':this.state.commit});
    this.setState({list: arr});
  }  
  
  setCommit(e) {
    this.setState({commit: e.target.value});
  }
  
  resetList() {
    this.setState({list: this.state.defaultList});
  }
  
  render() {
    return (
      <div className="task-list">
        <div className="form">
          <div>
            <input type="text" name="task" placeholder="Add a new task" required="required" value={this.state.commit} onChange={this.setCommit} />
            <button onClick={this.addCommit}>Add Commit</button>
          </div>
        </div>
        <ul>
          {this.state.list.map(function(o, i) {
            return  <li className="fade"> <span>{o.sha}
              <input type="checkbox" id={o.sha} />
              <label htmlFor={o.sha}></label></span></li>;
          })}
        </ul>
        <p className="fade all-complete">All tasks have been completed.</p>
        <button onClick={this.resetList}>Reset</button>
      </div>
    );
  }
}

TaskList.propTypes = propTypes;
TaskList.defaultProps = defaultProps;

export default TaskList;