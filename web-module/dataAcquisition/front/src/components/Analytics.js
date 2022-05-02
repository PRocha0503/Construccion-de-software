import { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

import { PieChart, Pie, ResponsiveContainer } from "recharts";

import Style from "../styles/style";

const axios = require("axios").default;
function Analytics() {
	const classes = Style();
	const [classCount, setClassCount] = useState(0);
	const [teachers, setTeachers] = useState([]);
	const [rawUserData, setRawUserData] = useState([]);
	const [barData, setBarData] = useState([]);
	const [topScores1, setTopScores1] = useState([]);
	const [topScores2, setTopScores2] = useState([]);
	const [topScores3, setTopScores3] = useState([]);
	const api = "http://localhost:8080/api";

	useEffect(() => {
		const getUsers = async () => {
			const { data: tempUser } = await axios.get(`${api}/user`);
			const tempClass = [];
			if (tempUser.length > 0) {
				tempUser.map((t) => {
					if (!tempUser.includes(t["class"])) {
						tempClass.push(t["class"]);
					}
				});
			}
			setRawUserData(tempUser);
			setTeachers(tempClass);
			setClassCount(tempClass.length);
		};
		const classBarData = async () => {
			const { data: _barData } = await axios.get(
				`${api}/user/studentsPerClass`
			);
			setBarData(_barData);
		};
		const getTopScores = async () => {
			const { data: _top1 } = await axios.get(`${api}/game/topScores/1`);
			const { data: _top2 } = await axios.get(`${api}/game/topScores/2`);
			const { data: _top3 } = await axios.get(`${api}/game/topScores/3`);
			if (_top1.length > 5) {
				setTopScores1(_top1.slice(0, 5));
			} else {
				setTopScores1(_top1);
			}
			if (_top2.length > 5) {
				setTopScores2(_top2.slice(0, 5));
			} else {
				setTopScores2(_top2);
			}
			if (_top3.length > 5) {
				setTopScores3(_top3.slice(0, 5));
			} else {
				setTopScores3(_top3);
			}
		};
		getUsers();
		classBarData();
		getTopScores();
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
						{teachers.map((t) => {
							return <Typography variant="body2">{t}</Typography>;
						})}
					</CardContent>
				</Card>
				<Typography variant="h4" component="h2">
					Users per Class
				</Typography>
				<Box m="auto" sm={{ paddingLeft: "5px" }}>
					<PieChart width={1000} height={400}>
						<Pie
							dataKey="count"
							isAnimationActive={false}
							data={barData}
							cx={200}
							cy={200}
							outerRadius={80}
							fill="#fca311"
							label
						/>
						<Tooltip />
					</PieChart>
				</Box>
				<Typography variant="h4" component="h2">
					Top scores Level 1
				</Typography>
				<Box m="auto" sm={{ paddingLeft: "5px" }}>
					<BarChart
						width={500}
						height={300}
						data={topScores1}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="user_id" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="score" fill="#fca311" />
					</BarChart>
				</Box>
				<Typography variant="h4" component="h2">
					Top scores Level 2
				</Typography>
				<Box m="auto" sm={{ paddingLeft: "5px" }}>
					<BarChart
						width={500}
						height={300}
						data={topScores2}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="user_id" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="score" fill="#fca311" />
					</BarChart>
				</Box>
				<Typography variant="h4" component="h2">
					Top scores Level 3
				</Typography>
				<Box m="auto" sm={{ paddingLeft: "5px" }}>
					<BarChart
						width={500}
						height={300}
						data={topScores2}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="user_id" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="score" fill="#fca311" />
					</BarChart>
				</Box>
			</Box>
		</Box>
	);
}

export default Analytics;
