import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/layouts/layout"
import { Home } from "../pages/home"
import { Form } from "../pages/form-register"
import { Products } from "../pages/products"
import { Cart } from "../pages/cart"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/formulario" element={<Form/>}/>
                    <Route path="/produtos" element={<Products/>}/>
                    <Route path="/carrinho-de-compras" element={<Cart/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export { AppRoutes }
