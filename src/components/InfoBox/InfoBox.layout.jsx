import React from "react";
import {StyledCloseButton, StyledContent, StyledInfoBox, StyledOverlay} from "./InfoBox.styled";
import xIconPath from "bootstrap-icons/icons/x-square.svg";


export function InfoBox({isVisible, dispatchToggleInfoBoxVisibility}) {

    return (
        isVisible
            ? (
                <StyledOverlay
                    onClick={dispatchToggleInfoBoxVisibility}
                >
                    <StyledInfoBox>
                        <StyledCloseButton
                            src={xIconPath}
                            alt=""
                            width="35"
                            height="35"
                            title="Bootstrap"
                            onClick={function(event) {

                                event.stopPropagation();

                                dispatchToggleInfoBoxVisibility();
                            }}
                        />
                        <StyledContent>

                            <span>To create a new list, enter the list name and a password.</span>
                            <p>To join an existing list, provide the list name and the correct password.</p>

                        </StyledContent>
                    </StyledInfoBox>
                </StyledOverlay>
            )
            : null
    )
}