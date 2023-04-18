import classes from "./Hero.module.css"

const Hero = () => {
    return (
        <div className={classes.Hero}>
            <div className={classes.Heading}> <span className={classes.HeadingColor}>Your Partner </span>in Education: <span className={classes.HeadingColor}>TisTow</span></div>
        </div>
    )
}

export default Hero;