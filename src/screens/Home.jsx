import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";

import theme from "../theme.js";

import {
	Accordion,
	Card,
	Input,
	PrimaryBackgroundButton,
	PrimaryBackgroundDropdown,
	PrimaryBorderButton,
	PrimaryBorderDropdown,
	PrimaryCheckbox,
	PrimaryRadioButtons,
	PrimarySwitch,
	SecondaryBackgroundButton,
	Spinner,
	Tooltip,
} from "#microcomponents";

const codeBlockSx = {
	fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
	fontSize: "12px",
	lineHeight: 1.5,
	backgroundColor: "#0f172a",
	color: "#e2e8f0",
	padding: "12px",
	borderRadius: "8px",
	overflowX: "auto",
	margin: 0,
};

const sectionSx = {
	borderRadius: "16px",
	backgroundColor: "white.main",
	border: "1px solid rgba(15, 23, 42, 0.08)",
	boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
	overflow: "hidden",
};

function DemoSection({ title, subtitle, children }) {
	return (
		<Box sx={sectionSx}>
			<Box
				sx={{
					px: { xs: 2.5, md: 3 },
					py: 2,
					backgroundColor: "primary.main",
					color: "white.main",
				}}
			>
				<Stack spacing={0.75}>
					<Typography variant="h6" sx={{ fontWeight: 700 }}>
						{title}
					</Typography>
					{subtitle ? (
						<Typography variant="body2" sx={{ opacity: 0.88 }}>
							{subtitle}
						</Typography>
					) : null}
				</Stack>
			</Box>
			<Box sx={{ px: { xs: 2.5, md: 3 }, py: { xs: 2.5, md: 3 } }}>
				<Stack spacing={2}>{children}</Stack>
			</Box>
		</Box>
	);
}

function Home() {
	const [name, setName] = useState("");
	const [checked, setChecked] = useState(true);
	const [enabled, setEnabled] = useState(false);
	const [size, setSize] = useState("m");
	const [plan, setPlan] = useState("starter");
	const [spinnerOpen, setSpinnerOpen] = useState(false);

	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(180deg, #f8fafc 0%, #eef3fb 52%, #fff7f2 100%)",
				color: "#152033",
				p: { xs: 2, md: 4 },
				fontFamily: theme.typography.fontFamily,
			}}
		>
			<Spinner open={spinnerOpen} />

			<Stack spacing={3} sx={{ width: "min(1100px, 100%)", mx: "auto" }}>
				<Box
					sx={{
						borderRadius: "16px",
						p: { xs: 2.5, md: 4 },
						background: "linear-gradient(135deg, #1F4B99 0%, #0F766E 55%, #F26B3A 100%)",
						color: "white",
						boxShadow: "0 20px 45px rgba(31, 75, 153, 0.22)",
					}}
				>
					<Stack spacing={2}>
						<Chip
							label="Frontend Template Demo"
							sx={{
								width: "fit-content",
								bgcolor: "rgba(255,255,255,0.16)",
								color: "white",
								fontWeight: 700,
							}}
						/>
						<Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: "28px", md: "40px" } }}>
							Frontend template for testing shared UI and page composition
						</Typography>
						<Typography variant="body1" sx={{ maxWidth: 760, opacity: 0.95 }}>
							This home page presents the template as a neutral staging area for shared
							microcomponents, route layouts, and host-side integration examples.
						</Typography>
					</Stack>
				</Box>

				<DemoSection
					title="Quick Playground"
					subtitle="Basic interactive examples using the remote components wired into this repository."
				>
					<Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ md: "center" }}>
						<Input
							id="demo-name"
							label="Your name"
							value={name}
							onChange={(event) => setName(event.target.value)}
							placeholder="Type here..."
							sx={{ maxWidth: 320 }}
						/>
						<PrimaryCheckbox checked={checked} onChange={(event) => setChecked(event.target.checked)} />
						<Typography variant="body2">Checkbox: {checked ? "checked" : "unchecked"}</Typography>
						<PrimarySwitch checked={enabled} onChange={(event) => setEnabled(event.target.checked)} />
						<Typography variant="body2">Switch: {enabled ? "on" : "off"}</Typography>
					</Stack>

					<Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ md: "center" }}>
						<PrimaryBackgroundDropdown
							id="demo-size"
							value={size}
							placeholder="Select size"
							items={[
								{ value: "s", text: "Small" },
								{ value: "m", text: "Medium" },
								{ value: "l", text: "Large" },
							]}
							onChange={(event) => setSize(event.target.value)}
						/>
						<PrimaryBorderDropdown
							id="demo-plan"
							value={plan}
							placeholder="Select plan"
							items={[
								{ value: "starter", text: "Starter" },
								{ value: "pro", text: "Pro" },
								{ value: "enterprise", text: "Enterprise" },
							]}
							onChange={(event) => setPlan(event.target.value)}
						/>
						<Typography variant="body2">
							Selected: {size.toUpperCase()} / {plan}
						</Typography>
					</Stack>

					<PrimaryRadioButtons
						id="demo-radio"
						row
						value={plan}
						items={[
							{ value: "starter", label: "Starter" },
							{ value: "pro", label: "Pro" },
							{ value: "enterprise", label: "Enterprise" },
						]}
						onChange={(event) => setPlan(event.target.value)}
					/>

					<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
						<PrimaryBackgroundButton title={`Hello ${name || "there"}`} />
						<SecondaryBackgroundButton title="Open Spinner" onClick={() => setSpinnerOpen(true)} />
						<Tooltip title="Closes the fullscreen Spinner preview">
							<span>
								<PrimaryBorderButton title="Close Spinner" onClick={() => setSpinnerOpen(false)} />
							</span>
						</Tooltip>
					</Stack>
				</DemoSection>

				<DemoSection
					title="Remote Exposes"
					subtitle="This host consumes remote modules via Vite Module Federation."
				>
					<Typography variant="body2">
						Remote name: <strong>microcomponents</strong>
					</Typography>
					<Typography variant="body2">
						Configure the remote entry URL in <strong>vite.config.js</strong> to match the running
						component source used by the template.
					</Typography>
					<pre style={codeBlockSx}>
{`// common remote imports used in this repo
"microcomponents/Buttons"
"microcomponents/Input"
"microcomponents/Dropdowns"
"microcomponents/Accordion"
"microcomponents/Card"
"microcomponents/Header"`}
					</pre>
				</DemoSection>

				<Accordion
					title="How to use these components in this host"
					subtitle="Copy-paste starter config and imports"
					content={(
						<Stack spacing={2}>
							<Typography variant="body2">
								1. Install the federation plugin in your host app.
							</Typography>
							<pre style={codeBlockSx}>{`npm i @originjs/vite-plugin-federation`}</pre>

							<Divider />

							<Typography variant="body2">
								2. Configure the remote in your host <strong>vite.config.js</strong>.
							</Typography>
							<pre style={codeBlockSx}>
{`import federation from "@originjs/vite-plugin-federation";

export default {
  plugins: [
    federation({
      remotes: {
        microcomponents: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};`}
							</pre>

							<Divider />

							<Typography variant="body2">
								3. Import remote components in your host pages.
							</Typography>
							<pre style={codeBlockSx}>
{`import { PrimaryBackgroundButton } from "microcomponents/Buttons";
import Input from "microcomponents/Input";
import { PrimaryBorderDropdown } from "microcomponents/Dropdowns";

export function Example() {
  return (
    <>
      <Input label="Email" />
      <PrimaryBorderDropdown
        value={"a"}
        items={[{ value: "a", text: "Option A" }]}
        onChange={() => {}}
      />
      <PrimaryBackgroundButton title="Submit" />
    </>
  );
}`}
							</pre>

							<Divider />

							<Typography variant="body2">
								4. Run both apps at the same time: the component remote and this frontend host.
							</Typography>
						</Stack>
					)}
					alwaysExpanded
				/>

				<DemoSection title="Repository Notes" subtitle="Short context for what this template is for.">
					<Stack spacing={1.5}>
						<Typography variant="body2">
							This repository is a frontend template for validating federated microcomponents with
							local theme tokens, routing, and error boundaries already wired in.
						</Typography>
						<Typography variant="body2">
							The template is intended for verifying styling, loading states, and remote imports
							before the same modules are embedded in a larger product application.
						</Typography>
						<Box sx={{ maxWidth: 360 }}>
							<Card />
						</Box>
					</Stack>
				</DemoSection>
			</Stack>
		</Box>
	);
}

export default Home;
