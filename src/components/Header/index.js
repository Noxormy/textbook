import React from "react"
import "./index.sass"
import {Link} from "react-router-dom"


function Header() {
    return (
        <header>
            <Link to="/"><label>HandbookHub</label></Link>
        </header>
    )
}

export {Header}
