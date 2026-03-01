import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";

import theme from "#theme";

/**
 * Wraps a lazy-loaded remote component with theme context
 * @param {Function} importFn - The lazy import function for the remote component
 * @param {String} componentName - Name of the component to extract from the module
 * @param {Object} additionalProps - Additional props to pass to the component
 * @returns {React.Component} Wrapped component with theme
 */
const withTheme = (importFn, componentName = "default", additionalProps = {}) => {
	return lazy(() =>
		importFn().then((mod) => {
			const Component = mod[componentName];
			if (!Component) {
				console.warn(`⚠️  Component "${componentName}" not found in module`);
			}
			return {
				default: (props) => (
					<Component {...props} theme={theme} {...additionalProps} />
				),
			};
		}).catch((err) => {
			console.error(`❌ Failed to load ${componentName}:`, err);
			throw err;
		})
	);
};

/**
 * Suspense fallback spinner for lazy-loaded components
 */
export const SuspenseSpinner = () => (
	<div style={{ textAlign: "center", padding: "20px" }}>
		<CircularProgress size={50} />
	</div>
);

/**
 * Wrapper component that provides Suspense boundary and theme context
 */
export const WithSuspense = ({ children }) => (
	<Suspense fallback={<SuspenseSpinner />}>
		{children}
	</Suspense>
);

export default withTheme;
