import styled, {css} from 'styled-components';
import { ICustomButton } from '../../models/form-input.model';

const buttonStyles = css`
background-color: black;
color: white;
border: none;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`;

const googleStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
    background-color: #357ae8;
    border: none;
    }
`;

const getButtonStyles = (props: ICustomButton) => {
    if (props.isGoogle) {
        return googleStyles;
    }

    return props.inverted ? invertedStyles : buttonStyles;
}

export const CustomButtonContainer = styled.div`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;
${getButtonStyles}
`;