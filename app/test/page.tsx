"use client"

import { useState } from "react";
import axios from "axios";

const Test = () => {
    const [res, setRes] = useState();

    const getData = async () => {
        const response = await axios.get("http://127.0.0.1:8000");
        setRes(response);
    }

    return (
        <div>
            <p>Test Page</p>
            <button
                onClick={() => getData()}
            >
                button
            </button>
            <p>{res && res.data.Hello}</p>
        </div>
    )
}

export default Test;
