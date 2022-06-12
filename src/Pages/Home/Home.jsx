import React from "react";
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import UserInfo from "../../components/UsersInfo/UserInfo";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return(
        <div>
            <Navbar></Navbar>
            <div className="homePageContent">
                <UserInfo></UserInfo>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;