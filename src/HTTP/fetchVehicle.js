import axios from 'axios'

const fetchVehicle = async (Page) => {
    const options ={
        method: "GET",
        url: `${process.env.REACT_APP_API_ADRESS}/api/OnlineChallenge/Vehicles?Page=${Page}`,
    }

    const res = await axios.request(options)
    return res.data
}

export default fetchVehicle