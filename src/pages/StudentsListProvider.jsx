import { createContext, useState } from "react";
import DisplayStudentList from "./DisplayStudentList";
import ManageFavourites from "./MangeFavourites";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Create the context
const StudentContext = createContext();

// Define the provider component
export default function StudentsListProvider() {
    const [students, setstudents] = useState(["Bharat", "Praveen", "Kumar", "Ramya", "Monica"]);
    const [favorites, setfavorites] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState(
        Array(students.length).fill(false)
    );

    return (
        <StudentContext.Provider value={{ students, setstudents, favorites, setfavorites, disabledButtons, setDisabledButtons }}>
            <BrowserRouter>
                <nav className="flex justify-around bg-gray-200 p-3">
                    <Link to="/students" className="text-blue-500 underline">Student List</Link>
                    <Link to="/favorites" className="text-blue-500 underline">Favorites</Link>
                </nav>

                <Routes>
                    <Route path="/students" element={<DisplayStudentList />} />
                    <Route path="/favorites" element={<ManageFavourites />} />
                </Routes>
            </BrowserRouter>
        </StudentContext.Provider>
    );
}

// Export the context for use in other components
export { StudentContext };
