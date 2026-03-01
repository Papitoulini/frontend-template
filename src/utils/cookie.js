const getCookieValue = (name) => {
	const key = `${encodeURIComponent(name)}=`;
	const match = document.cookie
		.split("; ")
		.find((entry) => entry.startsWith(key));

	return match ? decodeURIComponent(match.slice(key.length)) : null;
};

const cookie = {
	get: (name) => getCookieValue(name),
	set: (name, value, options = {}) => {
		const attributes = [
			`${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
			`path=${options.path || "/"}`,
		];

		if (options.maxAge) attributes.push(`max-age=${options.maxAge}`);
		if (options.sameSite) attributes.push(`samesite=${options.sameSite}`);
		if (options.secure) attributes.push("secure");

		document.cookie = attributes.join("; ");
	},
	remove: (name) => {
		document.cookie = `${encodeURIComponent(name)}=; path=/; max-age=0`;
	},
};

export default cookie;
