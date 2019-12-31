import React, { useState, useEffect, createRef } from "react"
import { toInt, toArabic, fromArabic } from "../utils/numbers";
import Helmet from "react-helmet";

const initialState = {
    year: 2020,
    isLeap: true,
    txtWidth: 0,
};

const isLeap = (year) => {
    year = toInt(year);

    if (year % 4 !== 0) {
        return false;
    }

    if (year % 100 !== 0) {
        return true;
    }

    if (year % 400 !== 0) {
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
            hideRef.current.textContent = newState.year;
            newState.txtWidth = hideRef.current.offsetWidth + 'px';
            newState.isLeap = isLeap(val);

            setState(newState);
        }
    };

    useEffect(() => onChange({target: {value: "2020"}}), []);

    return (
    <div className={"container"}>
        {
            state.isLeap
            ? <Helmet title="سنة كبيسة 🎉" defer={false} />
            : <Helmet title="سنة عادية 🤨" defer={false} />
        }
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

        <br />

        <a href="https://eawd.me">ارجع للرئيسية</a>
        |
        <a href="https://ar.wikipedia.org/wiki/%D8%B3%D9%86%D8%A9_%D9%83%D8%A8%D9%8A%D8%B3%D8%A9" target="_blank">معلومات اكتر</a>
    </div>
    );
};
