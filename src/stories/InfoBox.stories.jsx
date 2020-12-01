import React from 'react';
import {InfoBox} from "../components/InfoBox/InfoBox.layout";


export default {
    title: 'InfoBox',
    component: InfoBox,
    argTypes: {
        isVisible: {},
        dispatchToggleInfoBoxVisibility: {},
        text: {},
        actionsWrapperWidth: {}
    },
};

const Template = (args) => {

    return (
        <InfoBox
            actions={args.actions}
            isVisible={args.isVisible}
            dispatchToggleInfoBoxVisibility={args.dispatchToggleInfoBoxVisibility}
            text={args.text}
            actionsWrapperWidth={args.actionsWrapperWidth}
        />
    )
};

export const Standard = Template;

Standard.args = {
    isVisible: true,
    dispatchToggleInfoBoxVisibility: () => console.log("clicked"),
    text: (
        <>
            <span>To create a new list, enter the list name and a password.</span>
            <p>To join an existing list, provide the list name and the correct password.</p>
        </>
    ),
    actions: [
        {action: () => console.log("A"), label: "button A"},
        {action: () => console.log("B"), label: "button B"}
        ],
    actionsWrapperWidth: "300px"
};

