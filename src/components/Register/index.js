import React, {useState, useEffect } from 'react';
import {useParams} from  "react-router-dom";

// Sytles
import { Main } from './Register.style'


// componsente
import {Login} from './Login'
import {Signup} from './Signup'
import {Recovery} from './Recovery'

// Image
import fImage from '../../Image/Groupe1.png'


export const Register = () => {

        
    const {id} : {id :string} = useParams();

    const [state, setState] = useState('');


    useEffect(() => {
        if (id === "signup"){
            setState(<Signup/>)
        } else if( id === "login"){
            setState(<Login/>)
        } else if( id === "recovery"){
            setState(<Recovery/>)
        }
    }, [setState,id])


    
    return(
        <Main>
            {state}
            
        </Main>
    )
}

