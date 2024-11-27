import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { tab } from "@testing-library/user-event/dist/tab";
import TabContent from "../component/TabContent";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";

export default function Detail(props) {
    // useEffect(() => {
    //     // mount, update 시 실행 => 랜더링이 모두 된 후에 실행된다!
    //     setTimeout(() => {
    //         document.querySelector(".alert").style.display = "none";
    //     }, 2000);
    // });

    let [alert, setAlert] = useState(true);

    useEffect(() => {
        // mount, update 시 실행 => 랜더링이 모두 된 후에 실행된다!
        let timer = setTimeout(() => {
            setAlert(false);
            return () => {};
        }, 2000);
    }, []);

    let { id } = useParams();
    let findProduct = props.shoes.find((s) => {
        return s.id == id;
    });

    let [quantity, setQuantity] = useState(0);
    let [quantityAlert, setQuantityAlert] = useState(false);
    useEffect(() => {
        if (!Number.isInteger(Number(quantity))) {
            setQuantityAlert(true);
        } else {
            setQuantityAlert(false);
        }
    }, [quantity]);

    let [tab, setTab] = useState(0);
    let [fade, setFade] = useState("");

    let dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setFade("end");
        }, 100);
        return () => {
            setFade("");
        };
    }, [props.shoes]);

    return (
        <div className={"container start " + fade}>
            {alert == true ? (
                <div className="alert alert-warning">2초 이내 구매시 할인</div>
            ) : null}
            {quantityAlert == true ? (
                <div className="alert alert-warning">숫자만 입력하세요</div>
            ) : null}
            <input
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
                className="quantity"
                placeholder="숫자 입력 창"
            ></input>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://codingapple1.github.io/shop/shoes1.jpg"
                        width="100%"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}</p>
                    <button
                        onClick={() => {
                            dispatch(
                                addProduct({
                                    id: findProduct.id,
                                    name: findProduct.title,
                                    count: 3000
                                }),
                            );
                        }}
                        className="btn btn-danger"
                    >
                        주문하기
                    </button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(0);
                        }}
                        eventKey="link0"
                    >
                        버튼0
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(1);
                        }}
                        eventKey="link1"
                    >
                        버튼1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(2);
                        }}
                        eventKey="link2"
                    >
                        버튼2
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab}></TabContent>
        </div>
    );
}
