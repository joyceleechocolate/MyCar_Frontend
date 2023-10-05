// import Model from './Models';
import { getModel } from '../api/authApi';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Car = ({car}) => {

    const [models, setModels] = useState([]);
    const userToken = useContext(UserContext);

    useEffect(() => {
        async function performGetModels() {
            const models = await getModel(userToken);
            // console.log(models);
            setModels(models);
        } 
        if(userToken) {
        performGetModels();
        } 
    },[userToken]);

    
    return (
        <>
        {car.map((car, index) => (
            <div key={`a${index}`}>
            <h4>Make: {models[index].make}</h4>
            <h4>Model: {models[index].model}</h4>
            <h4>Number of Owners: {car.number_of_owners}</h4>
            <h4>Manufacture Year: {car.manufacture_year}</h4>
            <h4>Registration Number: {car.registration_number}</h4>
            <h4>Mileage: {car.mileage}</h4>
            <br />
            </div>
        ) )}
    
        {/* <h4>{car[0].mileage}</h4>
        <h4>{car[1].mileage}</h4>
        <h4>{car[2].mileage}</h4> */}
        </>
    );
}
export default Car;