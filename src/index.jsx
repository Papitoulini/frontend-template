import { Home as HomeIcon, Info as InfoIcon } from '@mui/icons-material';
import { Box, CircularProgress, CssBaseline, Grid } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as Sentry from "@sentry/react";
import { lazy, StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes, BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";

import logo from "./assets/logo.svg";
import "./index.scss";
import theme from "./theme.js";

import { ErrorFallback, Header, Footer } from "#microcomponents";
import { useDocumentTitle } from "#utils";

const Home = lazy(() => import("./screens/Home.jsx"));
const About = lazy(() => import("./screens/About.jsx"));
const NotFound = lazy(() => import("./screens/NotFound.jsx"));

function at(n) {
	n = Math.trunc(n) || 0;
	if (n < 0) n += this.length;
	return n >= 0 || n < this.length ? this[n] : undefined;
}

const TypedArray = Reflect.getPrototypeOf(Int8Array);
for (const C of [Array, String, TypedArray]) {
	Object.defineProperty(C.prototype, "at", {
		value: at,
		writable: true,
		enumerable: false,
		configurable: true,
	});
}

globalThis.global = globalThis;

Sentry.init({
	dsn: "https://4ec8558cd64137ba4cbf6d300ce20af6@o4509417866002432.ingest.de.sentry.io/4509417913974864",
	// Setting this option to true will send default PII data to Sentry.
	// For example, automatic IP address collection on events
	sendDefaultPii: true,
	// integrations: [
	//   Sentry.browserTracingIntegration(),
	//   Sentry.replayIntegration()
	// ],
	// Tracing
	// tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
	// // Session Replay
	// replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	// replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const App = () => {
	useDocumentTitle("Frontend Template");
	const navigate = useNavigate();
	const location = useLocation();

	const headerButtons = [
		{ text: "Home", icon: HomeIcon, path: "/" },
		{ text: "About", icon: InfoIcon, path: "/about" },
	];

	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.ready.then((registration) => {
				registration.unregister();

				if (caches) {
					// eslint-disable-next-line promise/no-nesting
					caches.keys().then(async (names) => {
						await Promise.all(names.map((name) => caches.delete(name)));
					});
				}
			});
		}
	}, []);

	return (
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<ThemeProvider theme={theme}>
					<ErrorBoundary resetKeys={[window.location.pathname]} FallbackComponent={ErrorFallback}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
									<Grid style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
										<main style={{ zIndex: 0, flexGrow: 1, display: "flex", flexDirection: "column" }}>
											<Suspense
												fallback={(
													<Box sx={{ m: 1, display: "flex", justifyContent: "center" }}>
														<CircularProgress color="secondary" />
													</Box>
												)}
											>
															<Header
																isAuthenticated
																location={location}
																navigate={navigate}
																buttons={headerButtons}
																homeLink="/"
																logo={logo}
															/>
												<Routes>
													<Route path="/" element={<Home />} />
													<Route path="/about" element={<About />} />
													<Route path="*" element={<NotFound />} />
												</Routes>
												<Footer
													logo={logo}
												/>
											</Suspense>
										</main>
									</Grid>
							</LocalizationProvider>
					</ErrorBoundary>
				</ThemeProvider>
			</StyledEngineProvider>
	);
};


const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<StrictMode><Router><App /></Router></StrictMode>);
