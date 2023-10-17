import './App.css'
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError} from "react-router-dom";
import {Single} from "./pages/Single.jsx";
import {Blog} from "./pages/Blog.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div><Root/></div>,
        errorElement: <PageError/>,
        children: [
            {
                path: 'blog',
                element:<div className="row">
                    <aside className="col-3">
                        <h2>SideBar</h2>
                    </aside>
                    <main className="col-9">
                        <Outlet></Outlet>
                    </main>
                </div>,
                children: [
                    {
                        path: '',
                        element: <Blog/>,
                        loader: () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                    },
                    {
                        path:':id',
                        element:<Single></Single>
                    }
                ]
            },
            {
                path: 'contact',
                element: <div>Contact</div>
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router}></RouterProvider>
}

function Root() {
    return <>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
        <div className="container my-4">
            <Outlet/>
        </div>
    </>
}

function PageError() {
    const error = useRouteError()
    return <>
        <h1>Erreur 404</h1>
        <p>{error?.error.toString() ?? error?.toString()}</p>
    </>
}

export default App
