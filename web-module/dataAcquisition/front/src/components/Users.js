import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Style from "../styles/style";
const axios = require("axios").default;

const Users = ({ alert }) => {
	const api = "http://localhost:8080/api";
	const [users, setUsers] = useState({});
	const [change, setChange] = useState(0);
	const classes = Style();
	const defaultValues = {
		class: "pablo",
		username: "test",
		pwd: "test",
		levels_unlocked: 0,
	};
	const defaultEditValues = {
		username: "",
		class: "",
		pwd: "",
		levels_unlocked: 0,
	};
	const defaultDeleteValues = {
		username: 0,
	};
	const [formValues, setFormValues] = useState(defaultValues);
	const [editValues, setEditValues] = useState(defaultEditValues);
	const [deleteValues, setDeleteValues] = useState(defaultDeleteValues);
	const columns: GridColDef[] = [
		{ field: "id", headerName: "ID", width: 250 },
		{ field: "class", headerName: "Class", width: 250 },
		{ field: "username", headerName: "Username", width: 250 },
		{ field: "pwd", headerName: "Password", width: 250 },
		{ field: "levels_unlocked", headerName: "Levels Unlocked", width: 250 },
	];
	useEffect(() => {
		const getUsers = async () => {
			const { data: tempUsers } = await axios.get(`${api}/user`);
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

	const handleDeleteChange = (e) => {
		const { name, value } = e.target;
		setDeleteValues({
			...deleteValues,
			[name]: value,
		});
	};

	const addUser = async () => {
		try {
			const res = await axios.post(`${api}/user`, {
				...formValues,
			});
			alert(false, res);
			setChange(change + 1);
		} catch (e) {
			alert(true, e);
			console.log(e);
		}
	};
	const editUser = async () => {
		try {
			const { username, ...body } = editValues;
			for (const key in body) {
				if (body[key] === defaultEditValues[key]) {
					delete body[key];
				}
			}
			const res = await axios.put(`${api}/user/${username}`, {
				...body,
			});
			alert(false, res);
			setChange(change + 1);
		} catch (e) {
			alert(true, e);
			console.log(e);
		}
	};

	const deleteUser = async () => {
		const { username } = deleteValues;
		try {
			const res = await axios.delete(`${api}/user/${username}`);
			setChange(change + 1);
			alert(false, res);
		} catch (e) {
			alert(true, e);
			console.log(e);
		}
	};

	return (
		<>
			<Box className={classes.container}>
				<Typography variant="h2" component="h2">
					Users
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
					Add User
				</Typography>
				<TextField
					className={classes.input}
					id="class-input"
					name="class"
					label="class"
					type="text"
					value={formValues.class}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="username-input"
					name="username"
					label="Username"
					type="text"
					value={formValues.username}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="pws-input"
					name="pwd"
					label="Password"
					type="text"
					value={formValues.pws}
					onChange={handleInputChange}
				/>
				<TextField
					className={classes.input}
					id="levels_unlocked-input"
					name="levels_unlocked"
					label="Levels Unlocked"
					type="number"
					value={formValues.levels_unlocked}
					onChange={handleInputChange}
				/>
				<div>
					<Button onClick={addUser} className={classes.button}>
						Add user
					</Button>
				</div>
				<Typography variant="h4" component="h2" className={classes.subtitle}>
					Edit User
				</Typography>
				<div>
					<TextField
						className={classes.input}
						id="username-edit"
						name="username"
						label="Username"
						type="text"
						value={editValues.username}
						onChange={handleEditChange}
					/>
				</div>
				<TextField
					className={classes.input}
					id="class-edit"
					name="class"
					label="class"
					type="text"
					value={editValues.class}
					onChange={handleEditChange}
				/>
				<TextField
					className={classes.input}
					id="pws-edit"
					name="pwd"
					label="Password"
					type="text"
					value={editValues.pws}
					onChange={handleEditChange}
				/>
				<TextField
					className={classes.input}
					id="levels_unlocked-edit"
					name="levels_unlocked"
					label="Levels Unlocked"
					type="number"
					value={editValues.levels_unlocked}
					onChange={handleEditChange}
				/>
				<div>
					<Button onClick={editUser} className={classes.button}>
						Edit User
					</Button>
				</div>
				<Typography variant="h4" component="h2" className={classes.subtitle}>
					Delete User
				</Typography>
				<div>
					<TextField
						className={classes.input}
						id="username-delete"
						name="username"
						label="username"
						type="text"
						value={deleteValues.username}
						onChange={handleDeleteChange}
					/>
				</div>
				<div>
					<Button onClick={deleteUser} className={classes.button}>
						Delete User
					</Button>
				</div>
			</Box>
		</>
	);
};

export default Users;
