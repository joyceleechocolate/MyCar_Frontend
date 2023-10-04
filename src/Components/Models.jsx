const Model = ({model}) => {
    
    return (
        <>
        {model.map((model, index) => (
            <div key={`b${index}`}>
            <h3>Make: {model.make}</h3>
            <h3>Model: {model.model}</h3>
            </div>
        ) )}
        {/* <h3>{car[0].mileage}</h3>
        <h3>{car[1].mileage}</h3>
        <h3>{car[2].mileage}</h3> */}
        </>
    );
}
export default Model;