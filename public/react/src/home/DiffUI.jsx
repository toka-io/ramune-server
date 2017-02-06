import React, { PropTypes } from 'react';
import 'whatwg-fetch';

const propTypes = {
  sampleHtml: PropTypes.string
};

const defaultProps = {
  sampleHtml: "Hello Wold"
};

class DiffUI extends React.Component {
  constructor(props) {
    super(props);
    this.getSampleHtml = this.getSampleHtml.bind(this);
    this.state = {
      sampleHtml: props.sampleHtml
    };
  }
  
  componentDidMount() {
    this.getSampleHtml()
  }
  
  getSampleHtml() {
    return fetch('/assets/html/sample.html')
      .then((response) => response.text())
      .then((html) => {
        this.setState({ sampleHtml: html });
        var diff2htmlUi = new Diff2HtmlUI({diff: lineDiffExample});
        diff2htmlUi.draw('#line-by-line', {inputFormat: 'json', showFiles: true, matching: 'lines'});
        diff2htmlUi.highlightCode('#line-by-line');
      });
  }
  
  render() {
    return (
      <div>
        <link href="/assets/bower_components/diff2html/dist/diff2html.min.css" rel="stylesheet" />
        <script src="/assets/bower_components/diff2html/dist/diff2html-ui.min.js"></script>
        <script src="/assets/bower_components/diff2html/dist/diff2html.min.js"></script>
        <div className="DiffUI" dangerouslySetInnerHTML={{__html: this.state.sampleHtml}}></div>        
      </div>
    );
  }
}

DiffUI.propTypes = propTypes;
DiffUI.defaultProps = defaultProps;

export default DiffUI;