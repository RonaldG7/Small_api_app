import './App.css';
import "normalize.css"
import {useState} from "react";
import mainContext from "./context/mainContext";
import IndexPage from "./pages/IndexPage";

function App() {

    const [list, setList] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [pagination, setPagination] = useState([])
    const [placeholder, setPlaceholder] = useState("")
    const [checkboxLTU, setCheckboxLTU] = useState(false)
    const [checkboxOceana, setCheckboxOceana] = useState(false)

    return (
        <mainContext.Provider
            value={{
                list,
                setList,
                page,
                setPage,
                rowsPerPage,
                setRowsPerPage,
                pagination,
                setPagination,
                placeholder,
                setPlaceholder,
                checkboxLTU,
                setCheckboxLTU,
                checkboxOceana,
                setCheckboxOceana
            }}>

            <IndexPage/>
        </mainContext.Provider>
    );
}

export default App;
