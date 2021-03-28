import  Navbar  from 'react-bootstrap/Navbar';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'
import SocialFeed from './components/SocialFeed';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">GameIQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Team</Nav.Link>
              <Nav.Link href="#pricing">Depth Chart</Nav.Link>
              <NavDropdown title="Playbooks" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Offense Playbook</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Defense Playbook</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Scheme Subs</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Coach Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div>
        <SocialFeed />
      </div>
    </div>
  );
}

export default App;
