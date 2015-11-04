if(Meteor.isClient){
  const { Router, Route, IndexRoute } = ReactRouter;

  const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()
  const routes = (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="foo" component={Foo}/>
      </Route>
    </Router>
  );

  Meteor.startup(() => {
    React.render(<Routes history={history}/>, document.body);
  });
}