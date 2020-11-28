import React from 'react';
import {InfoBox} from "../components/InfoBox/InfoBox.layout";


export default {
    title: 'InfoBox',
    component: InfoBox,
    argTypes: {
        isVisible: {},
        dispatchToggleInfoBoxVisibility: {},
        text: {},
        positiveAction: {},
        positiveActionLabel: {},
        negativeAction: {},
        negativeActionLabel: {}
    },
};

const Template = (args) => {

    return (
        <InfoBox
            isVisible={args.isVisible}
            dispatchToggleInfoBoxVisibility={args.dispatchToggleInfoBoxVisibility}
            text={args.text}
            positiveAction={args.positiveAction}
            positiveActionLabel={args.positiveActionLabel}
            negativeAction={args.negativeAction}
            negativeActionLabel={args.negativeActionLabel}
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
    positiveAction: () => console.log("action!"),
    positiveActionLabel: "Remove",
    negativeAction: () => console.log("negative action!"),
    negativeActionLabel: "Cancel"
};

