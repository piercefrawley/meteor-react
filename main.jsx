if(Meteor.isClient){
  const { Router, Route, IndexRoute } = ReactRouter;
  const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(() => {
    React.render(<Routes history={history}/>, document.querySelector('#render-target'));
  });
}