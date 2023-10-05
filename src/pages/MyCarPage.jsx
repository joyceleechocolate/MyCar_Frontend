import Car from '../Components/Cars';
// import Model from '../Components/Models';
import { getCar, getModel } from '../api/authApi';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function cars() {

    const [cars, setCars] = useState([]);
    // const [models, setModels] = useState([]);
    const userToken = useContext(UserContext);
    
    // async function performGetModel() {
    //     if (userToken) {
    //         const models = await getModel(userToken);
    //     // console.log(userToken)
    //     // console.log(models);
    //         return models; 
    //     } 
    // }
    // performGetModel();


    useEffect(() => {
        async function performGetCars() {
            const cars = await getCar(userToken);
            // console.log(cars)
            setCars(cars);
        } 
        if(userToken) {
        performGetCars();
        } 
    },[userToken]);
    
    // useEffect(() => {
    //     async function performGetModels() {
    //         const models = await getModel(userToken);
    //         setModels(models);
    //     } 
    //     if(userToken) {
    //     performGetModels();
    //     } 
    // },[userToken]);

    
    return(
        <>
         <h2>My Cars</h2>
         <Car car={cars}/>
         {/* <Model model={models} /> */}
        </>

    )
}