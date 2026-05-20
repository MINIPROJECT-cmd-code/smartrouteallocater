const cities = [
  { id: "delhi", name: "Delhi", lat: 28.6139, lng: 77.2090 },
  { id: "noida", name: "Noida", lat: 28.5355, lng: 77.3910 },
  { id: "agra", name: "Agra", lat: 27.1767, lng: 78.0081 },
  { id: "jaipur", name: "Jaipur", lat: 26.9124, lng: 75.7873 },
  { id: "lucknow", name: "Lucknow", lat: 26.8467, lng: 80.9462 },
  { id: "kanpur", name: "Kanpur", lat: 26.4499, lng: 80.3319 },
  { id: "chandigarh", name: "Chandigarh", lat: 30.7333, lng: 76.7794 },
  { id: "shimla", name: "Shimla", lat: 31.1048, lng: 77.1734 },
  { id: "amritsar", name: "Amritsar", lat: 31.6340, lng: 74.8723 },
  { id: "mumbai", name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { id: "pune", name: "Pune", lat: 18.5204, lng: 73.8567 },
  { id: "nashik", name: "Nashik", lat: 19.9975, lng: 73.7898 },
  { id: "surat", name: "Surat", lat: 21.1702, lng: 72.8311 },
  { id: "ahmedabad", name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { id: "udaipur", name: "Udaipur", lat: 24.5854, lng: 73.7125 },
  { id: "goa", name: "Goa", lat: 15.2993, lng: 74.1240 },
  { id: "indore", name: "Indore", lat: 22.7196, lng: 75.8577 },
  { id: "bhopal", name: "Bhopal", lat: 23.2599, lng: 77.4126 },
  { id: "nagpur", name: "Nagpur", lat: 21.1458, lng: 79.0882 },
  { id: "raipur", name: "Raipur", lat: 21.2514, lng: 81.6296 },
  { id: "hyderabad", name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  { id: "vijayawada", name: "Vijayawada", lat: 16.5062, lng: 80.6480 },
  { id: "bangalore", name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { id: "mysore", name: "Mysore", lat: 12.2958, lng: 76.6394 },
  { id: "mangalore", name: "Mangalore", lat: 12.9141, lng: 74.8560 },
  { id: "coimbatore", name: "Coimbatore", lat: 11.0168, lng: 76.9558 },
  { id: "madurai", name: "Madurai", lat: 9.9252, lng: 78.1198 },
  { id: "kochi", name: "Kochi", lat: 9.9312, lng: 76.2673 },
  { id: "chennai", name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { id: "visakhapatnam", name: "Visakhapatnam", lat: 17.6868, lng: 83.2185 },
  { id: "bhubaneswar", name: "Bhubaneswar", lat: 20.2961, lng: 85.8245 },
  { id: "kolkata", name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { id: "patna", name: "Patna", lat: 25.5941, lng: 85.1376 },
  { id: "ranchi", name: "Ranchi", lat: 23.3441, lng: 85.3096 },
  { id: "varanasi", name: "Varanasi", lat: 25.3176, lng: 82.9739 }
];

const roads = [
  ["bangalore", "chennai", 350, 64, 0.48, 0],
  ["bangalore", "hyderabad", 570, 72, 0.35, 60],
  ["bangalore", "mysore", 150, 58, 0.42, 10],
  ["bangalore", "coimbatore", 360, 62, 0.47, 35],
  ["chennai", "coimbatore", 500, 66, 0.44, 45],
  ["chennai", "hyderabad", 630, 70, 0.38, 70],
  ["hyderabad", "vijayawada", 275, 68, 0.45, 25],
  ["hyderabad", "nagpur", 500, 70, 0.34, 50],
  ["coimbatore", "kochi", 190, 52, 0.58, 10],
  ["mysore", "mangalore", 255, 48, 0.55, 0],
  ["mumbai", "pune", 150, 62, 0.70, 30],
  ["mumbai", "ahmedabad", 530, 74, 0.40, 80],
  ["mumbai", "goa", 590, 58, 0.50, 40],
  ["pune", "hyderabad", 560, 68, 0.41, 65],
  ["ahmedabad", "jaipur", 660, 72, 0.36, 70],
  ["goa", "mangalore", 360, 56, 0.52, 20],
  ["delhi", "jaipur", 280, 66, 0.58, 25],
  ["delhi", "lucknow", 550, 68, 0.49, 40],
  ["delhi", "chandigarh", 250, 70, 0.46, 35],
  ["jaipur", "udaipur", 400, 62, 0.43, 25],
  ["lucknow", "patna", 530, 60, 0.55, 25],
  ["chandigarh", "shimla", 120, 38, 0.50, 0],
  ["kolkata", "bhubaneswar", 440, 66, 0.42, 45],
  ["bhubaneswar", "visakhapatnam", 445, 68, 0.39, 45],
  ["patna", "kolkata", 580, 62, 0.47, 35],
  ["nagpur", "bhopal", 350, 62, 0.41, 20],
  ["bhopal", "indore", 190, 58, 0.46, 15],
  ["indore", "ahmedabad", 400, 62, 0.40, 30],
  ["mumbai", "nagpur", 830, 74, 0.34, 95],
  ["delhi", "mumbai", 1400, 78, 0.36, 150],
  ["chennai", "kolkata", 1670, 74, 0.32, 170],
  ["bangalore", "mumbai", 980, 72, 0.39, 115],
  ["hyderabad", "delhi", 1550, 76, 0.35, 160],
  ["patna", "delhi", 1000, 70, 0.44, 90],
  ["kochi", "goa", 750, 62, 0.49, 60],
  ["visakhapatnam", "chennai", 800, 70, 0.36, 75],
  ["surat", "mumbai", 280, 68, 0.44, 35],
  ["kanpur", "lucknow", 90, 50, 0.62, 0],
  ["amritsar", "chandigarh", 230, 62, 0.42, 15],
  ["ranchi", "patna", 330, 56, 0.48, 10],
  ["raipur", "nagpur", 290, 60, 0.43, 20],
  ["varanasi", "patna", 250, 54, 0.56, 0],
  ["agra", "delhi", 230, 64, 0.54, 25],
  ["noida", "delhi", 40, 35, 0.74, 0],
  ["nashik", "mumbai", 170, 58, 0.55, 20],
  ["madurai", "coimbatore", 215, 55, 0.47, 5]
].map(([from, to, distance, speed, traffic, toll]) => ({ from, to, distance, speed, traffic, toll }));

const cityById = new Map(cities.map((city) => [city.id, city]));
const graph = buildGraph();
const state = {
  source: "delhi",
  destination: "mumbai",
  mode: "distance",
  traffic: 42,
  route: null,
  trafficVisible: true,
  satelliteVisible: false,
  navigationActive: false,
  navigationStep: 0,
  routeRequestId: 0
};

let map;
let streetLayer;
let fallbackStreetLayer;
let satelliteLayer;
let networkLayer;
let routeLayer;
let currentLegLayer;
let markerLayer;
let navMarker;
let streetTileErrors = 0;
const geometryCache = new Map();

const sourceSelect = document.querySelector("#source");
const destinationSelect = document.querySelector("#destination");
const trafficInput = document.querySelector("#traffic");
const trafficValue = document.querySelector("#trafficValue");

document.addEventListener("DOMContentLoaded", () => {
  fillCitySelects();
  if (window.L) {
    createMap();
  } else {
    createFallbackMap();
  }
  bindControls();
  updateRoute();
});

function fillCitySelects() {
  const sorted = [...cities].sort((a, b) => a.name.localeCompare(b.name));
  const html = sorted.map((city) => `<option value="${city.id}">${city.name}</option>`).join("");
  sourceSelect.innerHTML = html;
  destinationSelect.innerHTML = html;
  sourceSelect.value = state.source;
  destinationSelect.value = state.destination;
}

function createMap() {
  map = L.map("map", {
    zoomControl: true,
    preferCanvas: true
  }).setView([22.7, 79.4], 5);

  streetLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
  }).addTo(map);

  fallbackStreetLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  });

  satelliteLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 18,
      attribution: "Tiles &copy; Esri"
    }
  );

  networkLayer = L.layerGroup().addTo(map);
  routeLayer = L.layerGroup().addTo(map);
  currentLegLayer = L.layerGroup().addTo(map);
  markerLayer = L.layerGroup().addTo(map);

  streetLayer.on("tileerror", () => {
    streetTileErrors += 1;
    if (streetTileErrors >= 3 && !state.satelliteVisible && !map.hasLayer(fallbackStreetLayer)) {
      fallbackStreetLayer.addTo(map);
    }
  });

  map.whenReady(() => {
    setTimeout(() => map.invalidateSize(), 100);
  });
}

function bindControls() {
  document.querySelector("#findBtn").addEventListener("click", updateRoute);
  sourceSelect.addEventListener("change", updateRoute);
  destinationSelect.addEventListener("change", updateRoute);

  document.querySelector("#swapBtn").addEventListener("click", () => {
    const oldSource = sourceSelect.value;
    sourceSelect.value = destinationSelect.value;
    destinationSelect.value = oldSource;
    updateRoute();
  });

  document.querySelectorAll('input[name="routeMode"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      state.mode = radio.value;
      updateRoute();
    });
  });

  trafficInput.addEventListener("input", () => {
    state.traffic = Number(trafficInput.value);
    trafficValue.value = `${state.traffic}%`;
    updateRoute(false);
  });

  document.querySelector("#fitBtn").addEventListener("click", fitRoute);
  document.querySelector("#trafficBtn").addEventListener("click", (event) => {
    state.trafficVisible = !state.trafficVisible;
    event.currentTarget.classList.toggle("is-active", state.trafficVisible);
    drawMap();
  });
  document.querySelector("#trafficBtn").classList.add("is-active");

  document.querySelector("#satelliteBtn").addEventListener("click", (event) => {
    if (!map) {
      setMapStatus("Offline map active");
      return;
    }
    state.satelliteVisible = !state.satelliteVisible;
    event.currentTarget.classList.toggle("is-active", state.satelliteVisible);
    document.body.classList.toggle("satellite-mode", state.satelliteVisible);

    if (state.satelliteVisible) {
      if (map.hasLayer(streetLayer)) {
        map.removeLayer(streetLayer);
      }
      if (map.hasLayer(fallbackStreetLayer)) {
        map.removeLayer(fallbackStreetLayer);
      }
      satelliteLayer.addTo(map);
    } else {
      if (map.hasLayer(satelliteLayer)) {
        map.removeLayer(satelliteLayer);
      }
      streetLayer.addTo(map);
      if (streetTileErrors >= 3) {
        fallbackStreetLayer.addTo(map);
      }
    }
  });

  document.querySelector("#startNavBtn").addEventListener("click", startNavigation);
  document.querySelector("#nextNavBtn").addEventListener("click", nextNavigationStep);
  document.querySelector("#prevNavBtn").addEventListener("click", previousNavigationStep);
  document.querySelector("#stopNavBtn").addEventListener("click", () => stopNavigation(true));

  document.querySelector("#citySearch").addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const match = cities.find((city) => city.name.toLowerCase().includes(query));
    if (match && query.length > 1 && map) {
      map.flyTo([match.lat, match.lng], 8, { duration: 0.5 });
    }
  });
}

function buildGraph() {
  const result = new Map(cities.map((city) => [city.id, []]));
  roads.forEach((road) => {
    result.get(road.from).push(road);
    result.get(road.to).push({ ...road, from: road.to, to: road.from });
  });
  return result;
}

async function updateRoute(shouldFit = true) {
  const requestId = ++state.routeRequestId;
  stopNavigation(false);
  state.source = sourceSelect.value;
  state.destination = destinationSelect.value;

  if (state.source === state.destination) {
    const alternate = cities.find((city) => city.id !== state.source);
    destinationSelect.value = alternate.id;
    state.destination = alternate.id;
  }

  state.route = findPath(state.source, state.destination);
  state.route.geometry = routeCurveCoordinates(state.route.path, 0.18);
  state.route.segmentGeometries = state.route.path.slice(0, -1).map((cityId, index) => {
    return curvedPath(cityById.get(cityId), cityById.get(state.route.path[index + 1]), 0.18);
  });
  state.route.mapMode = "Estimated route";
  setMapStatus("Building road route...");
  drawMap();
  renderSummary();
  renderNavigation();

  if (shouldFit) {
    fitRoute();
  }

  await enhanceRouteGeometry(state.route, requestId);

  if (requestId !== state.routeRequestId) {
    return;
  }

  drawMap();
  renderSummary();
  renderNavigation();

  if (shouldFit) {
    fitRoute();
  }
}

function findPath(start, end) {
  const distances = new Map(cities.map((city) => [city.id, Number.POSITIVE_INFINITY]));
  const previous = new Map();
  const visited = new Set();
  distances.set(start, 0);

  while (visited.size < cities.length) {
    let current = null;
    let currentDistance = Number.POSITIVE_INFINITY;

    for (const [cityId, distance] of distances) {
      if (!visited.has(cityId) && distance < currentDistance) {
        current = cityId;
        currentDistance = distance;
      }
    }

    if (current === null || current === end) {
      break;
    }

    visited.add(current);

    for (const road of graph.get(current)) {
      const candidate = distances.get(current) + roadWeight(road);
      if (candidate < distances.get(road.to)) {
        distances.set(road.to, candidate);
        previous.set(road.to, { city: current, road });
      }
    }
  }

  const path = [];
  const pathRoads = [];
  let cursor = end;

  while (cursor) {
    path.unshift(cursor);
    const step = previous.get(cursor);
    if (!step) {
      break;
    }
    pathRoads.unshift(step.road);
    cursor = step.city;
  }

  return summarizePath(path, pathRoads);
}

function roadWeight(road) {
  const pressure = state.traffic / 100;
  const trafficMultiplier = 1 + road.traffic * pressure * 1.65;
  const minutes = (road.distance / road.speed) * 60 * trafficMultiplier;

  if (state.mode === "time") {
    return minutes + road.toll * 0.025;
  }

  if (state.mode === "balanced") {
    return road.distance * 0.62 + minutes * 0.45 + road.toll * 0.03;
  }

  return road.distance + road.traffic * pressure * 18;
}

function summarizePath(path, pathRoads) {
  const pressure = state.traffic / 100;
  const distance = pathRoads.reduce((sum, road) => sum + road.distance, 0);
  const toll = pathRoads.reduce((sum, road) => sum + road.toll, 0);
  const minutes = pathRoads.reduce((sum, road) => {
    const trafficMultiplier = 1 + road.traffic * pressure * 1.65;
    return sum + (road.distance / road.speed) * 60 * trafficMultiplier;
  }, 0);
  const traffic = pathRoads.length
    ? pathRoads.reduce((sum, road) => sum + road.traffic, 0) / pathRoads.length
    : 0;
  const fuelCost = distance * 7.5;

  return { path, roads: pathRoads, distance, toll, minutes, traffic, fuelCost };
}

function drawMap() {
  if (!map) {
    drawFallbackMap();
    return;
  }

  networkLayer.clearLayers();
  routeLayer.clearLayers();
  currentLegLayer.clearLayers();
  markerLayer.clearLayers();
  if (navMarker) {
    navMarker.remove();
    navMarker = null;
  }

  roads.forEach((road) => {
    const from = cityById.get(road.from);
    const to = cityById.get(road.to);
    const color = road.traffic > 0.6 ? "#ef4444" : road.traffic > 0.45 ? "#f59e0b" : "#65a30d";
    const roadPath = curvedPath(from, to, 0.08);

    L.polyline(roadPath, {
      color,
      weight: state.trafficVisible ? 4 : 2,
      opacity: state.trafficVisible ? 0.32 : 0.14,
      dashArray: state.trafficVisible ? null : "8 10"
    }).addTo(networkLayer);
  });

  if (state.route) {
    const coords = state.route.geometry?.length ? state.route.geometry : routeCurveCoordinates(state.route.path, 0.18);

    L.polyline(coords, {
      color: "#ffffff",
      weight: state.route.mapMode === "Road route" ? 16 : 14,
      opacity: 0.92,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(routeLayer);

    L.polyline(coords, {
      color: "#1a73e8",
      weight: state.route.mapMode === "Road route" ? 8 : 7,
      opacity: 0.96,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(routeLayer);

    L.polyline(coords, {
      color: "#7db3ff",
      weight: 3,
      opacity: 0.9,
      dashArray: "1 16",
      lineCap: "round"
    }).addTo(routeLayer);

    drawRouteArrows(state.route, routeLayer, "route-arrow");

    if (state.navigationActive) {
      drawCurrentNavigationLeg();
    }
  }

  cities.forEach((city) => {
    const isRouteStop = state.route?.path.includes(city.id);
    const isTerminal = city.id === state.source || city.id === state.destination;

    const marker = L.marker([city.lat, city.lng], {
      icon: L.divIcon({
        className: "",
        html: `<span class="city-marker${isRouteStop ? " is-stop" : ""}${isTerminal ? " is-terminal" : ""}"></span>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      })
    }).addTo(markerLayer);

    marker.bindTooltip(city.name, { direction: "top", offset: [0, -12] });
    marker.on("click", () => {
      if (city.id !== state.source) {
        destinationSelect.value = city.id;
        updateRoute();
      }
    });
  });
}

function drawCurrentNavigationLeg() {
  const route = state.route;
  if (!route || route.path.length < 2) {
    return;
  }

  const step = Math.min(state.navigationStep, route.path.length - 1);
  const currentCity = cityById.get(route.path[step]);
  const nextCity = cityById.get(route.path[Math.min(step + 1, route.path.length - 1)]);

  navMarker = L.marker([currentCity.lat, currentCity.lng], {
    icon: L.divIcon({
      className: "",
      html: '<span class="nav-marker"></span>',
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    })
  }).addTo(currentLegLayer);

  if (nextCity && currentCity.id !== nextCity.id) {
    const legPath = route.segmentGeometries?.[step] || curvedPath(currentCity, nextCity, 0.18);
    L.polyline(legPath, {
      color: "#ffffff",
      weight: 15,
      opacity: 0.95,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(currentLegLayer);

    L.polyline(legPath, {
      color: "#f9ab00",
      weight: 9,
      opacity: 0.95,
      lineCap: "round",
      lineJoin: "round"
    }).addTo(currentLegLayer);

    addArrowForCoordinates(legPath, currentLegLayer, "nav-arrow");
  }
}

async function enhanceRouteGeometry(route, requestId) {
  if (!route || route.path.length < 2) {
    return;
  }

  try {
    const segmentGeometries = await Promise.all(route.path.slice(0, -1).map((cityId, index) => {
      const from = cityById.get(cityId);
      const to = cityById.get(route.path[index + 1]);
      return fetchRoadGeometry(from, to);
    }));

    if (requestId !== state.routeRequestId) {
      return;
    }

    const realSegments = segmentGeometries.filter((segment) => segment.source === "road").length;
    route.segmentGeometries = segmentGeometries.map((segment) => segment.coords);
    route.geometry = flattenSegments(route.segmentGeometries);
    route.mapMode = realSegments === segmentGeometries.length ? "Road route" : "Hybrid route";
    setMapStatus(route.mapMode === "Road route" ? "Road route loaded" : "Estimated backup active");
  } catch (error) {
    route.mapMode = "Estimated route";
    setMapStatus("Estimated route active");
  }
}

async function fetchRoadGeometry(from, to) {
  const cacheKey = `${from.id}-${to.id}`;
  const reverseKey = `${to.id}-${from.id}`;

  if (geometryCache.has(cacheKey)) {
    return geometryCache.get(cacheKey);
  }

  if (geometryCache.has(reverseKey)) {
    const reversed = {
      source: geometryCache.get(reverseKey).source,
      coords: [...geometryCache.get(reverseKey).coords].reverse()
    };
    geometryCache.set(cacheKey, reversed);
    return reversed;
  }

  const fallback = {
    source: "estimated",
    coords: curvedPath(from, to, 0.18)
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5200);
  const coordinates = `${from.lng},${from.lat};${to.lng},${to.lat}`;
  const url = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`;

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      geometryCache.set(cacheKey, fallback);
      return fallback;
    }

    const data = await response.json();
    const route = data.routes?.[0];

    if (!route?.geometry?.coordinates?.length) {
      geometryCache.set(cacheKey, fallback);
      return fallback;
    }

    const roadGeometry = {
      source: "road",
      coords: route.geometry.coordinates.map(([lng, lat]) => [lat, lng])
    };
    geometryCache.set(cacheKey, roadGeometry);
    return roadGeometry;
  } catch (error) {
    geometryCache.set(cacheKey, fallback);
    return fallback;
  } finally {
    clearTimeout(timeout);
  }
}

function flattenSegments(segments) {
  const coords = [];
  segments.forEach((segment, index) => {
    const copy = [...segment];
    if (index > 0) {
      copy.shift();
    }
    coords.push(...copy);
  });
  return coords;
}

function routeCurveCoordinates(path, bend) {
  const coords = [];
  for (let index = 0; index < path.length - 1; index += 1) {
    const from = cityById.get(path[index]);
    const to = cityById.get(path[index + 1]);
    const segment = curvedPath(from, to, bend);
    if (index > 0) {
      segment.shift();
    }
    coords.push(...segment);
  }
  return coords;
}

function curvedPath(from, to, bend = 0.12) {
  const points = [];
  const lat1 = from.lat;
  const lng1 = from.lng;
  const lat2 = to.lat;
  const lng2 = to.lng;
  const dx = lng2 - lng1;
  const dy = lat2 - lat1;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;
  const curve = Math.min(2.4, distance * bend);
  const normalX = -dy / distance;
  const normalY = dx / distance;
  const midpointLat = (lat1 + lat2) / 2 + normalY * curve;
  const midpointLng = (lng1 + lng2) / 2 + normalX * curve;

  for (let i = 0; i <= 28; i += 1) {
    const t = i / 28;
    const oneMinus = 1 - t;
    const lat = oneMinus * oneMinus * lat1 + 2 * oneMinus * t * midpointLat + t * t * lat2;
    const lng = oneMinus * oneMinus * lng1 + 2 * oneMinus * t * midpointLng + t * t * lng2;
    points.push([lat, lng]);
  }

  return points;
}

function drawRouteArrows(route, layer, className) {
  if (route.segmentGeometries?.length) {
    route.segmentGeometries.forEach((segment) => addArrowForCoordinates(segment, layer, className));
    return;
  }

  for (let index = 0; index < route.path.length - 1; index += 1) {
    const from = cityById.get(route.path[index]);
    const to = cityById.get(route.path[index + 1]);
    addArrowMarker(from, to, layer, className);
  }
}

function addArrowForCoordinates(coords, layer, className) {
  if (!coords || coords.length < 2) {
    return;
  }

  const midIndex = Math.max(1, Math.floor(coords.length / 2));
  const fromPoint = coords[midIndex - 1];
  const toPoint = coords[midIndex];
  const from = { lat: fromPoint[0], lng: fromPoint[1] };
  const to = { lat: toPoint[0], lng: toPoint[1] };
  const angle = bearing(from, to);

  L.marker(toPoint, {
    interactive: false,
    icon: L.divIcon({
      className: "",
      html: `<span class="${className}" style="transform: rotate(${angle}deg)"></span>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    })
  }).addTo(layer);
}

function addArrowMarker(from, to, layer, className) {
  const midLat = (from.lat + to.lat) / 2;
  const midLng = (from.lng + to.lng) / 2;
  const angle = bearing(from, to);

  L.marker([midLat, midLng], {
    interactive: false,
    icon: L.divIcon({
      className: "",
      html: `<span class="${className}" style="transform: rotate(${angle}deg)"></span>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    })
  }).addTo(layer);
}

function bearing(from, to) {
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const deltaLng = toRadians(to.lng - from.lng);
  const y = Math.sin(deltaLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);
  return (toDegrees(Math.atan2(y, x)) + 360) % 360;
}

function toRadians(value) {
  return value * Math.PI / 180;
}

function toDegrees(value) {
  return value * 180 / Math.PI;
}

function renderSummary() {
  const route = state.route;
  const start = cityById.get(state.source);
  const end = cityById.get(state.destination);

  document.querySelector("#routeTitle").textContent = `${start.name} to ${end.name}`;
  document.querySelector("#routeStatus").textContent = `${route.path.length} cities`;
  document.querySelector("#distanceStat").textContent = `${Math.round(route.distance)} km`;
  document.querySelector("#etaStat").textContent = formatMinutes(route.minutes);
  document.querySelector("#stopsStat").textContent = Math.max(0, route.path.length - 2);
  document.querySelector("#costStat").textContent = `Rs ${Math.round(route.fuelCost + route.toll)}`;
  document.querySelector("#modeBadge").textContent = modeLabel();
  document.querySelector("#chipMode").textContent = modeLabel();
  document.querySelector("#chipTraffic").textContent = route.mapMode || trafficLabel(route.traffic);

  const confidence = Math.max(62, Math.round(96 - route.traffic * 28 - state.traffic * 0.08));
  document.querySelector("#confidenceText").textContent = confidence >= 82 ? "High" : confidence >= 70 ? "Good" : "Moderate";
  document.querySelector("#confidenceBar").style.width = `${confidence}%`;

  document.querySelector(".route-chip p").textContent =
    `${modeLabel()} path with ${route.mapMode || "Estimated route"} drawing and ${trafficLabel(route.traffic)} traffic.`;

  document.querySelector("#steps").innerHTML = route.path.map((cityId, index) => {
    const city = cityById.get(cityId);
    const road = route.roads[index - 1];
    const detail = index === 0
      ? "Start here"
      : `${road.distance} km, ${trafficLabel(road.traffic)} traffic, Rs ${Math.round(road.toll)} toll`;

    return `
      <li class="${state.navigationActive && index === state.navigationStep ? "is-current" : ""}">
        <span class="step-number">${index + 1}</span>
        <span class="step-info">
          <strong>${city.name}</strong>
          <span>${detail}</span>
        </span>
      </li>
    `;
  }).join("");
}

function startNavigation() {
  if (!state.route || state.route.path.length < 2) {
    return;
  }
  state.navigationActive = true;
  state.navigationStep = 0;
  renderNavigation();
  drawMap();
  moveMapToNavigationStep();
}

function stopNavigation(shouldRender = true) {
  state.navigationActive = false;
  state.navigationStep = 0;
  if (shouldRender) {
    renderNavigation();
    drawMap();
    fitRoute();
  }
}

function nextNavigationStep() {
  if (!state.navigationActive || !state.route) {
    startNavigation();
    return;
  }
  state.navigationStep = Math.min(state.navigationStep + 1, state.route.path.length - 1);
  renderNavigation();
  drawMap();
  moveMapToNavigationStep();
}

function previousNavigationStep() {
  if (!state.navigationActive || !state.route) {
    return;
  }
  state.navigationStep = Math.max(state.navigationStep - 1, 0);
  renderNavigation();
  drawMap();
  moveMapToNavigationStep();
}

function renderNavigation() {
  const card = document.querySelector("#navigationCard");
  const startButton = document.querySelector("#startNavBtn");
  const prevButton = document.querySelector("#prevNavBtn");
  const nextButton = document.querySelector("#nextNavBtn");

  if (!state.route || state.route.path.length < 2) {
    card.classList.remove("is-active");
    startButton.disabled = true;
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  startButton.disabled = false;
  prevButton.disabled = !state.navigationActive || state.navigationStep === 0;
  nextButton.disabled = !state.navigationActive || state.navigationStep >= state.route.path.length - 1;
  startButton.innerHTML = state.navigationActive
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m0 0-5-5m5 5-5 5"></path></svg> Restart'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 14-8-5 16-3-6-6-2Z"></path></svg> Start navigation';

  card.classList.toggle("is-active", state.navigationActive);

  const step = state.navigationStep;
  const currentCity = cityById.get(state.route.path[step]);
  const nextCity = cityById.get(state.route.path[Math.min(step + 1, state.route.path.length - 1)]);
  const progress = Math.round((step / (state.route.path.length - 1)) * 100);
  const remainingRoads = state.route.roads.slice(step);
  const remainingDistance = remainingRoads.reduce((sum, road) => sum + road.distance, 0);
  const remainingMinutes = remainingRoads.reduce((sum, road) => {
    const trafficMultiplier = 1 + road.traffic * (state.traffic / 100) * 1.65;
    return sum + (road.distance / road.speed) * 60 * trafficMultiplier;
  }, 0);

  document.querySelector("#navStepNumber").textContent = step + 1;
  document.querySelector("#navProgressBar").style.width = `${progress}%`;
  document.querySelector("#navRemaining").textContent =
    step >= state.route.path.length - 1
      ? "Arrived"
      : `${Math.round(remainingDistance)} km left, ${formatMinutes(remainingMinutes)}`;

  if (!state.navigationActive) {
    document.querySelector("#navInstruction").textContent = "Navigation ready";
    document.querySelector("#navSubtext").textContent = "Start navigation to follow the selected route.";
    renderSummary();
    return;
  }

  if (step >= state.route.path.length - 1) {
    document.querySelector("#navInstruction").textContent = `Arrived at ${currentCity.name}`;
    document.querySelector("#navSubtext").textContent = "Destination reached on the selected shortest path.";
  } else {
    const road = state.route.roads[step];
    document.querySelector("#navInstruction").textContent = `Head toward ${nextCity.name}`;
    document.querySelector("#navSubtext").textContent =
      `${road.distance} km from ${currentCity.name}, ${trafficLabel(road.traffic)} traffic`;
  }

  renderSummary();
}

function moveMapToNavigationStep() {
  if (!state.route || !map) {
    return;
  }
  const city = cityById.get(state.route.path[state.navigationStep]);
  map.flyTo([city.lat, city.lng], Math.max(map.getZoom(), 6), { duration: 0.55 });
}

function fitRoute() {
  if (!state.route || state.route.path.length < 2) {
    return;
  }

  if (!map) {
    drawFallbackMap();
    return;
  }

  const bounds = L.latLngBounds(state.route.geometry?.length
    ? state.route.geometry
    : state.route.path.map((id) => {
      const city = cityById.get(id);
      return [city.lat, city.lng];
    }));

  map.fitBounds(bounds, { padding: [80, 80], maxZoom: 8 });
}

function formatMinutes(value) {
  const total = Math.round(value);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  if (hours <= 0) {
    return `${minutes} min`;
  }

  return minutes ? `${hours}h ${minutes}m` : `${hours}h`;
}

function trafficLabel(value) {
  if (value > 0.6) {
    return "heavy";
  }
  if (value > 0.43) {
    return "medium";
  }
  return "light";
}

function modeLabel() {
  if (state.mode === "time") {
    return "Fastest";
  }
  if (state.mode === "balanced") {
    return "Balanced";
  }
  return "Shortest";
}

function setMapStatus(message) {
  const status = document.querySelector("#mapStatus strong");
  if (status) {
    status.textContent = message;
  }
}

function createFallbackMap() {
  const mapElement = document.querySelector("#map");
  mapElement.classList.add("fallback-map");
  mapElement.innerHTML = "";
  setMapStatus("Offline map active");
}

function drawFallbackMap() {
  const mapElement = document.querySelector("#map");
  if (!mapElement) {
    return;
  }

  const width = Math.max(760, mapElement.clientWidth || 900);
  const height = Math.max(620, mapElement.clientHeight || 720);
  const projectedCities = new Map(cities.map((city) => [city.id, projectCity(city, width, height)]));
  const routeIds = new Set(state.route?.path || []);
  const routeSegments = state.route?.path?.slice(0, -1).map((cityId, index) => {
    return [projectedCities.get(cityId), projectedCities.get(state.route.path[index + 1])];
  }) || [];

  const roadLines = roads.map((road) => {
    const from = projectedCities.get(road.from);
    const to = projectedCities.get(road.to);
    const color = road.traffic > 0.6 ? "#d93025" : road.traffic > 0.45 ? "#f9ab00" : "#188038";
    return `<path d="${svgCurve(from, to, 0.16)}" stroke="${color}" stroke-width="2.5" opacity="0.28" fill="none" stroke-linecap="round"/>`;
  }).join("");

  const routeLines = routeSegments.map(([from, to], index) => {
    const active = state.navigationActive && index === state.navigationStep;
    const color = active ? "#f9ab00" : "#1a73e8";
    const widthValue = active ? 8 : 6;
    return `
      <path d="${svgCurve(from, to, 0.22)}" stroke="#ffffff" stroke-width="${widthValue + 7}" opacity="0.95" fill="none" stroke-linecap="round"/>
      <path d="${svgCurve(from, to, 0.22)}" stroke="${color}" stroke-width="${widthValue}" fill="none" stroke-linecap="round"/>
    `;
  }).join("");

  const markerNodes = cities.map((city) => {
    const point = projectedCities.get(city.id);
    const terminal = city.id === state.source || city.id === state.destination;
    const stop = routeIds.has(city.id);
    const fill = terminal ? "#d93025" : stop ? "#7e57c2" : "#1a73e8";
    return `
      <g class="fallback-city">
        <circle cx="${point.x}" cy="${point.y}" r="${terminal ? 9 : 7}" fill="${fill}" stroke="#ffffff" stroke-width="3"/>
        <text x="${point.x + 10}" y="${point.y - 9}">${city.name}</text>
      </g>
    `;
  }).join("");

  const navPoint = state.navigationActive && state.route
    ? projectedCities.get(state.route.path[state.navigationStep])
    : null;
  const navMarkerNode = navPoint
    ? `<circle class="fallback-nav-marker" cx="${navPoint.x}" cy="${navPoint.y}" r="13" fill="#f9ab00" stroke="#ffffff" stroke-width="4"/>`
    : "";

  mapElement.innerHTML = `
    <svg class="fallback-map-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Fallback smart route map">
      <defs>
        <linearGradient id="fallbackWater" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#dbeafe"/>
          <stop offset="1" stop-color="#ecfeff"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#fallbackWater)"/>
      <path d="M${width * 0.46} ${height * 0.04} C${width * 0.18} ${height * 0.18}, ${width * 0.17} ${height * 0.58}, ${width * 0.38} ${height * 0.95} C${width * 0.52} ${height * 0.86}, ${width * 0.78} ${height * 0.7}, ${width * 0.84} ${height * 0.42} C${width * 0.72} ${height * 0.2}, ${width * 0.61} ${height * 0.08}, ${width * 0.46} ${height * 0.04}Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
      ${roadLines}
      ${routeLines}
      ${markerNodes}
      ${navMarkerNode}
    </svg>
  `;
}

function projectCity(city, width, height) {
  const minLat = 8;
  const maxLat = 33;
  const minLng = 68;
  const maxLng = 90;
  const x = 80 + ((city.lng - minLng) / (maxLng - minLng)) * (width - 160);
  const y = 52 + ((maxLat - city.lat) / (maxLat - minLat)) * (height - 104);
  return { x, y };
}

function svgCurve(from, to, bend = 0.16) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;
  const curve = Math.min(80, distance * bend);
  const normalX = -dy / distance;
  const normalY = dx / distance;
  const cx = (from.x + to.x) / 2 + normalX * curve;
  const cy = (from.y + to.y) / 2 + normalY * curve;
  return `M${from.x.toFixed(1)} ${from.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}
