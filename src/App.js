import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import data from "./data.js";
import Shoe from "./Shoe.js";

function App() {
    let [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main-bg"></div>

            <Container>
                <Row>
                    {shoes.map((s, idx) => {
                        return (
                            <Shoe
                                idx={idx + 1}
                                name={s.title}
                                description={s.content}
                            ></Shoe>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default App;
