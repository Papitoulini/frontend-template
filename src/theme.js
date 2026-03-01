import { createTheme } from "@mui/material";


import "./index.scss";
import colors from "./colors.js";

const theme = createTheme({
	palette: {
		primary: {
			main: colors.primary,
		},
		secondary: {
			main: colors.secondary,
		},
		third: {
			main: colors.third,
		},

		success: { main: colors.success },
		error: { main: colors.error },
		warning: { main: colors.warning },
		info: { main: colors.info },

		dark: { main: colors.dark },
		light: { main: colors.light },
		grey: { main: colors.grey, light: colors.greyLight, dark: colors.greyDark },
		green: { main: colors.green },
		white: { main: "#ffffff" },
	},
	typography: {
		fontFamily: "\"Public Sans\", \"Segoe UI\", sans-serif",
	},
	shape: {
		borderRadius: 10,
	},
});

export default theme;
