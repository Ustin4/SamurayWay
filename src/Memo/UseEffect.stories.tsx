import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect',
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)
    console.log('Component rendered')
    useEffect(() => {
        console.log('Effect occurred : ' + counter)

        return () => {
            console.log('reset effect')
        }

    }, [counter])
    return <>
        Hello,counter:{counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}></button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('Component rendered with' + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            // window.removeEventListener('keypress', handler)
        }

    }, [text])
    return <>
        Typed text : {text}
    </>
}
export const SetTimeoutExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with' + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('timeout expired')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])
    return <>
        Typed text : {text}
    </>
}

