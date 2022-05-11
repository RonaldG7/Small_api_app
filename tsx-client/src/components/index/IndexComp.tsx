import {FC, useContext, useEffect, useState} from 'react';
import mainContext from "../../context/mainContext";
import "./style.css"
import SingleRow from "../singleRow/SingleRow";
import Toolbar from "../toolbar/Toolbar";
import LinearProgress from '@mui/material/LinearProgress';

const IndexComp: FC = () => {

    const {
        list,
        setList,
        page,
        rowsPerPage,
        pagination,
        setPagination,
        placeholder,
        checkboxLTU,
        checkboxOceana
    } = useContext(mainContext)

    const [status, setStatus] = useState<string | null>(null)
    const [spinner, setSpinner] = useState<boolean>(false)

    const fetchData = async () => {
        setSpinner(true)
        try {
            const fetchAPI = await fetch("https://restcountries.com/v2/all?fields=name,region,area")
            if (fetchAPI.status === 200) {
                const countryList = await fetchAPI.json()
                setStatus(null)
                setSpinner(false)
                setList(countryList)
            }
        } catch (err) {
            setSpinner(false)
            setStatus("Something went wrong. Error message: " + err)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const filtered = list.sort((a: { name: string; }, b: { name: string; }) => {
        if (placeholder === "Sort A - Z") {
            if (a.name > b.name) {
                return 1
            } else {
                return -1
            }
        } else {
            return list
        }
    })
    const filtered2 = filtered.sort((a: { name: string; }, b: { name: string; }) => {
        if (placeholder === "Sort Z - A") {
            if (b.name > a.name) {
                return 1
            } else {
                return -1
            }
        } else {
            return list
        }
    })
    const filtered3 = filtered2.filter((x: { area: number; }) => checkboxLTU ? x.area < 65300 : x)
    const filtered4 = filtered3.filter((x: { region: string; }) => checkboxOceana ? x.region === "Oceania" : x)

    useEffect(() => {
        const showPaginated = filtered4.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
        setPagination(showPaginated)
        // eslint-disable-next-line
    }, [list, rowsPerPage, page, placeholder, checkboxLTU, checkboxOceana])

    return (
        <div className="app d-flex align-items-center j-center">
            <div className="form">
                <Toolbar filtered4={filtered4} fetchData={fetchData}/>
                <div className="indexBody">
                    {spinner ?
                        <LinearProgress/>
                        :
                        <div>
                            {status === null ?
                                pagination.map((x: { name: string; region: string; area: number; independent: boolean; }, i: number) =>
                                    <SingleRow key={i} country={x}/>)
                                :
                                <div className="status">{status}</div>}
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default IndexComp;