import { Fragment } from "react";
import classes from "./SearchData.module.css";

const SearchData = props => {
	console.log(props);
	return (
		<Fragment>
			<div className={classes.resultGroup}>
				<div className={classes.resultLabel}>IP Addr:</div>
				<div className={classes.resultInfo}>{props.results.ipAddress}</div>
			</div>
			<div className={classes.resultGroup}>
				<div className={classes.resultLabel}>Name:</div>
				<div className={classes.resultInfo}>{props.results.name}</div>
			</div>
			<div className={classes.resultGroup}>
				<div className={classes.resultLabel}>Country:</div>
				<div className={classes.countryFlagGroup}>
					<div className={classes.resultInfo}>{props.results.country}</div>
					<img
						className={classes.resultInfo}
						src={props.results.countryFlag}
						style={{ height: "18px", width: "30px" }}
					></img>
				</div>
			</div>
			<div className={classes.resultGroup}>
				<div className={classes.resultLabel}>State:</div>
				<div className={classes.resultInfo}>{props.results.state}</div>
			</div>
			<div className={classes.resultGroup}>
				<div className={classes.resultLabel}>City:</div>
				<div className={classes.resultInfo}>{props.results.city}</div>
			</div>
		</Fragment>
	);
};

export default SearchData;
