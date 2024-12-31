import StudentsListProvider from "./pages/StudentsListProvider";
import './index.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import DisplayStudentList from "./pages/DisplayStudentList";

export default function App() {
    return (
             
                <StudentsListProvider />
        
    );
}
