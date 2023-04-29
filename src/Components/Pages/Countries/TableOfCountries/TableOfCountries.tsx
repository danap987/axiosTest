import { useEffect, useState } from "react";
import { CountriesModel } from "../../../../Models/CountriesModel";
import "./TableOfCountries.css";
import axios from "axios";
import notyfService from "../../../../Servieces/NotificationServiece";

function TableOfCountries(): JSX.Element {

    const tableHeaders = [ "Country", "Capita","Population(person nm)", "Flag" ];

    const[country, setCountry] = useState <CountriesModel[]>([]);

    useEffect(() => {
        axios.get<CountriesModel[]>('https://restcountries.com/v2/all ')
            .then(res => { setCountry(res.data); })
            .catch(err => { notyfService.error('Ha Ha Ha...'); })
    }, []);

    return (
        <div className="TableOfCountries displayList">
			<h2>Table of Countries:</h2>

            <table>
                <thead>
                    <tr>
                         {/* mapping the header array- above: */}
                        {tableHeaders.map(str => <th key={str}>{str}</th>)} 
                    </tr>
                </thead>
                <tbody>
                    {/* mapping from remote server the tables data: */}
                    {country.map(m =>
                        <tr key={'m'+m.name}>
                            <td>{m.name}</td>
                            <td>{m.capital}</td>
                            <td>{m.population}</td>
                            
                            <td>
                                <img src={m.flag} alt={m.nativeName} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}

export default TableOfCountries;
