import {useEffect, useState} from "react";

export function useFetch(url,options) {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState(null)
    const [errors,setErrors] = useState(null)

    useEffect(()=>{
        // permet de recuperer les données + modifier les options
        fetch(url, {
            ...options,
            headers:{
                'Accept' : 'application/json; charset=UTF-8',
                ...options.headers
            }
        }).then(r => r.json()).then(data => {
            setData(data)
            setLoading(false)
        }).catch(
            (e) =>{
                setErrors(e)
            }
        ).finally(
            ()=>{
                setLoading(false)
            }
        )
    })

    return {
        loading,
        data,
        errors
    }
}