var React = require('react')
var ReactRouter = require('react-router')
var hashHistory = ReactRouter.hashHistory
var IndexRoute = ReactRouter.IndexRoute

var Router = ReactRouter.Router
var Route = ReactRouter.Route

var Main = require('../components/Main')
var Home = require('../components/Home')
var PromptContainer = require('../container/PromptContainer')

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path='PlayerOne' header="Player One" component={PromptContainer} />
      <Route path='PlayerTwo/:playerOne' header="Player Two" component={PromptContainer} />
    </Route>
  </Router>
)

module.exports = routes