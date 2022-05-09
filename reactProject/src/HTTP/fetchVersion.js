import axios from 'axios'

const fetchVersion = async (ModelID) => {
    const options ={
        method: "GET",
        url: `${process.env.REACT_APP_API_ADRESS}/api/OnlineChallenge/Version?ModelID=${ModelID}`,
    }

    const res = await axios.request(options)
    return res.data
}

export default fetchVersion