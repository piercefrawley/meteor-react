const { Link } = ReactRouter; 

// App component - represents the whole app
Home = React.createClass({
  render() {
    return (
      <div>
        <p>This is the home route.</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }
});