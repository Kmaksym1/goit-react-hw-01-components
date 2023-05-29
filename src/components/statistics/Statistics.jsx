import css from './statistics.module.css';

export const Statistics = function ({stats, percentage}){
    return (
        <>
            <span className={css.label}>{stats}</span>
            <span className={css.percentage}>{percentage}%</span>
        </>
    )
}