import React from "react";
import {StyledCloseButton, StyledContent, StyledInfoBox, StyledOverlay} from "./InfoBox.styled";
import xIconPath from "bootstrap-icons/icons/x-square.svg";


export function InfoBox(
    {
        isVisible,
        dispatchToggleInfoBoxVisibility,
        text,
        positiveAction,
        positiveActionLabel,
        negativeAction,
        negativeActionLabel
    }
) {

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
                                                onClick={function (event) {

                                                    event.stopPropagation();

                                                    positiveAction(event);
                                                }}
                                            >
                                                {positiveActionLabel}
                                            </button>
                                        )
                                        : null
                                }

                                {
                                    negativeAction
                                        ? (
                                            <button
                                                onClick={function (event) {

                                                    event.stopPropagation();

                                                    negativeAction(event);
                                                }}
                                            >
                                                {negativeActionLabel}
                                            </button>
                                        )
                                        : null
                                }
                            </div>

                        </StyledContent>
                    </StyledInfoBox>
                </StyledOverlay>
            )
            : null
    )
}