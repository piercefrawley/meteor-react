const { Link } = ReactRouter; 

// App component - represents the whole app
Home = React.createClass({
  render() {
    return (
      <div>
        <p>This is the index route.</p>
        <Link to="/foo">Show me your foo.</Link>
        <AccountsUIWrapper/>
      </div>
    );
  }
});