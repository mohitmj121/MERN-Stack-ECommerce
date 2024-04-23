import React, { useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import {  addToCart ,removeOne} from "../../redux/reducers/cartReducer";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({item}) => {
    const [ counter, setCounter ] = useState(1);
    const dispatch =useDispatch()

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
        dispatch(addToCart(item.id))
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
        dispatch(removeOne(item))
    };

    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} disabled={counter === 0}>-</StyledButton>
            <Button disabled>{counter}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;