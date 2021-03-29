class HelloWorld extends React.Component {
    render() {
        return <h1 {...this.props}>Hello {this.props.frameworkName} world!!!</h1>
    }
}

ReactDOM.render(
    <div>
        <HelloWorld id="ember" frameworkname="Ember.js" title="A frameworkd for creating ambitious web applications." />
        <HelloWorld
            id="backbone"
            frameworkname="Backbone.js"
            title="Backbone.js gives structure to web applications..."
        />
        <HelloWorld id="angular" frameworkname="angular.js" title="Superheroic javaScript MVW framework" />
    </div>,
    document.getElementById('content')
)
