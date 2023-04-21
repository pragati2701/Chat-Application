import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
function Navigation() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        await logoutUser(user);
        // redirect to home page
        window.location.replace("/");
    }
    return (
        <Navbar  expand="lg" style = { { backgroundColor:"#05BFDB"}}>
            <Container >
                <LinkContainer to="/">
                    <Navbar.Brand >
                        Chat App
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        {!user && (
                             <Button href = "/login"  style ={{backgroundColor:"#87CBB9", margin:"5px", color:"black", display:"flex", alignItems:"center"}}>
                                Login
                            </Button>
                        )}
                      <Button href="/chat" 
                      style ={{backgroundColor:"#87CBB9", margin:"5px", color:"black", display:"flex", alignItems:"center"}}>
                        Chat
                        </Button>
                        <Button href="/about" 
                      style ={{backgroundColor:"#87CBB9",  margin:"5px",color:"black", display:"flex", alignItems:"center"}}>
                        About us
                        </Button>
                        {user && (
                            <Button style ={{backgroundColor:"#87CBB9",margin:"5px", color:"black", }}>
                            <NavDropdown
                                title={
                                    <>
                                        <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%"}} />
                                        {user.name}
                                    </>
                                }
                                id="basic-nav-dropdown"
                            >
                                
                                <NavDropdown.Item>
                                    <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
