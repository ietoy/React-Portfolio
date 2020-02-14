import React from "react";

function CardContainer(props) {
    return (
        <div className="container row">
            {props.children}
        </div>
    )
}

export default CardContainer;