import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // simple redirect
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <form onSubmit={handleLogin} style={{padding:20,border:"1px solid #ccc",borderRadius:10}}>
        <h2>Admin Login 123</h2>
        <input type="text" placeholder="Username" required style={{display:"block",margin:"10px 0"}}/>
        <input type="password" placeholder="Password" required style={{display:"block",margin:"10px 0"}}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
