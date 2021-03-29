class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            "h1",
            this.props,
            "Hello ",
            this.props.frameworkName,
            " world!!!"
        );
    }
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, {
        id: "ember",
        "data-frameworkname": "Ember.js",
        title: "A frameworkd for creating ambitious web applications."
    }),
    React.createElement(HelloWorld, {
        id: "backbone",
        "data-frameworkname": "Backbone.js",
        title: "Backbone.js gives structure to web applications..."
    }),
    React.createElement(HelloWorld, { id: "angular", "data-frameworkname": "angular.js", title: "Superheroic javaScript MVW framework" })
), document.getElementById('content'));
