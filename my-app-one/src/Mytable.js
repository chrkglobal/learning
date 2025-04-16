import React, { useState } from "react";
// import Button from "./Button";
function Myheader({ thData }) {
    return (<thead>
        {thData.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                    <th key={colIndex}>{cell}</th>
                ))}
            </tr>
        ))}
    </thead>);
}

function myFunction(rowIndex){
    alert(rowIndex); 
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked == true){
          text.style.display = "block";
        } else {
           text.style.display = "none";
        }
      
    console.log("111111111111",rowIndex);
}
function showAlert(){
    alert("hello");
}
function MyBody({ tableData }) {
    const [checkedRows, setCheckedRows] = useState({}); // store which checkboxes are checked
    const handleCheckboxChange = (rowIndex) => {
        setCheckedRows(prev => ({
            ...prev,
            [rowIndex]: !prev[rowIndex],
        }));
        console.log("Checked row index:", rowIndex);
    };
    
    return (
        <tbody>
            {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <td style={{width:'30px'}}>
                    <input
                             type="checkbox"
                             onClick={showAlert}
                             checked={!!checkedRows[rowIndex]}
                             onChange={() => handleCheckboxChange(rowIndex)}
                        />
                    </td>
                    {row.map((cell, colIndex) => (
                        <td key={colIndex}>{cell}</td>
                    ))}
                    <td>
                        <a href="#">Edit</a>{" "}<a href="#">Delete</a>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}
function MyTable({ locData, locBody }) {
    const [showTable, setShowTable] = useState(false);

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
