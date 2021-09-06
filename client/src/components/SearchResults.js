import { useEffect, useState } from "react";
import classes from "./SearchResults.module.css";
import SearchData from "./SerarchData";

const SearchResults = props => {
	console.log(props);

	return (
		<div
			className={`${classes.resultsContainer} ${
				(props.errorStatus && classes.error) || ""
			}`}
		>
			<div className={classes.results}>
				{(props.errorStatus && (
					<p className={classes.errorMessage}>{props.results}</p>
				)) || <SearchData results={props.results} />}
			</div>
		</div>
	);
};

export default SearchResults;
