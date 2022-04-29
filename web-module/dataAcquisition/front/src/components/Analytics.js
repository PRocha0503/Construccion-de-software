import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Style from "../styles/style";

const axios = require("axios").default;
function Analytics() {
	const classes = Style();
	const [classCount, setClassCount] = useState(0);
	const [teachers, setTeachers] = useState([]);
	const api = "http://localhost:8080/api";

	useEffect(() => {
		const getUsers = async () => {
			const { data: tempUser } = await axios.get(`${api}/user`);
			tempUser.map((t) => {
				if (!tempUser.includes(t["class"])) {
					setTeachers(teachers.push(t["class"]));
				}
			});
			setClassCount(teachers.length);
		};
		getUsers();
	}, []);
	return (
		<Box className={classes.main}>
			<Box className={classes.container}>
				<Typography variant="h2" component="h2">
					Analytics
				</Typography>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Typography variant="h5" component="div">
							Number of classes
						</Typography>
						<Typography variant="h5" component="div">
							{classCount}
						</Typography>
						{teachers.map(() => {
							return <Typography variant="body2">a</Typography>;
						})}
					</CardContent>
				</Card>
			</Box>
		</Box>
	);
}

export default Analytics;
