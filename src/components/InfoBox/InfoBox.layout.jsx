import React from "react";
import {
    StyledButton,
    StyledButtonsContainer,
    StyledButtonsContainerWrapper,
    StyledCloseButton,
    StyledContent,
    StyledInfoBox,
    StyledOverlay
} from "./InfoBox.styled";
import xIconPath from "bootstrap-icons/icons/x-square.svg";


export function InfoBox(
    {
        isVisible,
        dispatchToggleInfoBoxVisibility,
        text,
        actionsWrapperWidth,
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

                        <StyledButtonsContainerWrapper>
                            <StyledButtonsContainer width={actionsWrapperWidth}>

                                {actions.map(({action, label}) => {
                                    return (
                                        <StyledButton
                                            key={label}
                                            onClick={function (event) {

                                                event.stopPropagation();

                                                action(event);

                                            }}
                                        >
                                            {label}
                                        </StyledButton>
                                    )
                                })}
                            </StyledButtonsContainer>
                        </StyledButtonsContainerWrapper>

                    </StyledInfoBox>
                </StyledOverlay>
            )
            : null
    )
}