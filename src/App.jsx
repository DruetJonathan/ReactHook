// import {useEffect, useState} from 'react'
import './App.css'
import {memo, useEffect, useMemo, useReducer, useRef, useState} from "react";
import {Input} from "./Components/Input.jsx";
import {useToggle} from "./hooks/useToggle.js";
import {useIncrement} from "./hooks/useIncrement.js";
import {useDocumentTitle} from "./hooks/useDocumentTitle.js";
import {useFetch} from "./hooks/useFetch.js";
import {createPortal} from "react-dom";
import {ErrorBoundary} from "react-error-boundary";

// import {ProgressBar} from "./Components/ProgressBar.jsx";

function passwordSecurity(password) {
    return password.length < 3 ? 'Faible' : 'Fort';
}

function App() {
    //////////////////////////// USE EFFECT
    // const [y, setY] = useState(0)
    //
    //   useEffect(()=>{
    //           window.addEventListener('scroll',(e)=>{
    //               setY(window.scrollY);
    //           })
    //       },[]);
    //   return <>
    //       <ProgressBar valueScroll={y}/>
    //   </>
    /////////////////////// UseMemo
    //
    // const [firstname,setFirstname] = useState('Jhon')
    // const [password, setPassword] = useState('MotDePasse')
    // // useMemo permet de mémoriser une valeur entre plusieurs rendu pour optimiser les performances
    // const security = useMemo(()=>{
    //     return passwordSecurity(password)
    // },[password])
    // // si pa deps , générer seulement lors du premier rendu
    //
    // return <div>
    //     <Input
    //         label="Nom d'utilisateur"
    //         value={firstname}
    //         onChange={setFirstname}
    //     />
    //     <div>
    //         <Input
    //         label="Mot de passe"
    //         value={password}
    //         onChange={setPassword}
    //         />
    //         Securité: {security}
    //     </div>
    // </div>

    /// Hook useRef ///
    // utile pour sauvegarder les ref d'élément html, pour cela faire dans un useEffetc car cela sera effectuer de manières asynchrones cad apres le rendu du html sinon => null
    // const prefixRef = useRef(null);
    // const [prefix,setPrefix] = useState('')
    // // permet de lancer le timer une seule fois mais de recuperer la valeur meme si elle est modifier et non reclear le timer h24 a chaque nouvelle saisier
    // // si je veux paser une ref a un element enfant je peux mais je dois utiliser un attribu perso qui envoie la ref et ensuite l'assigner a la ref a l'enfant
    // // ref uniquer et persiste la durée de la vie du composants
    // prefixRef.current = prefix;
    //     useEffect(()=>{
    //         // console.log(ref.current.offsetHeight)
    //         const timer = setInterval(()=>{
    //             console.log(prefixRef.current)
    //         },1000);
    //         // IMPORTANT CLEAR TIMER DANS LE USEFFECT
    //             return () => {
    //                 clearInterval(timer);
    //     },[])
    //
    // return <div>
    //     <Input
    //         label="prefix"
    //         value={prefix}
    //         onChange={setPrefix}
    //     />
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid consectetur cupiditate est fuga
    //     illum nesciunt quasi sint sit voluptas. Consequatur doloremque ea, ipsam minus nobis nostrum optio perferendis voluptates.
    // </div>


    // // Hook Personnalisé //
    // // permet de regrouper de la logique  pour use dans plusieurs composants
    // // en gros fct qui utilise un hook => deviens un hook
    // // https://usehooks.com/
    //
    // const [checked,toggle] = useToggle(false)
    // const {compteur, increment,desincrement}= useIncrement(0);
    // const [name,setName] = useState('');
    // useDocumentTitle('Editer '+name);
    //
    // const {loading,data,errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=3000','')
    // return <div>
    //     <input type="checkbox" checked={checked} onChange={toggle}/>
    //     <Input type="text" value={name} onChange={setName} label="title"/>
    //     <div>
    //         <button onClick={desincrement}>Desincrement</button>
    //         <label>{compteur}</label>
    //         <button onClick={increment}>Increment</button>
    //     </div>
    // {/*    data*/}
    //     <div>
    //         {loading && <div>Chargement...</div>}
    //         {errors && alert(errors.toString())}
    //         {data && <ul>
    //             {data.map(post => (<li key={post.id}>{post.title}</li>))}
    //         </ul>}
    //     </div>
    // </div>
    ///////////////////////// USECALLBACK ET USEMEMO
    // const [name, setName] = useState('')
    // return <div className="container my-2 vstack gap-2">
    //     <div>
    //         <Input
    //             label="Prénom"
    //             onChange={setName}
    //             value={name}
    //         />
    //         <div>
    //             {name.toUpperCase()}
    //         </div>
    //         {/*MEMO PERMET DE NE PAS RE RENDER LES COMPOSANTS ET GARDER LES RESULTATS POUR LA SUITE => OPTIMISATION DE PERF*/}
    //         {/*usecallback perfmet de memoriser une fonction, permet de ne pas regénérer les fonctions h24 par exemple si un setter ne change pas */}
    //         <InfoMemo/>
    //     </div>
    // </div>
    ///////////////////////// PORTAILS
    // return <div style={{
    //     height:300,
    //     overflowY:'scroll',
    //     background:'#EEE',
    //     margin:20,
    //     position:"relative"
    // }}>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere minus non numquam quod. Delectus ea eius
    //         fugit minima placeat, possimus reiciendis sapiente! Aperiam numquam optio placeat qui quia quod, sint.</p>
    //
    //     <p>Aliquid cumque cupiditate dolorum, explicabo inventore modi necessitatibus non obcaecati optio pariatur quam
    //         quidem quisquam ratione tempore, vitae? Aperiam ex incidunt laboriosam magni modi, nemo quam ratione
    //         reiciendis tempora unde.</p
    //
    //     ><p>Architecto assumenda autem commodi, cupiditate dicta est explicabo hic illo
    //     in ipsam labore, laudantium magnam nulla quam quas quidem quis repellendus rerum sit tempore ullam, unde
    //     veritatis vero voluptate voluptatibus!</p>
    //     <Modal/>
    // </div>
    /////////////// ERRORS /////////////////////
    // On le met si le components peux provoquer erreurs
    // fallback se qui se passe en cas d'erreur
    // onReset permet de sortir de l'erreur => chose à effectuer pour résoudre le soucis
    // return <ErrorBoundary
    //     FallbackComponent={AlertError}
    //     onReset={()=>console.log('reset')}>
    //     <p>Test</p>
    // </ErrorBoundary>
    ////////////////// HOOK USEREDUCER
    function reducer(state, action) {
        // ne jamais muter l'etat => faut recrer un objet
        if (action.type === 'REMOVE_TODO'){
            return {
                ...state,
                todo: state.todo.filter(todo =>todo !== action.payload)
            }
        }
        if (action.type === 'TOGGLE_TODO'){
            return {
                ...state,
                todo: state.todo.map(todo =>todo === action.payload ? {
                    ...todo,
                    checked: !todo.checked
                } : todo)
            }
        }
        if (action.type === 'CLEAR_COMPLETED'){
            return {
                ...state,
                todo: state.todo.filter(todo => !todo.checked )
            }
        }


        return state
    }

    const [state, dispatch] = useReducer(reducer, {
        todo: [
            {
                name: 'faire course 1',
                checked: false,
            },
            {
                name: 'faire course 2',
                checked: false,
            },
            {
                name: 'faire course 3',
                checked: false,
            },
        ],
    });

    return (
        <div>
            <ul>
                {state.todo.map((value) => (
                    <li key={value.name}>
                        <input type="checkbox" checked={value.checked} onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: value })}/>
                        {value.name}
                        <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: value })}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <button onClick={()=>dispatch({type:'CLEAR_COMPLETED'})}>Supprimer tâches accomplies</button>
        </div>
    );
}

// const InfoMemo = memo(function Info() {
//     return <div className="alert alert-info">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium animi, aut beatae consequuntur
//         deserunt, dignissimos dolorem ea excepturi fuga illo ipsam mollitia nostrum perferendis qui quod reiciendis ut
//         veniam.
//
//     </div>
// })

// function Modal() {
//     return createPortal(
//         <div style={{
//             position:"absolute",
//             top:0,
//             right:0,
//             padding:10,
//             border: 'solid 1px grey',
//             background:'#FFF'
//         }}>
//             ModalBox
//         </div>,document.body
//     )
// }

// function AlertError({error, resetErrorBoundary}) {
//     return <div className="alert alert-danger">
//         {error.toString()}
//         <button className="btn btn-secondary" onClick={resetErrorBoundary}></button>
//     </div>
// }

// function Fallback({ error, resetErrorBoundary }) {
//     // On peut appeler resetErrorBoundary() pour réinitialiser l'erreur et tenter un nouveau rendu.
//
//     return (
//         <div role="alert">
//             <p>Something went wrong:</p>
//             <pre style={{ color: "red" }}>{error.message}</pre>
//         </div>
//     );
// }
export default App
