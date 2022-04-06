import React from "react"
// import "./homepage.html"
import "./homepage.css"
import { useHistory } from "react-router-dom"

const Homepage = () => {
    const history = useHistory()

    return (
        <div className="homepage">
          
         

            <div className="button" onClick={() => history.push("/login")} ></div>
        </div>
        
    )
}
   

export default Homepage 