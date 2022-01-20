import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'; 
// Composents
import {Footer} from './Footer';
import { NavBar } from './NavBar';
import {LisAtors} from './LisAtors'
import { Register } from './Register';
import {Profile} from './Profile';
import {Tendance} from './Tendance';
import {Createur} from './Createur';
import {Livraison} from './Livraison';
import {Mesvideo} from './Mesvideo';
import {Enregistrement} from './Enregistrement';


export const Home = () => {

    const {id} : {id :string} = useParams();

    const [state, setState] = useState('');


    useEffect(() => {
        if (id === "home"){
            setState(<LisAtors/>)
        }else if(id === "profile") {
            setState(<Profile/>)
        } else if(id === "tendance") {
            setState(<Tendance/>)
        } else if(id === 'createur'){
            setState(<Createur/>)
        } else if(id === "livraison"){
            setState(<Livraison/>)
        } else if (id === "mesvideo") {
            setState(<Mesvideo/>)
        }else if (id === "Enregistrement") {
            setState(<Enregistrement/>)
        } else {
            setState(<Register/>)
        }
    }, [setState,id])

    console.log(state);

    return (
        <div>
            <NavBar/>
            {state}
            <Footer/>
        </div>
    )
}