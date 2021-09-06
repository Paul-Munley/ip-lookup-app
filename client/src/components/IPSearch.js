import { useState, useRef, useEffect, useReducer, Fragment } from "react";
import classes from "./IPSearch.module.css";
import SearchResults from "./SearchResults";
import LoadingSpinner from "./LoadingSpinner";

const IPSearch = () => {
	const [loadingStatus, setLoadingStatus] = useState(false);
	const [searchStatus, setSearchStatus] = useState(false);
	const [errorStatus, setErrorStatus] = useState(false);
	const [errorMsg, setErrorMsg] = useState();
	const [APIData, setAPIData] = useState({
		ipAddress: "",
		name: "",
		country: "",
		state: "",
		city: "",
	});
	const inputVal = useRef(null);

	const submitHandler = async e => {
		try {
			setLoadingStatus(true);
			setSearchStatus(false);
			setErrorStatus(false);
			const queriedValue = inputVal.current.value;
			console.log(queriedValue);
			e.preventDefault();

			window.history.replaceState(null, "", `/${queriedValue}`);

			const res = await fetch(`/search/${queriedValue}`);
			// console.log(res);

			const data = await res.json();
			console.log(data);

			setLoadingStatus(false);
			setSearchStatus(true);

			if (!res.ok) {
				setErrorStatus(true);
				throw new Error(data.message);
			} else {
				setAPIData({
					ipAddress: data.message.ip,
					name: data.message.org,
					country: data.message.country_code,
					countryFlag: data.message.country_flag,
					state: data.message.region,
					city: data.message.city,
				});
			}
		} catch (err) {
			setErrorMsg(err.message);
		}
	};

	return (
		<Fragment>
			<div
				className={classes.search}
				style={{
					backgroundImage: "url(/markus-winkler-unsplash-search.jpeg)",
				}}
			>
				<p className={classes.searchInstructions}>
					{" "}
					Please input an IP adress or Domain Name{" "}
				</p>
				<form className={classes.searchForm} onSubmit={submitHandler}>
					<label htmlFor="IP Address or Domain Name"></label>
					<input type="text" placeholder="IP or Domain" ref={inputVal}></input>
					<button> Submit </button>
				</form>
			</div>
			{loadingStatus && <LoadingSpinner />}
			{searchStatus && (
				<SearchResults
					errorStatus={errorStatus}
					results={(!errorStatus && APIData) || errorMsg}
				/>
			)}
		</Fragment>
	);
};

export default IPSearch;
