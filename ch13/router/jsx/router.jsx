const ReactRouter = require('react-router');
let { Router, Link } = ReactRouter;

ReactDOM.render(
    <Router history={hashHistory}>
        <Router path='/' component={Content}>
            <Route path='/about' component={About} />
            <Route path='/posts' component={Posts} posts='{posts}' />
            <Route path='/posts/:id' component={Post} posts='{posts}' />
            <Route path='/contact' component={Contact} />
        </Router>
        <Route path='/login' component={Login} />
    </Router>,
    document.getElementById('content')
);
