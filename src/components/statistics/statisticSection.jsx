import css from './statistics.module.css'
export function Section ({title, children}){
    return (
        <div className={css.sectionContainer}>
            {title && <p>{title}</p>}
            {children}
        </div>
        )
}