import $axios from '../../myAxios'

export const getData = () => {
    return $axios.get('http://localhost:8000/cartInfo')
};