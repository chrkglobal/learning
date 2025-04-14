import React, { useState } from "react";

// import Button from "./Button";

    
function Myheader({thData}){
    return( <thead>
                    {thData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <th key={colIndex}>{cell}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>);
}

function MyBody({tableData}){
return(
    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
);
}
function MyTable( {locData, locBody}  ) {
    const [showTable, setShowTable] =useState(false) ;

    const toggleTable = () => {
        setShowTable(prev => !prev);
    };


    return (
        <>
            <button onClick={toggleTable}>
                {showTable ? "Hide Table" : "Show Table"}
            </button>
            {/* <Button /> */}

            {showTable && (
                <table border="1" cellPadding={0} cellSpacing={0} width="90%">     
                    <Myheader thData={locData} />
                   <MyBody tableData={locBody} />
                </table>
            )}
        </>
    );
}

export default MyTable;
