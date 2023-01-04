import React from "react"
import "./index.sass"
import {Link} from "react-router-dom"


function Header() {
    return (
        <header>
            <label><Link to="/">HandbookHub</Link></label>
        </header>
    )
}

export {Header}
