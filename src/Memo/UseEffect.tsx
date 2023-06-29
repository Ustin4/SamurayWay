import React, {useEffect, useState} from "react";
import {log} from "util";

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    },)

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect only if change deps')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello,{counter} ={fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {



    const [counter, setCounter] = useState(new Date())
    const [fake, setFake] = useState(1)
    console.log('SimpleExample')


    useEffect(()=>{

        const interval = setInterval(()=>{
           setCounter( state =>new Date(state.getTime() + 1000))
        },1000)
       return ()=> clearInterval(interval)
    },[])


/*

    useEffect(() => {
        setInterval(() => {
            setCounter((state)=> state + 1)
        }, 1000)

    }, [])

*/

    return <>
        Hello,{counter.toLocaleTimeString()} - fake:{fake}
        {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
    </>
}