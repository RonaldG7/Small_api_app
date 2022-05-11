import './App.css';
import "normalize.css"
import {FC, useState} from "react";
import mainContext from "./context/mainContext";
import IndexPage from "./pages/IndexPage";

interface CountryList {
    name: string
    region: string
    area: number
    independent: boolean
}

const App: FC = () => {

  const [list, setList] = useState<CountryList[]>([])
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [pagination, setPagination] = useState<CountryList[]>([])
  const [placeholder, setPlaceholder] = useState<string>("")
  const [checkboxLTU, setCheckboxLTU] = useState<boolean>(false)
  const [checkboxOceana, setCheckboxOceana] = useState<boolean>(false)

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
