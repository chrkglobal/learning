import { Link } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";

export default function Header() {
    return (
        <>
            <div className="top-header">

                <div style={{ background: "#eee", padding: "10px 20px" }}>
                    <div className="header-top-left-section">
                        <h3>Admin Portal</h3>
                    </div>
                    <div className="header-top-right-section">

                        <li>


                            <Button startIcon={<LogoutIcon />} to="/logout" variant="contained" title="Logout" color="primary" >Logout</Button>
                        </li>
                    </div>
                </div>

            </div>
            <div style={{ background: "#eee", padding: "5px 20px", marginTop: '2px' }}>
                Breadcrumb
            </div>
        </>
    );
}
