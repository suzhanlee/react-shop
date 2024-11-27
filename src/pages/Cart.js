import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addStock } from "../store/cartSlice";

export default function Cart() {
    let stock = useSelector((state) => {
        return state.stock;
    });

    let cart = useSelector((state) => {
        return state.cart;
    });

    let dispatch = useDispatch();

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((c, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.count}</td>
                                <button
                                    onClick={() => {
                                        dispatch(addStock(c.id));
                                    }}
                                >
                                    +
                                </button>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
