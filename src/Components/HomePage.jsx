import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const HomePage = () => {

    return (
        <div className="hide-scrollbar">
            <Header className="fixed z-10"/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default HomePage;