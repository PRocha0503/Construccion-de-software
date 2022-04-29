import { useEffect, useState } from "react";
import Analytics from "../components/Analytics";
import Users from "../components/Users";
import Levels from "../components/Levels";
import Game from "../components/Game";

const axios = require("axios").default;
const Screen = ({ component, alert }) => {
	const renderSwitch = (_c) => {
		switch (_c) {
			case 0:
				return <Analytics></Analytics>;
			case 1:
				return <Users alert={alert}></Users>;
			case 2:
				return <Levels alert={alert}></Levels>;
			default:
				return <Game alert={alert}></Game>;
		}
	};
	console.log(component);
	return <>{renderSwitch(component)}</>;
};

export default Screen;
