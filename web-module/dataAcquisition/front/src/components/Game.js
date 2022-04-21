import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Style from "../styles/style";
const axios = require("axios").default;

const Game = () => {
	const api = "http://localhost:8080/api";
	const [users, setUsers] = useState({});
	const [change, setChange] = useState(0);
	const classes = Style();
	const defaultValues = {
		user_id: 0,
		level_id: 0,
		score: 0,
		correct_number_of_notes: 0,
		date_played: "2022-03-05",
	};
	const defaultEditValues = {
		game_id: 0,
		user_id: 0,
		level_id: 0,
		score: 0,
		correct_number_of_notes: 0,
		date_played: "",
	};
	const defaultDeleteValues = {
		game_id: 0,
	};
	const [formValues, setFormValues] = useState(defaultValues);
	const [editValues, setEditValues] = useState(defaultEditValues);
	const [deleteValues, setDeleteValues] = useState(defaultDeleteValues);
	const columns: GridColDef[] = [
		{ field: "id", headerName: "Game ID", width: 250, id: true },
		{ field: "user_id", headerName: "User ID", width: 250 },
		{
			field: "level_id",
			headerName: "Level ID",
			width: 250,
		},
		{
			field: "score",
			headerName: "Score",
			width: 250,
		},
		{
			field: "correct_number_of_notes",
			headerName: "Correct Number of Notes",
			width: 250,
		},
		{
			field: "date_played",
			headerName: "Date Played",
			width: 250,
		},
	];
	useEffect(() => {
		const getUsers = async () => {
			const { data: tempUsers } = await axios.get(`${api}/game`);
			tempUsers.map((t) => {
				t["id"] = t["game_id"];
				return t;
			});
			console.log(tempUsers);
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
		setEditValues({
			...editValues,
			[name]: value,
		});
	};
	const handleDeleteChange = (e) => {
		const { name, value } = e.target;
		setDeleteValues({
			...deleteValues,
			[name]: value,
		});
	};
	const addGame = async () => {
		try {
			const res = await axios.post(`${api}/game`, {
				...formValues,
			});
			setChange(change + 1);
		} catch (e) {
			console.log(e);
		}
	};
	const editGame = async () => {
		try {
			const { game_id, ...body } = editValues;
			for (const key in body) {
				if (body[key] === defaultEditValues[key]) {
					delete body[key];
				}
			}
			const res = await axios.put(`${api}/game/${game_id}`, {
				...body,
			});
			setChange(change + 1);
		} catch (e) {
			console.log(e);
		}
	};
	const deleteGame = async () => {
		const { game_id } = deleteValues;
		try {
			const res = await axios.delete(`${api}/game/${game_id}`);
			setChange(change + 1);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			<Box className={classes.container}>
				<Typography variant="h2" component="h2">
					Game
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
						onCheck={() => {
							console.log("LLLLL");
						}}
					/>
				</div>
				<Typography variant="h4" component="h2" className={classes.subtitle}>
					Add Game
				</Typography>
				<TextField
					className={classes.input}
					id="user_id-input"
					name="user_id"
					label="user_id"
					type="number"
					value={formValues.user_id}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="level_id-input"
					name="level_id"
					label="level_id"
					type="number"
					value={formValues.level_id}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="score-input"
					name="score"
					label="score"
					type="number"
					value={formValues.score}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="correct_number_of_notes-input"
					name="correct_number_of_notes"
					label="correct_number_of_notes"
					type="number"
					value={formValues.correct_number_of_notes}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="date_played-input"
					name="date_played"
					label="date_played"
					type="date"
					value={formValues.score}
					onChange={handleInputChange}
				/>
				<div>
					<Button onClick={addGame} className={classes.button}>
						Add Game
					</Button>
				</div>
				<Typography variant="h4" component="h2" className={classes.subtitle}>
					Edit Game
				</Typography>
				<div>
					<TextField
						className={classes.input}
						id="game_id-edit"
						name="game_id"
						label="game_id"
						type="number"
						value={editValues.game_id}
						onChange={handleEditChange}
					/>
				</div>
				<TextField
					className={classes.input}
					id="user_id-edit"
					name="user_id"
					label="user_id"
					type="number"
					value={editValues.user_id}
					onChange={handleEditChange}
				/>
				<TextField
					className={classes.input}
					id="level_id-edit"
					name="level_id"
					label="level_id"
					type="number"
					value={editValues.level_id}
					onChange={handleEditChange}
				/>
				<TextField
					className={classes.input}
					id="score-edit"
					name="score"
					label="score"
					type="number"
					value={editValues.score}
					onChange={handleEditChange}
				/>
				<TextField
					className={classes.input}
					id="correct_number_of_notes-edit"
					name="correct_number_of_notes"
					label="correct_number_of_notes"
					type="number"
					value={editValues.correct_number_of_notes}
					onChange={handleEditChange}
				/>
				<TextField
					className={classes.input}
					id="date_played-edit"
					name="date_played"
					label="date_played"
					type="date"
					value={editValues.date_played}
					onChange={handleEditChange}
				/>
				<div>
					<Button onClick={editGame} className={classes.button}>
						Edit Game
					</Button>
				</div>
				<Typography variant="h4" component="h2" className={classes.subtitle}>
					Delete Game
				</Typography>
				<div>
					<TextField
						className={classes.input}
						id="game_id-delete"
						name="game_id"
						label="game_id"
						type="number"
						value={deleteValues.game_id}
						onChange={handleDeleteChange}
					/>
				</div>
				<div>
					<Button onClick={deleteGame} className={classes.button}>
						Delete Game
					</Button>
				</div>
			</Box>
		</>
	);
};

export default Game;
