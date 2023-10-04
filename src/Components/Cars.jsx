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
            console.log(models);
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
            <h3>Number of Owners: {car.number_of_owners}</h3>
            <h3>Manufacture Year: {car.manufacture_year}</h3>
            <h3>Registration Number: {car.registration_number}</h3>
            <h3>Mileage: {car.mileage}</h3>
            </div>
        ) )}
        {/* <h3>{car[0].mileage}</h3>
        <h3>{car[1].mileage}</h3>
        <h3>{car[2].mileage}</h3> */}
        </>
    );
}
export default Car;