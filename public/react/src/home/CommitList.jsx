class CommitList extends React.Component {
  constructor(props) {
    super(props);
    this._addCommit = this._addCommit.bind(this);
    this._setCommit = this._setCommit.bind(this);
    this._resetList = this._resetList.bind(this);
    this.state = {};
    this.state.defaultList = props.list.slice();
    this.state.list = props.list;
  }
  _addCommit() {
    this.state.list.push({'sha':this.state.commit});
    this.forceUpdate();
  }  
  _setCommit(event) {
    this.state.commit = event.target.value;
    this.forceUpdate();
  }
  _resetList() {
    this.state.list = this.state.defaultList;
    this.forceUpdate();
  }
  render() {
    return (
      <div className="commit-list">
        <div className="form">
          <div>
            <input type="text" name="task" placeholder="Add a new task" required="required" value={this.state.commit} onChange={this._setCommit} />
            <button onClick={this._addCommit}>Add Commit</button>
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
        <button onClick={this._resetList}>Reset</button>
      </div>
    );
  }
}

export default CommitList;
