import React from "react";

const BoardView = ({userObj}) => {
    const {params} = this.props.match;
    const temp1 = this.props.location.state.bid;
    console.log("hi");
    console.log(params);
    console.log(temp1);
    return(
        <>
            <div>
                <h1>hi mother fucker</h1>
                <h1>{params}</h1>
                <h1>{temp1}</h1>
            </div>
        </>
    );
}

export default BoardView;