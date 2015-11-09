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
              <div onClick={e => e.stopPropagation()}>
                <Link to="/">Home</Link>
              </div>
            </NavItem>
            <NavItem divider/>
            <NavItem eventKey={2}>
              <div onClick={e => {debugger; e.stopPropagation()}}>  
                <Link to="/login">Login</Link>
              </div>
            </NavItem>
          </Nav>
        </Navbar>
        <p>This is the home route.</p>
      </div>
    );
  }
});