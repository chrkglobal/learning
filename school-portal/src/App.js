import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Teachers from "./pages/Teachers";
import AddTeacher from "./pages/AddTeacher";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
           <Route path="/" element={<Dashboard />} />
  <Route path="/students" element={<Students />} />
  <Route path="/add-student" element={<AddStudent />} />
  <Route path="/teachers" element={<Teachers />} />
  <Route path="/add-teacher" element={<AddTeacher />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}
export default App;
