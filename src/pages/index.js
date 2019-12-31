import React, { useState, useEffect, createRef } from "react"
import { toInt, toArabic, fromArabic } from "../utils/numbers";

const initialState = {
    year: 2020,
    isLeap: true,
    txtWidth: 0,
};

const isLeap = (year) => {
    year = toInt(year);

    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    }

    return true;
}

export default () => {
    const [state, setState] = useState(initialState);
    var hideRef = createRef();

    const onChange = (e) => {
        const newState = { ...state };

        const val = toInt(e.target.value);
        if (
            e.target.value.length === 0
            || (
                val == fromArabic(e.target.value)
                && val < 1000000
            )
        ) {
            newState.year = toArabic(e.target.value);
        }

        hideRef.current.textContent = newState.year;
        newState.txtWidth = hideRef.current.offsetWidth + 'px';
        newState.isLeap = isLeap(val);

        setState(newState);
    };

    useEffect(() => onChange({target: {value: "2020"}}), []);

    return (
    <div className={"container"}>
        <h1>
            هي
            <span className={"hide"} ref={hideRef}>2020</span>
            <input className={"txt"} style={{width: state.txtWidth}} value={state.year} onChange={onChange}/>
            سنة كبيسة؟
        </h1>
        <br />
        <h2>
            {state.isLeap ? 'آه' : 'لأ'}
        </h2>
    </div>
    );
};
