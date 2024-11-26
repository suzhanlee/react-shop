import { useEffect, useState } from "react";

export default function TabContent(props) {
    let [fade, setFade] = useState("");

    useEffect(() => {
        let timer = setTimeout(() => {
            setFade("end");
        }, 100);
        return () => {
            clearTimeout(timer);
            setFade("");
        };
    }, [props.tab]);

    return (
        <div className={"start " + fade}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
        </div>
    );
}
