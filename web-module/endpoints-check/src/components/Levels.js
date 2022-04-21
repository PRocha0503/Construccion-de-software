import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Style from "../styles/style";
const axios = require("axios").default;

const Levels = () => {
	const api = "http://localhost:8080/api";
	const [users, setUsers] = useState({});
	const [change, setChange] = useState(0);
	const classes = Style();
	const defaultValues = {
		difficulty: 0,
		total_number_of_notes: 0,
		max_possible_score: 0,
	};
	const defaultEditValues = {
		level_number: 0,
		difficulty: 0,
		total_number_of_notes: 0,
		max_possible_score: 0,
	};
	const [formValues, setFormValues] = useState(defaultValues);
	const [editValues, setEditValues] = useState(defaultEditValues);
	const columns: GridColDef[] = [
		{ field: "id", headerName: "Level Number", width: 250, id: true },
		{ field: "difficulty", headerName: "Difficulty", width: 250 },
		{
			field: "total_number_of_notes",
			headerName: "Total Number of Notes",
			width: 250,
		},
		{
			field: "max_possible_score",
			headerName: "Max Posible Score",
			width: 250,
		},
	];
	useEffect(() => {
		const getUsers = async () => {
			const { data: tempUsers } = await axios.get(`${api}/level`);
			tempUsers.map((t) => {
				t["id"] = t["level_number"];
				return t;
			});
			setUsers(tempUsers);
		};
		getUsers();
	}, [change]);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};
	const handleEditChange = (e) => {
		const { name, value } = e.target;
		console.log("Here");
		setEditValues({
			...editValues,
			[name]: value,
		});
	};
	const addLevel = async () => {
		try {
			const res = await axios.post(`${api}/level`, {
				...formValues,
			});
			setChange(change + 1);
		} catch (e) {
			console.log(e);
		}
	};
	const editLevel = async () => {
		try {
			const { level_number, ...body } = editValues;
			for (const key in body) {
				if (body[key] === defaultEditValues[key]) {
					delete body[key];
				}
			}
			const res = await axios.put(`${api}/level/${level_number}`, {
				...body,
			});
			setChange(change + 1);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<Box className={classes.container}>
				<Typography variant="h2" component="h2">
					Levels
				</Typography>
				<Typography variant="h4" component="h2" className={classes.subtitle}>
					Table
				</Typography>
				<div style={{ height: 400, width: "100%" }}>
					<DataGrid
						rows={users}
						columns={columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						checkboxSelection
					/>
				</div>
				<Typography variant="h4" component="h2" className={classes.subtitle}>
					Add Level
				</Typography>
				<TextField
					className={classes.input}
					id="difficulty-input"
					name="difficulty"
					label="difficulty"
					type="number"
					value={formValues.difficulty}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="total_number_of_notes-input"
					name="total_number_of_notes"
					label="total_number_of_notes"
					type="number"
					value={formValues.total_number_of_notes}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="max_possible_score-input"
					name="max_possible_score"
					label="max_possible_score"
					type="number"
					value={formValues.max_possible_score}
					onChange={handleInputChange}
				/>
				<div>
					<Button onClick={addLevel} className={classes.button}>
						Add Level
					</Button>
				</div>
				<Typography variant="h4" component="h2" className={classes.subtitle}>
					Edit Level
				</Typography>
				<div>
					<TextField
						className={classes.input}
						id="level_number-edit"
						name="level_number"
						label="level_number"
						type="number"
						value={editValues.level_number}
						onChange={handleEditChange}
					/>
				</div>
				<TextField
					className={classes.input}
					id="difficulty-edit"
					name="difficulty"
					label="difficulty"
					type="number"
					value={editValues.difficulty}
					onChange={handleEditChange}
				/>
				<TextField
					className={classes.input}
					id="total_number_of_notes-edit"
					name="total_number_of_notes"
					label="total_number_of_notes"
					type="number"
					value={editValues.total_number_of_notes}
					onChange={handleEditChange}
				/>
				<TextField
					className={classes.input}
					id="max_possible_score-edit"
					name="max_possible_score"
					label="max_possible_score"
					type="number"
					value={editValues.max_possible_score}
					onChange={handleEditChange}
				/>
				<div>
					<Button onClick={editLevel} className={classes.button}>
						Edit User
					</Button>
				</div>
			</Box>
		</>
	);
};

export default Levels;
