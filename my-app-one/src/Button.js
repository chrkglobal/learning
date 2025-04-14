import React, { useState } from "react";

function Button() {
    const [showTable, setShowTable] = useState(false);

   


    return (
        <>
            <Button onClick={this.toggleTable()}>
                {showTable ? "Hide Table" : "Show Table"}
            </Button>


        </>
    );
}

export default Button;
