import ky from "ky";
import queryString from "query-string";
import useSWR from "swr";

import { jwt } from "../utils/index.js";

const API_ROOT = import.meta.env.VITE_APP_MAIN_SERVER_URL?.replace(/\/+$/, "");
const prefixUrl = API_ROOT ? `${API_ROOT}/api` : "api";
const refreshClient = ky.create({ prefixUrl, retry: 0, throwHttpErrors: false });

const rootApi = ky.extend({
	timeout: false,
	prefixUrl,
	retry: {
		statusCodes: [401, 408, 413, 429, 502, 503, 504],
		limit: 2,
		methods: ["get", "head", "options", "put", "delete"],
	},
	hooks: {
		beforeRequest: [({ headers }) => {
			const token = jwt.getToken();
			if (token) headers.set("x-access-token", token);
		}],
		beforeRetry: [
			async ({ error }) => {
				if (error?.response?.status !== 401) return;

				const res = await refreshClient.get("refresh");
				if (!res.ok) {
					jwt.destroyToken();
					return;
				}

				const { token } = await res.json();
				jwt.setToken(token);
			},
		],
	},
});

const api = {
	get: (path, searchParams) => rootApi.get(path, {
		searchParams: searchParams ? queryString.stringify(searchParams) : undefined,
	}).json(),
	post: (path, json) => rootApi.post(path, { json }).json(),
	put: (path, json) => rootApi.put(path, { json }).json(),
	patch: (path, json) => rootApi.patch(path, { json }).json(),
	delete: (path, json) => rootApi.delete(path, { json }).json(),
};

export default api;

const is = (data, error) => ({ isLoading: !error && !data, isError: Boolean(error) });

export const useProjects = (shouldTry = true, includeHidden = true) => {
	const url = "panorama/projects/";
	const { data, error, mutate } = useSWR(shouldTry
		? [url, includeHidden] : null, () => api.get(url, { includeHidden }));
	return { projects: data, ...is(data, error), mutate };
};

export const authenticate = (username, password) => api.post("authenticate", { username, password });
