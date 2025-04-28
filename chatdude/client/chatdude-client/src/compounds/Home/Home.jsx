import "./Home.css";
import Header from '../Header/Header';
import Asidelist from '../Asidelist/Asidelist';
import Chatarea from '../Chatarea/Chatarea';

function Home() {

    return (
        <div id="home-page">
            <Header />
            <div id='home-area'>
                <Asidelist/>
                <Chatarea/>
            </div>


        </div>
    );
}

export default Home;
