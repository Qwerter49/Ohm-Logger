import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'





export default function NavbarContainer() {

  const renderTooltip = (props) => {
    return (
    <Tooltip id="button-tooltip" {...props}>
      Meditate
      {console.log()}
    </Tooltip>
    )
  }

    return (
        <Navbar className="vertical-nav vh-100 d-flex flex-column w-1" id="sidebar" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-links flex-column h-auto">
              <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                <Nav.Link className=" meditate-link my-5" href="#meditate"><i className="fas fa-spa fa-3x"></i></Nav.Link>
              </OverlayTrigger>
              <Nav.Link className="my-5" href="#profile"><i class="fas fa-user fa-3x"></i></Nav.Link>
              <Nav.Link className="my-5" href="#calandar"><i class="far fa-calendar-alt fa-3x"></i></Nav.Link>
              <Nav.Link className="my-5" href="#logout"><i class="fas fa-sign-out-alt fa-3x"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}
