import dataDesserts from '../../data/dataDesserts';
import Dessert from './Dessert';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/dessertsSlice';


const Desserts = ()=> {
    const selectedCategory= useSelector(getSelectedCategory);
    return(<div>
        {dataDesserts
        .filter(dessert => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === dessert.category;
        })
        .map((dessert, index)=> <Dessert key={index} dessert={dessert}/>)}
    </div>)
}

export default Desserts;