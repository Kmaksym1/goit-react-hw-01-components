
import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { Statistics } from "./Statistics";
import {getRandomColor} from './randomColor'

function StatisticsList({items}){
    return (
        <ul>
        {items.filter((item, index, arr) => {
        return arr.findIndex(i => i.label === item.label) === index;
      }).map(({label, percentage, id})=>{
            let randomColor = getRandomColor();
        const divStyle = {
            backgroundColor: randomColor
        }
            return (
                
         <li className={css.item} style={divStyle} key={id}>
            <Statistics 
            stats={label}
            percentage={percentage}
            />
        </li>
        )})}
    </ul>

    )
}
export default StatisticsList;


StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    )
  }