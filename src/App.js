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
import axios from "axios";
import Cart from "./pages/Cart.js";

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate(); // hook
    let [click, setClick] = useState(2);
    let [productAlert, setProductAlert] = useState(false);
    let [loading, setLoading] = useState(false);

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
                                {productAlert == true ? (
                                    <div>마지막 상품입니다.</div>
                                ) : null}
                                {loading == true ? (
                                    <div>로딩중입니다!</div>
                                ) : null}
                                <button
                                    onClick={() => {
                                        if (click > 3) {
                                            setProductAlert(true);
                                        } else {
                                            setLoading(true);
                                            axios
                                                .get(
                                                    "https://codingapple1.github.io/shop/data" +
                                                        click +
                                                        ".json",
                                                )
                                                .then((result) => {
                                                    let copy = [
                                                        ...shoes,
                                                        ...result.data,
                                                    ];
                                                    setShoes(copy);
                                                    setClick(click + 1);
                                                    setLoading(false);
                                                })
                                                .catch((e) => {
                                                    setLoading(false);
                                                });
                                        }
                                    }}
                                >
                                    더보기
                                </button>
                            </Container>
                        </>
                    }
                />

                <Route
                    path="/detail/:id"
                    element={<Detail shoes={shoes}></Detail>}
                />

                <Route path="/about" element={<About></About>}>
                    <Route path="member" element={<div>멤버임</div>} />
                    <Route path="location" element={<div>위치임</div>} />
                </Route>

                <Route path="/cart" element={<Cart></Cart>}></Route>

                <Route path="*" element={<div>없는페이지요 404 page</div>} />
            </Routes>
        </div>
    );
}

export default App;
