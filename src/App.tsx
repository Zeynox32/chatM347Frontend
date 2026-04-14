import './App.css'
import SignIn from "./singIn-Up/SingIn.tsx";
import { Routes, Route } from "react-router-dom";
import SignUp from "./singIn-Up/SingUp.tsx";

function App() {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            padding: 0,
            margin: 0,
        }}>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
