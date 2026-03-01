# Frontend Template

A React 19 + Vite frontend starter with Material UI, module federation, and a small API client layer. It is set up to consume shared remote microcomponents and run as a host app.

## ✨ Features

- React 19 app bootstrapped with Vite
- Material UI + Emotion theming
- Module Federation host for remote `microcomponents`
- Client-side routing with `react-router-dom`
- API wrapper built on `ky` with token refresh handling
- SWR-based example data hook
- Sentry client initialization in the app entrypoint

## 📦 Install

```bash
npm install
```

## 🚀 Quickstart

1. Review the values in `.env`.
2. Start the dev server.

```bash
npm run dev
```

By default the app runs on `http://localhost:3002`.

## 🧱 What’s inside

- `src/index.jsx`: app bootstrap, routing, theme providers, Sentry setup
- `src/api/`: shared HTTP client and example SWR hook
- `src/microcomponents/`: remote component loaders and exports
- `src/screens/`: route-level screens (`Home`, `About`, `NotFound`, `Settings`)
- `src/theme.js`, `src/colors.js`, `src/index.scss`: theme and global styling
- `vite.config.js`: Vite config, env loading, and module federation setup

## ⚙️ Customising

- `VITE_PUBLIC_PORT`: local dev server port
- `VITE_MICROCOMPONENTS_URL`: remote module federation entry URL
- `VITE_APP_MAIN_SERVER_URL`: API server base URL; when set, requests are sent to `<value>/api`

If `VITE_APP_MAIN_SERVER_URL` is empty, the API client falls back to relative `/api` requests.

## 🧪 Scripts

- `npm run dev`: start the Vite dev server
- `npm run build`: create a production build
- `npm run preview`: preview the production build locally
- `npm run lint`: run ESLint with zero warnings allowed

## 🔁 Publish flow (develop → master)

No repository-specific branch promotion or release flow is documented here. If you use `develop` and `master`, validate changes locally before merging forward.

## 🤝 Contributing

- Keep changes focused and small
- Run `npm run lint` before opening a PR
- Run `npm run build` before merging changes that affect runtime behavior

## 📝 License

No license file is included in this repository.
