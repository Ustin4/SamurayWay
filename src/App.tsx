import React, {useState} from 'react';
import './App.css';
import {RattingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function sum(a: number, b: number) {
    alert(a + b)
}

/*sum(23, 12);*/

function App() {
    console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RattingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const [value, setValue] = useState('2')

    const action = () => {
        console.log("render")
    }

    return (
        <div className={"App"}>
            {/*   <OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}*/}

            <UncontrolledAccordion titleValue={"Menu"}/>
           {/* <UncontrolledRating/>*/}


            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
*/}
            {/* <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}


           {/* <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: "1", title: "Minsk"},
                        {value: "2", title: "Moscow"},
                        {value: "3", title: "Kiev"}

                    ]}/>
*/}

        </div>
    );
}

type  PageTitlePropsType = {
    title: string

}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}


export default App;
