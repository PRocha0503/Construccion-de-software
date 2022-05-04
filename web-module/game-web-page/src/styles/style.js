import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	main: {
		backgroundColor: "white",
		paddingTop: theme.spacing(2),
	},
	container: {
		backgroundColor: "white",
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		marginBottom: theme.spacing(4),
		marginLeft: theme.spacing(10),
		marginRight: theme.spacing(10),

		borderRadius: theme.spacing(2),
	},
	subtitle: {
		marginLeft: theme.spacing(4),
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		color: "white",
	},
	input: {
		marginLeft: theme.spacing(6),
		marginRight: theme.spacing(6),
		marginTop: theme.spacing(3),
		color: "white",
		backgroundColor: "white",
		borderRadius: "9px",
		padding: "4px",
	},
	button: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		border: `solid 1px #FFB55E`,
		width: "100%",
		"&:hover": {
			background: "#E97A68",
		},
	},
	alert: {
		position: "sticky",
		top: 0,
	},
	table: {
		background: "white",
	},
	title: {
		fontFamily: "VT323",
		fontSize: 90,
	},
}));

export default useStyles;
