import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/layouts/layout"
import { Home } from "../components/pages/home"
import { Form } from "../components/pages/form-register"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} />
                <Route index element={<Home/>}/>
                <Route path="/formulario" element={<Form/>}/>
                
            </Routes>
        </BrowserRouter>
    )

}

export { AppRoutes }
