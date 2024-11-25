import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import data from "./data.js";
import Shoe from "./Shoe.js";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./Detail.js";

function App() {
    let [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/">홈</Link>
                        <Link to="/detail">상세페이지</Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
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
                        </>
                    }
                />
                <Route path="/detail" element={<Detail></Detail>} />
            </Routes>
        </div>
    );
}

export default App;
