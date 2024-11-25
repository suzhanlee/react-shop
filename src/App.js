import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
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
                    <Col>
                        <img
                            src="https://codingapple1.github.io/shop/shoes1.jpg"
                            width="80%"
                        ></img>
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                    <Col>
                        <img
                            src="https://codingapple1.github.io/shop/shoes2.jpg"
                            width="80%"
                        ></img>
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                    <Col>
                        <img
                            src="https://codingapple1.github.io/shop/shoes3.jpg"
                            width="80%"
                        ></img>
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
