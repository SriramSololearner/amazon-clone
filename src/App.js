import React from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './components/Home';
import CheckoutPage from './components/Checkout';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';


const App = () => {
    return (
            <Router> 
                
                <Routes>
                    <Route exact path="/Register" element={ <Register />} />
                    <Route exact path="/Login" element = { <Login /> } />
                    <Route exact path="/" element = { 
                        <>
                        <Header />
                        <Home />
                    </>
                } />
                <Route exact path="/checkout" element ={ 
                    <>
                        <Header />
                        <CheckoutPage />
                    </>
                } />
                <Route exact path="*" element ={<ErrorPage />} />
                </Routes>
            </Router>
    )
}

export default App;