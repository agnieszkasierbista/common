import React from "react";
import {
    StyledButtonsContainer,
    StyledButtonsContainerWrapper,
    StyledContent,
    StyledInfoBox,
    StyledOverlay
} from "./InfoBox.styled";
import xIconPath from "bootstrap-icons/icons/x-square.svg";
import {StyledCloseButton} from "../CancelButton/CancelButton.styled";
import {StyledButton} from "../Button/Button.styled";


export function InfoBox(
    {
        isVisible,
        dispatchToggleInfoBoxVisibility,
        text,
        actionsWrapperWidth,
        actions,
        containerStyles,
        CancelButton,
        cancelButtonStyles
    }
) {

    const Close = CancelButton || StyledCloseButton;

    return (
        isVisible
            ? (
                <StyledOverlay
                    onClick={dispatchToggleInfoBoxVisibility}
                >
                    <StyledInfoBox
                        containerStyles={containerStyles}
                    >
                        <Close
                            cancelButtonStyles={cancelButtonStyles}
                            src={xIconPath}
                            alt=""
                            width="35"
                            height="35"
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

                                {(actions || []).map(({action, label, styles}) => {
                                    return (
                                        <StyledButton
                                            styles={styles}
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