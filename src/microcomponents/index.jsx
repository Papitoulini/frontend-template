import withTheme, { SuspenseSpinner, WithSuspense } from "./remoteComponentLoader.jsx";

// Remote microcomponents loader - all components now use the Material-UI theme
// from the host (frontend-template)

// ============================================================================
// BUTTONS
// ============================================================================
const PrimaryBackgroundButton = withTheme(() => import("microcomponents/Buttons"),"PrimaryBackgroundButton");
const PrimaryBorderButton = withTheme(() => import("microcomponents/Buttons"), "PrimaryBorderButton");
const SecondaryBackgroundButton = withTheme(() => import("microcomponents/Buttons"), "SecondaryBackgroundButton");
const ThirdBackgroundButton = withTheme(() => import("microcomponents/Buttons"), "ThirdBackgroundButton");

// ============================================================================
// ACCORDION
// ============================================================================
const Accordion = withTheme(() => import("microcomponents/Accordion"));

// ============================================================================
// AUTOCOMPLETE
// ============================================================================
const PrimaryBackgroundAutocomplete = withTheme(() => import("microcomponents/Autocomplete"), "PrimaryBackgroundAutocomplete");

const PrimaryBorderAutocomplete = withTheme(() => import("microcomponents/Autocomplete"), "PrimaryBorderAutocomplete");

// ============================================================================
// CARD
// ============================================================================
const Card = withTheme(() => import("microcomponents/Card"));

// ============================================================================
// CHECKBOXES
// ============================================================================
const PrimaryCheckbox = withTheme(() => import("microcomponents/Checkbox"), "PrimaryCheckbox");
const SecondaryCheckbox = withTheme(() => import("microcomponents/Checkbox"), "SecondaryCheckbox");
const ThirdCheckbox = withTheme(() => import("microcomponents/Checkbox"), "ThirdCheckbox");

// ============================================================================
// CHECKBOXES DROPDOWN
// ============================================================================
const PrimaryBackgroundCheckboxesDropdown = withTheme(() => import("microcomponents/CheckboxesDropdown"), "PrimaryBackgroundCheckboxesDropdown");
const PrimaryBorderCheckboxesDropdown = withTheme(() => import("microcomponents/CheckboxesDropdown"), "PrimaryBorderCheckboxesDropdown");

// ============================================================================
// DATEPICKERS
// ============================================================================
const PrimaryBackgroundDatepicker = withTheme(() => import("microcomponents/Datepicker"), "PrimaryBackgroundDatepicker");
const PrimaryBorderDatepicker = withTheme(() => import("microcomponents/Datepicker"), "PrimaryBorderDatepicker");

// ============================================================================
// DIALOG
// ============================================================================
const Dialog = withTheme(() => import("microcomponents/Dialog"));

// ============================================================================
// DROPDOWNS
// ============================================================================
const PrimaryBackgroundDropdown = withTheme(() => import("microcomponents/Dropdowns"),"PrimaryBackgroundDropdown");
const PrimaryBorderDropdown = withTheme(() => import("microcomponents/Dropdowns"),"PrimaryBorderDropdown");

// ============================================================================
// ERROR FALLBACK
// ============================================================================
const ErrorFallback = withTheme(() => import("microcomponents/ErrorFallback"));

// ============================================================================
// INPUT
// ============================================================================
const Input = withTheme(() => import("microcomponents/Input"));

// ============================================================================
// FOOTER
// ============================================================================
const Footer = withTheme(() => import("microcomponents/Footer"));

// ============================================================================
// SPINNER
// ============================================================================
const Spinner = withTheme(() => import("microcomponents/Spinner"));

// ============================================================================
// TOOLTIP
// ============================================================================
const Tooltip = withTheme(() => import("microcomponents/Tooltip"));

// ============================================================================
// SWITCHES
// ============================================================================
const PrimarySwitch = withTheme(() => import("microcomponents/Switches"),"PrimarySwitch");
const SecondarySwitch = withTheme(() => import("microcomponents/Switches"),"SecondarySwitch");
const ThirdSwitch = withTheme(() => import("microcomponents/Switches"),"ThirdSwitch");

// ============================================================================
// SLIDERS
// ============================================================================
const PrimarySlider = withTheme(() => import("microcomponents/Slider"), "PrimarySlider");
const SecondarySlider = withTheme(() => import("microcomponents/Slider"), "SecondarySlider");
const ThirdSlider = withTheme(() => import("microcomponents/Slider"), "ThirdSlider");

// ============================================================================
// POPUP
// ============================================================================
const Popup = withTheme(() => import("microcomponents/Popup"));

// ============================================================================
// SEARCH
// ============================================================================
const Search = withTheme(() => import("microcomponents/Search"));

// ============================================================================
// PLOT
// ============================================================================
const Plot = withTheme(() => import("microcomponents/Plot"));

// ============================================================================
// RADIO BUTTONS
// ============================================================================
const PrimaryRadioButtons = withTheme(() => import("microcomponents/RadioButtons"), "PrimaryRadioButtons");
const SecondaryRadioButtons = withTheme(() => import("microcomponents/RadioButtons"), "SecondaryRadioButtons");
const ThirdRadioButtons = withTheme(() => import("microcomponents/RadioButtons"), "ThirdRadioButtons");

// ============================================================================
// MAP
// ============================================================================
const Map = withTheme(() => import("microcomponents/Map"));

// ============================================================================
// LEADERBOARD
// ============================================================================
const Leaderboard = withTheme(() => import("microcomponents/Leaderboard"));

// ============================================================================
// FORM
// ============================================================================
const Form = withTheme(() => import("microcomponents/Form"));

// ============================================================================
// FILE UPLOAD
// ============================================================================
const FileUpload = withTheme(() => import("microcomponents/FileUpload"));

// ============================================================================
// TABLE
// ============================================================================
const Table = withTheme(() => import("microcomponents/Table"));

// ============================================================================
// HEADER
// ============================================================================
const Header = withTheme(() => import("microcomponents/Header"));

// ============================================================================
// EXPORTS
// ============================================================================
export {
	// Loading spinner and suspense wrapper
	SuspenseSpinner,
	WithSuspense,

	// Buttons
	PrimaryBackgroundButton,
	PrimaryBorderButton,
	SecondaryBackgroundButton,
	ThirdBackgroundButton,

	// Accordion
	Accordion,

	// Autocomplete
	PrimaryBackgroundAutocomplete,
	PrimaryBorderAutocomplete,

	// Card
	Card,

	// Checkboxes
	PrimaryCheckbox,
	SecondaryCheckbox,
	ThirdCheckbox,

	// Checkboxes Dropdown
	PrimaryBackgroundCheckboxesDropdown,
	PrimaryBorderCheckboxesDropdown,

	// Datepickers
	PrimaryBackgroundDatepicker,
	PrimaryBorderDatepicker,

	// Dialog
	Dialog,

	// Dropdowns
	PrimaryBackgroundDropdown,
	PrimaryBorderDropdown,

	// Error Fallback
	ErrorFallback,

	// Input
	Input,

	// Footer
	Footer,

	// Spinner
	Spinner,

	// Tooltip
	Tooltip,

	// Switches
	PrimarySwitch,
	SecondarySwitch,
	ThirdSwitch,

	// Sliders
	PrimarySlider,
	SecondarySlider,
	ThirdSlider,

	// Popup
	Popup,

	// Search
	Search,

	// Plot
	Plot,

	// Radio Buttons
	PrimaryRadioButtons,
	SecondaryRadioButtons,
	ThirdRadioButtons,

	// Map
	Map,

	// Leaderboard
	Leaderboard,

	// Form
	Form,

	// File Upload
	FileUpload,

	// Table
	Table,

	// Header
	Header,
};
