import Col from "react-bootstrap/Col";

export default function Shoe(props) {
    return (
        <Col>
            <img
                src={
                    "https://codingapple1.github.io/shop/shoes" +
                    props.idx +
                    ".jpg"
                }
                width="80%"
            ></img>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </Col>
    );
}
