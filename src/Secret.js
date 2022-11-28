import { useAuth0 } from "@auth0/auth0-react";


const Secret = ()=>{
    const {  isAuthenticated } = useAuth0();

return(
    isAuthenticated && <div>
    
            <p>
                Only today FREE shipping with any order!
            </p>
      
        
    </div>
)
}

export default Secret;