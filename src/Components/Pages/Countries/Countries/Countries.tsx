import { useEffect, useState } from "react";
import "./Countries.css";
import axios from "axios";
import { CountriesModel } from "../../../../Models/CountriesModel";
import notyfService from "../../../../Servieces/NotificationServiece";
import CountriesCard from "../CountriesCard/CountriesCard";


function Countries(): JSX.Element {
   

    const[country, setCountry] = useState <CountriesModel[]>([]);

    const [filterCountries, setFilterCountries]= useState<string> (``);


   
    useEffect(() => {
        axios.get<CountriesModel[]>('https://restcountries.com/v2/all ')
            .then(res => { setCountry(res.data); })
            .catch(err => { notyfService.error('Ha Ha Ha...'); })
    }, []);

    return (
        <div className="Countries">
			<h2>List of Countries:</h2>
            <label> Search:</label>
            <input onChange={event => setFilterCountries(event.target.value)}/>

{country.filter(c => c.name.match(filterCountries) || filterCountries === ''|| c.capital?.match(filterCountries))
            .map(c => <CountriesCard  key={`country`+c.name} country={c}/> )}           

        </div>
    );
}

export default Countries;
