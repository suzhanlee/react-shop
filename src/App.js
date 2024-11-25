import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import data from "./data.js";
import Shoe from "./component/Shoe.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import About from "./pages/About.js";

function App() {
    let [shoes] = useState(data);
    let navigate = useNavigate(); // hook

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>홈</Nav.Link>
                        <Nav.Link onClick={() => navigate("/detail")}>
                            상세페이지
                        </Nav.Link>
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

                <Route path="/about" element={<About></About>}> 
                    <Route path="/about/member" element={<div>멤버임</div>} />
                    <Route path="/about/location" element={<div>위치임</div>} />
                </Route>
                <Route path="*" element={<div>없는페이지요(404 page)</div>} />
            </Routes>
        </div>
    );
}

export default App;
