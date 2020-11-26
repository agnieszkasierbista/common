import React from 'react';
import {InfoBox} from "../components/InfoBox/InfoBox.layout";


export default {
    title: 'InfoBox',
    component: InfoBox,
    argTypes: {
        isVisible: {},
        dispatchToggleInfoBoxVisibility: {}
    },
};

const Template = (args) => {

    return (
        <InfoBox
            isVisible={args.isVisible}
            dispatchToggleInfoBoxVisibility={args.dispatchToggleInfoBoxVisibility}
        />
    );
};

export const Standard = Template;

Standard.args = {
    isVisible: true,
    dispatchToggleInfoBoxVisibility: () => console.log("clicked")
};

