import express from "express";
import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 5000;

const API_KEY = "51955fafeamsh0acdefdd102d0f2p19d94ajsna697f5f0555a";

// Console log that server is running
// app.listen(port, () => console.log(`Listening on port ${port}`));

// GET request to show established connection
// app.get("/connected", (req, res) => {
// 	// console.log("hello");
// 	res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
// });

// NODE SERVE THE FILES FOR OUR BUILT REACT APP
app.use(express.static(path.resolve(__dirname, "../client/build")));

// QUERY BY IP ADDRESS
app.get("/search/:id", async (req, res) => {
	try {
		const queriedValue = req.params.id;

		const url = `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${queriedValue}`;

		const options = {
			method: "GET",
			headers: {
				"x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
				"x-rapidapi-key": API_KEY,
			},
		};

		const response = await fetch(url, options);

		const data = await response.json();
		console.log(data);

		if (data.success === false)
			throw new Error("Invalid domain or IP Address. Please try again.");

		res.send({ message: data });
	} catch (err) {
		res.status(500).json({ message: "Something broke! Please try again." });
	}
});

// ALL GET REQUESTS THAT ARENT HANDLED PRIOR WILL RETURN OUR REACT APP (not fully sure what this is yet)
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
