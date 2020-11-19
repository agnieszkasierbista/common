import React from 'react';
import Icons from "./buckets/Icons.layout";

export default {
    title: 'Icons',
    component: Icons,
    argTypes: {
        color: {control: "color"}
    },
};

const Template = (args) => {

    return (
        <Icons color={args.color}/>
    );
};

export const Standard = Template;

Standard.args = {
    color: 'blue',
};

