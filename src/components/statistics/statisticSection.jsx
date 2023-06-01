import PropTypes from 'prop-types';
import css from './statistics.module.css';
// import StatisticsList from './statisticsList'
import { getRandomColor } from './randomColor';
export function Section({ title, items }) {
  return (
    <div className={css.sectionContainer}>
      {title && <p>{title}</p>}
      <ul>
        {items
          .filter((item, index, arr) => {
            return arr.findIndex(i => i.label === item.label) === index;
          })
          .map(({ label, percentage, id }) => {
            let randomColor = getRandomColor();
            const divStyle = {
              backgroundColor: randomColor,
            };
            return (
              <li className={css.item} style={divStyle} key={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
