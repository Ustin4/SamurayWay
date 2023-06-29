import React, {useCallback, useMemo, useState} from 'react'

/*export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = tempResultA * i

        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= a; i++) {
        let fake = 0
        while (fake < 100000000) {
            fake++
            const fakeValue = Math.random()
        }
        resultA = resultA * i
    }
    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>
    </>

}*/


export const UsersSecret = (props: { users: Array<string> }) => {

    console.log('USERS')
    return <div>
        {props.users.map((u, index) => <div key={index}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Ustin", "Veranika", "AAAA"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)

    }, [users])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>


}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["HTML", "CSS", "JS"])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)

    }, [books])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])
  const memoizedAddBook2 = useCallback(() => {
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}

        <Book books={newArray} addBook={memoizedAddBook}/>
    </>

}
type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

export const BooksSecret = (props: BookSecretPropsType) => {

    console.log('BooksSecret')
    return <div>

        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map((book, index) => <div key={index}>{book}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)

