var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//UI of the component 
//state
//life cycle events

class App extends React.Component {

    render() {
        return <h1 > Hello world... < /h1>;
    }

}

ReactDOM.render( < App / > , document.getElementById('app'));