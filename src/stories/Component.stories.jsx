import React from 'react';

import Component from "../components/Component.layout";

export default {
    title: 'Component',
    component: Component,
    argTypes: {
        copy: {control: 'text'},
    },
};

const Template = (args) => {

    return (
        <Component
            copy={args.copy}/>
    );
};

export const Standard = Template;

Standard.args = {
    copy: 'copy example'
};

