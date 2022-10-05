import '../components/Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from "../images/Amazon-Logo.png";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() { 
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header_logo'
                    src={logo}
                    alt='no_img'
                /> 
            </Link>
            
            <div className='header_search'>
                <input className='header_search_input' type="text" />
                <SearchOutlinedIcon className='search-icon' />
            </div>

            <div className='header_nav'>
                <Link to= "/Login">
                    <div className='header_option'>
                        <span className='option1'>Hello Guest</span>
                        <span className='option2'>Sign In</span>
                    </div>
                </Link>
                

                <div className='header_option'>
                    <span className='option1'>Returns</span>
                    <span className='option2'> & orders</span>
                </div>
                <div className='header_option'>
                    <span className='option1'>Your</span>
                    <span className='option2'>Prime</span>
                </div> 

                <Link to="/checkout">
                    <div className='header_Shopping_Basket'>

                        <ShoppingCartIcon />
                        
                        <span className='cart_Counter'>{basket?.length}</span>

                    </div>
                </Link>

                


            </div>
        </div>
    )
}

export default Header;