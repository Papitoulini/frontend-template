import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const microcomponentsUrl = env.VITE_MICROCOMPONENTS_URL || "http://localhost:3001/assets/remoteEntry.js";

	return {
		plugins: [
			react(),
			federation({
				name: "frontend_template",
				remotes: {
					microcomponents: microcomponentsUrl,
				},
				shared: [
					"react",
					"react-dom",
					"react-router-dom",
					"@emotion/react",
					"@emotion/styled",
					"@mui/material",
					"@mui/x-date-pickers",
					"dayjs",
				],
			}),
		],
		server: {
			port: parseInt(env.VITE_PUBLIC_PORT || 3002),
			strictPort: true,
		},
	};
});
