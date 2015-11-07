const { Link } = ReactRouter;

Foo = React.createClass({

  render() {
    return (
      <div>
        <p>This is my foo.</p>
        <Link to="/">Now go home</Link>
      </div>
    );
  }
});