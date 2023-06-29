import React, {useMemo, useState} from "react";

const genereateData = ()=>{
    console.log('Hi big data')

    return 2131231231
}

export const Example1 = () => {
    console.log("Example1")

    const valueOfData = useMemo(genereateData,[])

    const [counter, setCounter] = useState(genereateData)


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>


}
