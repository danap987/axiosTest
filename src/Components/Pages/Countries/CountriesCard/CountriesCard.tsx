import { CountriesModel } from "../../../../Models/CountriesModel";
import "./CountriesCard.css";

interface CountriesCardProps
{country: CountriesModel;}


function CountriesCard(props: CountriesCardProps): JSX.Element {
    return (
        <div className="CountriesCard box">
			<p> Name: {props.country.name}</p>
            <p> Capital: {props.country.capital}</p>
            <p> Population: {props.country.population} persons</p>
            <img src={props.country.flag} alt="no picture availiable"/>
        </div>
    );
}

export default CountriesCard;
