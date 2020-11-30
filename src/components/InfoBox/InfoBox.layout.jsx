import React from "react";
import {StyledButtonsContainer, StyledCloseButton, StyledContent, StyledInfoBox, StyledOverlay} from "./InfoBox.styled";
import xIconPath from "bootstrap-icons/icons/x-square.svg";


export function InfoBox(
    {
        isVisible,
        dispatchToggleInfoBoxVisibility,
        text,
        maxActionsWrapperWidth,
        actions
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

                        </StyledContent>

                        <StyledButtonsContainer maxWidth={maxActionsWrapperWidth}>

                            {actions.map(({action, label}) => {
                                return (
                                    <button
                                        key={label}
                                        onClick={function (event) {

                                            event.stopPropagation();

                                            action(event);

                                        }}
                                    >
                                        {label}
                                    </button>
                                )
                            })}
                        </StyledButtonsContainer>

                    </StyledInfoBox>
                </StyledOverlay>
            )
            : null
    )
}