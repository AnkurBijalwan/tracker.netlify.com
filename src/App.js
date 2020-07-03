import React from 'react';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData, fetchDailyData} from './api';

import coronaImage from './images/image.png';
class App extends React.Component{

    state = {
       data: {},
       country: '',
    }
    async componentDidMount(){
        const data= await fetchData();
        this.setState({data: data});
    }

    handleCountryChange = async (country) =>{
            const data= await fetchData(country);
            this.setState({data: data, country: country});
    }
    render(){
        const data=this.state;
        return (
        <div className = {styles.container}>
            <img src={coronaImage} className={styles.image} alt="COVID-19"/>
            <Cards data= {data.data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data.data} country={data.country}/>
        </div>);
    }
}

export default App;