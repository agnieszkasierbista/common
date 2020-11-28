import React from "react";
import {StyledCloseButton, StyledContent, StyledInfoBox, StyledOverlay} from "./InfoBox.styled";
import xIconPath from "bootstrap-icons/icons/x-square.svg";


export function InfoBox({isVisible, dispatchToggleInfoBoxVisibility, text, positiveAction, positiveActionLabel}) {

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
                            onClick={function (event) {

                                event.stopPropagation();

                                dispatchToggleInfoBoxVisibility();
                            }}
                        />
                        <StyledContent>

                            {text}

                            <div>
                                {
                                    positiveAction
                                        ? (
                                            <button
                                                onClick={positiveAction}
                                            >
                                                {positiveActionLabel}
                                            </button>
                                        )
                                        : "NIE"
                                }
                            </div>

                        </StyledContent>
                    </StyledInfoBox>
                </StyledOverlay>
            )
            : null
    )
}