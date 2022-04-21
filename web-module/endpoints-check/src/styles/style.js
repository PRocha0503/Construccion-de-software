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

		border: `solid 1px #E97A68`,
		borderRadius: theme.spacing(2),
	},
	subtitle: {
		marginLeft: theme.spacing(4),
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		color: "#E97A68",
	},
	input: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
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
}));

export default useStyles;
