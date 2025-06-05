import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = () => {
    return (
        <div class="page-wrapper">
            <div class="preloader"><div class="custom-loader"></div></div>
            <Header />
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;