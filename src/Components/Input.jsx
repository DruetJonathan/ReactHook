import {useId} from "react";

/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s:string)=>void} onChange
 * @returns {JSX.Element}
 * @constructor
 */
export function Input({placeholder,value,onChange,label}) {
    const id = useId()
    return <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} className="form-control" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
}