const { Link } = ReactRouter;

// App component - represents the whole app
Home = React.createClass({
  render() {
    return (
      <div>
        <Link to='/login'>Login Page</Link>
        <p>This is the home route.</p>
      </div>
    );
  }
});
