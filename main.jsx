if(Meteor.isClient){
  const { Router, Route, IndexRoute } = ReactRouter;

  const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

  Meteor.startup(() => {
    React.render(<Routes history={history}/>, document.body);
  });
}