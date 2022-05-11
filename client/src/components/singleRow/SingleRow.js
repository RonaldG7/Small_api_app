import "./style.css"

const SingleRow = ({country}) => {
    return (
        <div className="singleRow d-flex">
            <div className="d-flex w-40 m-auto">
                <p>Name:</p>
                <p className="textColor ms-3">{country.name}</p>
            </div>
            <div className="d-flex w-30">
                <p>Region:</p>
                <p className="textColor ms-3">{country.region}</p>
            </div>
            <div className="d-flex w-30">
                <p>Area:</p>
                <p className="textColor ms-3">{country.area}</p>
            </div>
        </div>
    );
};

export default SingleRow;