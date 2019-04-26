import React from 'react';
import logo from '../../logo.svg';
import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import TitleList from '../TitleList/titleList';
import observableCartStore from '../Cart/observableCartStore';

const Dashboard: React.FC = () => {
    return(
    <div className="App">
        <Navbar store={observableCartStore} />
        <TitleList />
        <Footer/>
    </div>
    );
}

export default Dashboard;