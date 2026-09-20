import { Link, Route, Routes } from 'react-router-dom'
import Develop from './pages/develop.jsx'


import { useEffect, useState } from 'react'

function Test() {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        fetch('/api/test')
            .then(response => response.json())
            .then(data => setMessage(data.message))
    }, [])

    return (
        <div>
            <h1>Vendora</h1>
            <p>{message}</p>
        </div>
    )
}

function Home() {
    return (
        <div>
            <h1>Vendora Home</h1>
            <Test/>
            <Link to="/products">Products</Link>
            <Link to="/develop">develop</Link>
        </div>
    )
}

function Products() {
    return (
        <div>
            <h1>Vendora Products</h1>
            <Link to="/">Home</Link>
            <Link to="/develop">develop</Link>
        </div>
    )
}
function Develops() {
    return (
       <Develop/>
    )
}
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/develop" element={<Develops />} />
        </Routes>
    )
}

export default App