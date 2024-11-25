import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

    return (
        <div className="container">
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
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}
