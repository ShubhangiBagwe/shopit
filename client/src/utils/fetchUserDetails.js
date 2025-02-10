import Axios from './Axios';
import SummaryApi from "../common/SummaryApi"

const fetchUserDetails = async () => {
    try {
        const response = await Axios({
            ...SummaryApi.userDetails
        })
        // console.log(response,'response')
        return response
    } catch (error) {
        console.log(error)
    }
}

export default fetchUserDetails