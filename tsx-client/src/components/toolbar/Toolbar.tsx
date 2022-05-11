import {ChangeEvent, FC, useContext} from 'react';
import "./style.css"
import mainContext from "../../context/mainContext";
import TablePagination from "@mui/material/TablePagination";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

interface Props {
    filtered4: []
    fetchData: () => void
}

const Toolbar: FC<Props> = ({filtered4, fetchData}) => {

    const {
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        placeholder,
        setPlaceholder,
        setCheckboxLTU,
        checkboxLTU,
        setCheckboxOceana,
        checkboxOceana
    } = useContext(mainContext)

    const handleChangeSort = (event: { target: { value: string; }; }) => {
        setPlaceholder(event.target.value)
    }

    const smallerThanLTUChecked = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckboxLTU(event.target.checked)
        setPage(0)
    }

    const oceanaRegionChecked = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckboxOceana(event.target.checked)
        setPage(0)
    }

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const handleClear = () => {
        setPlaceholder("")
        setCheckboxLTU(false)
        setCheckboxOceana(false)
        fetchData()
        setPage(0)
    }

    return (
        <div className="toolbarHeader d-flex flex-column align-items-center">
            <div className="d-flex w-100 spc-btw">
                <div className="sortingForm">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort alphabetically</InputLabel>
                        <Select
                            sx={{color: "#1976d2"}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={placeholder}
                            label="Sort alphabetically"
                            onChange={handleChangeSort}
                        >
                            <MenuItem value={"Sort A - Z"}>Sort A - Z</MenuItem>
                            <MenuItem value={"Sort Z - A"}>Sort Z - A</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <TablePagination
                    sx={{color: "#1976d2"}}
                    component="div"
                    count={filtered4.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Button onClick={handleClear} variant="outlined">Clear Filters</Button>
            </div>
            <div className="w-100 d-flex spc-btw">
                <FormControlLabel
                    sx={{marginLeft: 0}}
                    value="start"
                    control={<Checkbox checked={checkboxLTU}
                                       onChange={smallerThanLTUChecked}
                                       inputProps={{'aria-label': 'controlled'}}/>}
                    label="Click To View Smaller Countries Than Lithuania"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Checkbox checked={checkboxOceana}
                                       onChange={oceanaRegionChecked}
                                       inputProps={{'aria-label': 'controlled'}}/>}
                    label="Click To View Oceania region Countries"
                    labelPlacement="start"
                />
            </div>
        </div>
    );
};

export default Toolbar;