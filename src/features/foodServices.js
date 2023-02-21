
//reducer n'accepter pas la logique async
//fetch =consomer
//condition shorthand
//spinner loading
import axios from 'axios';

const getFoods = async () => {
    const response = await axios.get('https://restaurant-project.onrender.com/api/products')
    return response.data
}
const foodService = {
    getFoods
}
export default foodService
