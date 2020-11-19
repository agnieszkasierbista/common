import React from "react";
import {AlertCircle} from "../../components/icons/AlertCircle/AlertCircle.layout.js";
import {Bookmark} from "../../components/icons/Bookmark/Bookmark.layout";
import {Calendar} from "../../components/icons/Calendar/Calendar.layout";
import {ClipboardChecked} from "../../components/icons/ClipboardChecked/ClipboardChecked.layout";
import {Clock} from "../../components/icons/Clock/Clock.layout";
import {FilePlus} from "../../components/icons/FilePlus/FilePlus.layout";
import {Trash} from "../../components/icons/Trash/Trash.layout"

export default function Icons(args) {
    return (
        <div style={{fontSize: 40}}>
            <div>AlertCircle: <AlertCircle color={args.color}/></div>
            <div>Bookmark: <Bookmark color={args.color}/></div>
            <div>Calendar: <Calendar color={args.color}/></div>
            <div>ClipboardChecked: <ClipboardChecked color={args.color}/></div>
            <div>Clock: <Clock color={args.color}/></div>
            <div>FilePlus: <FilePlus color={args.color}/></div>
            <div>Trash: <Trash color={args.color}/></div>
        </div>
    )
}