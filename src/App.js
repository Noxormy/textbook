import React from "react"
import "./App.sass"
import {Layout} from "antd"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {BreadcrumbDefault} from "./components/Breadcrumb"
import {Home} from "./pages/Home"
import {Article} from "./pages/Article"


function App() {
    return (
        <div className="page">
            <Layout>
                <Header/>
                <Router>
                    <Layout>
                        <BreadcrumbDefault/>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/article" element={<Article/>}/>
                        </Routes>
                    </Layout>
                </Router>
                <Footer/>
            </Layout>
        </div>
    )
}

export default App
