import React from 'react';
import {InfoBox} from "../components/InfoBox/InfoBox.layout";
import {css} from "styled-components";

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
            CancelButton={args.CancelButton}
            cancelButtonStyles={css`background: red; border-radius: 4px`}
            actions={args.actions}
            isVisible={args.isVisible}
            dispatchToggleInfoBoxVisibility={args.dispatchToggleInfoBoxVisibility}
            text={args.text}
            actionsWrapperWidth={args.actionsWrapperWidth}
            containerStyles={css`border-radius: 0; border: 1px solid blue; background: yellow`}
        />
    )
};

export const Standard = Template.bind({});
export const CustomButtonVariant = Template.bind({});

const args = {
    isVisible: true,
    dispatchToggleInfoBoxVisibility: () => console.log("clicked"),
    text: (
        <>
            <span>To create a new list, enter the list name and a password.</span>
            <p>To join an existing list, provide the list name and the correct password.</p>
        </>
    ),
    actions: [
        {action: () => console.log("A"), label: "button A", styles: css`background: magenta`},
        {action: () => console.log("B"), label: "button B"}
    ],
    actionsWrapperWidth: "300px"
};

Standard.args = args;

CustomButtonVariant.args = {
    ...args,
    CancelButton: () => <button>x</button>
};


