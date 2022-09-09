import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
    navbar: {
        height: "75px",
        width: "auto",
        backgroundColor: "pink"
    },
    main: {
        position: "relative",
        top: "30%"
    },
    links: {
        position: "relative",
        left: "38%",
        bottom: "17%",
        // margin : "2px"
    }

}

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 5
        }
    }

    render() {
        return (
            <div style={styles.navbar}>
                <h4 style={styles.main}>This is React Class</h4>
                {/* <h5>Count Multiply : {this.state.count * this.state.count}</h5> */}
                <span style={styles.links}>
                    <a href="#home">Home</a><>{'\u00A0'}{'\u00A0'}</>
                    <a href="#features">Services</a><>{'\u00A0'}{'\u00A0'}</>
                    <a href="#pricing">Pricing</a><>{'\u00A0'}{'\u00A0'}</>
                </span>
                {/* <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React July Batch Classes</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar> */}
            </div>
        )
    }
}

export default Navigation;

