
import NavBar from '../pages/shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;