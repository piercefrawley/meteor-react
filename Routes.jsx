const { Router, Route, IndexRoute } = ReactRouter;

Routes = React.createClass({
  getInitialState() {
    return {};
  },
  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="foo" component={Foo}/>
        </Route>
      </Router>
    );
  }
});