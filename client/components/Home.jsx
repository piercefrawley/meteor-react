const { Link } = ReactRouter;
const { Nav, Navbar, NavItem } = ReactBootstrap

// App component - represents the whole app
Home = React.createClass({
  render() {
    return (
      <div>
        <Navbar inverse toggleNavKey={0}>
          <Nav right eventKey={0}>
            <NavItem eventKey={1} href="#">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem divider/>
            <NavItem eventKey={2}>
              <Link to="/login">Login</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <iframe src="https://media.giphy.com/media/5ehBR5qtLEXBe/giphy.gif" width="480" height="270 " frameBorder="0" allowFullScreen/>
        <p>This is the home route.</p>
      </div>
    );
  }
});