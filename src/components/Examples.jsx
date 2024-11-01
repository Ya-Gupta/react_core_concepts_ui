import React from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";


export default function Examples() {
    const [states, setState] = React.useState();
    let tabData = <p>Please select a topic</p>

    if (states) {
        tabData = (
            <div id='tab-content'>
                <h3>{EXAMPLES[states].title}</h3>
                <p>{EXAMPLES[states].description}</p>
                <pre>
                    <code>{EXAMPLES[states].code}</code>
                </pre>
            </div>
        )
    }
    function handleSelect(val) {

        setState(val);

    }

    return (
        <Section title="Examples" id="examples">
            <Tabs button={<>
                <TabButton isSelect={states === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelect={states === 'jsx'} onClick={() => handleSelect('jsx')}>Jsx</TabButton>
                <TabButton isSelect={states === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelect={states === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>}>
                {tabData}
            </Tabs>


        </Section>
    );
}