import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Price() {
    // creating a state variable to hold the coin data
    const [coin, setCoin] = useState(null);
    // accessing the params object to get the symbol param 
    const params = useParams();
    console.log(params);

    // const apiKey = '2FFA9750-D2ED-40B9-ACBD-D1C027E35041';
    const apiKey = process.env.REACT_APP_API_KEY;
    const symbol = params.symbol;

    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    // function to fetch the data from the coin api
    const getCoin = async () => {
        try {
            // we get the data
            const res = await axios.get(url);
            // set the data into state
            setCoin(res.data);
        } catch (e) {
            console.error(e);
        }
    }

    // call the getCoin function when the component render the first time
    useEffect(() => {
        getCoin(); 
    }, []);

    // function to return JSX if we have data in state
    const loaded = () => {
        return (
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>$ {coin.rate}</h2>
            </div>
        )
    }

    // return some JSX to show that we're still waiting for the data
    const loading = () => <h1>Loading...</h1>;

    return coin && coin.rate ? loaded() : loading();
}

export default Price;