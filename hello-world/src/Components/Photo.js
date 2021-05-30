import React,{useEffect, useState} from 'react';
import axios from "axios"

const Photo = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        makeApiCall();
    }, []);

    useEffect(() => {
        console.log('data', data)
    }, [data]);


    

    const makeApiCall = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => setData(response.data) )
    }

      
    
    console.log(data)
    
        
        return(
            <>
             {data.map((item) => <div>{item.title}</div> )}
            </>
        ) 
    
}


export default Photo;

useEffect(() => {
helloWorld()
},[] )

const [state, setState] = useState(null)


const 