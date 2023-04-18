import classes from "./Box.module.css"

const Box = () => {
    return <div className={classes.Box}>
        <div className={classes.boxHeader}>header</div>
        <div className={classes.boxImage}></div>
        <div className={classes.boxContent}></div>
    </div>
}

export default Box;