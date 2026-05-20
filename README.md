# Smart Route Finder

A Google Maps-style HTML website GUI for finding shortest paths between Indian cities.

## Features

- Interactive OpenStreetMap map using Leaflet.
- Dijkstra shortest-path algorithm in JavaScript.
- City start and destination selectors.
- Shortest, fastest, and balanced route modes.
- Traffic pressure slider and traffic overlay.
- Satellite/map view toggle.
- Simulated navigation mode with current-leg highlighting.
- Route summary cards for distance, ETA, stops, and estimated cost.
- Turn-by-turn city path list.
- Fully responsive layout for desktop and mobile.
- Ready for GitHub Pages.

## Run Locally

Open `index.html` in your browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy On GitHub Pages

1. Push this project to GitHub.
2. Open repository `Settings` > `Pages`.
3. Choose `GitHub Actions` as the source.
4. Push to `main` or run the workflow manually.

The workflow in `.github/workflows/pages.yml` deploys the static website automatically.
