import { Box, Stack, Typography } from "@mui/material";

function About() {
	return (
		<Box
			sx={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					p: { xs: 3, md: 4 },
					background: "linear-gradient(180deg, #f8fafc 0%, #eef3fb 52%, #fff7f2 100%)",
				}}
		>
			<Box
				sx={{
					width: "min(720px, 100%)",
					p: { xs: 3, md: 4 },
					borderRadius: "16px",
					backgroundColor: "white.main",
					border: "1px solid rgba(15, 23, 42, 0.08)",
					boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
				}}
			>
				<Stack spacing={2}>
					<Typography variant="overline" color="secondary.main" sx={{ fontWeight: 700 }}>
						About This Repository
					</Typography>
					<Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
						A frontend template for validating shared UI.
					</Typography>
					<Typography variant="body1" color="text.secondary">
						This repository is a Vite and React frontend template designed to load shared
						microcomponents, apply local Material UI theme settings, and verify how remote
						modules behave inside a routed application shell.
					</Typography>
					<Typography variant="body1" color="text.secondary">
						The template serves as a controlled environment for previewing components, testing
						integration wiring, and iterating on page composition before those modules are used
						inside a larger product frontend.
					</Typography>
				</Stack>
			</Box>
		</Box>
	);
}

export default About;
