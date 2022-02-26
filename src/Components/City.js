import styled from "styled-components";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;
const CityLabel = styled.span`
    display: flex;
    flex-direction: column;
    color: #555;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`;
const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid #555;
    border-radius: 2px;
    color: #555;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;
    & input{
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
        font-family: Montserrat;
        color: #555;
    }
    & button{
        border: none;
        ouline: none;
        color: white;
        background-color: black;
        padding: 10px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        font-family: Montserrat;
    }
`;

const City = (props) =>{
    const {updateCity, fetchWeather} = props;
    return(
        <>
            <WeatherLogo src="/react-weather-app/icons/perfect-day.svg" />
            <CityLabel>Find Weather of your city</CityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="Search City" onChange={(e) => updateCity(e.target.value)}/>
                <button type="submit">Search</button>
            </SearchBox>
        </>
    )
}

export default City;