import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts (){
    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul id="core-concepts ul">
            
              {CORE_CONCEPTS.map((index)=>(
              <CoreConcept {...index}/>))
}
    
      </ul>  
      </section>
    );
}