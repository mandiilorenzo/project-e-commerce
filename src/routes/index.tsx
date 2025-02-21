import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/layouts/layout"
import { Home } from "../components/pages/home"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} />
                <Route index element={<Home/>}/>
                
            </Routes>
        </BrowserRouter>
    )

}

export { AppRoutes }
