export default function CoreConcept(props){


    return(
       <li id="core-concepts li"> 
           <img src={props.image} alt="comonents"/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </li>
    );
}