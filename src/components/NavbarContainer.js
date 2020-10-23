import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function NavbarContainer(props) {


  // Need to refactor these methods into the same method
  const renderMeditateTooltip = (props) => {
    return (
    <Tooltip id="button-tooltip" {...props}>
      Meditate
      {console.log()}
    </Tooltip>
    )
  }
  const renderProfileTooltip = (props) => {
    return (
    <Tooltip id="button-tooltip" {...props}>
      Profile
      {console.log()}
    </Tooltip>
    )
  }
  const renderCalandarTooltip = (props) => {
    return (
    <Tooltip id="button-tooltip" {...props}>
      Calandar
      {console.log()}
    </Tooltip>
    )
  }
  const renderLogoutTooltip = (props) => {
    return (
    <Tooltip id="button-tooltip" {...props}>
      Logout
      {console.log()}
    </Tooltip>
    )
  }

  const handleLogoutClick = () => {
    localStorage.removeItem('token')
    props.history.push('/login')
  }

    return (
        <Navbar className="vertical-nav vh-100 d-flex flex-column w-1" id="sidebar" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  className="flex-column" id="responsive-navbar-nav">
            <Nav className="nav-links justify-content-around d-flex flex-column h-auto">
              <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderMeditateTooltip}>
                <Nav.Link className=" meditate-link my-5" href="meditate"><i className="fas fa-spa fa-3x"></i></Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderProfileTooltip}>
                <Nav.Link className="my-5" href="profile"><i className="fas fa-user fa-3x"></i></Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderCalandarTooltip}>
                <Nav.Link className="my-5" href="calandar"><i className="far fa-calendar-alt fa-3x"></i></Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderLogoutTooltip}>
                <Nav.Link className="my-5" onClick={handleLogoutClick}><i className="fas fa-sign-out-alt fa-3x"></i></Nav.Link>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}
