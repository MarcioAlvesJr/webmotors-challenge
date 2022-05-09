import axios from 'axios'

const fetchManufacturer = async () => {
    const options ={
        method: "GET",
        url: `${process.env.REACT_APP_API_ADRESS}/api/OnlineChallenge/Make`,
    }

    const res = await axios.request(options)
    return res.data
}

export default fetchManufacturer