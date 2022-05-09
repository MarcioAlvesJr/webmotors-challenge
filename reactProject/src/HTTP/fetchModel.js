import axios from 'axios'

const fetchModel = async (MakeID) => {
    const options ={
        method: "GET",
        url: `${process.env.REACT_APP_API_ADRESS}/api/OnlineChallenge/Model?MakeID=${MakeID}`,
    }

    const res = await axios.request(options)
    return res.data
}

export default fetchModel