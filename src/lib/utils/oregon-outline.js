// Simplified Oregon state boundary polygon for the GeoIndicator component.
// Derived from Census TIGER/Line data, simplified for small-scale display (~130px).
// Coordinates are [longitude, latitude] per GeoJSON convention.
export const oregonOutline = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-124.566, 46.266],
        [-124.054, 46.266],
        [-123.720, 46.224],
        [-123.476, 46.182],
        [-123.211, 46.172],
        [-122.880, 45.868],
        [-122.247, 45.549],
        [-121.523, 45.726],
        [-120.506, 45.700],
        [-119.433, 45.919],
        [-118.988, 45.999],
        [-117.972, 45.999],
        [-117.483, 45.998],
        [-116.916, 45.996],
        [-116.858, 45.612],
        [-116.781, 44.087],
        [-117.243, 44.394],
        [-117.243, 42.000],
        [-120.002, 42.000],
        [-121.337, 42.000],
        [-123.820, 42.000],
        [-124.213, 42.009],
        [-124.356, 42.840],
        [-124.612, 43.740],
        [-124.566, 44.615],
        [-124.488, 45.454],
        [-124.566, 46.266]
      ]
    ]
  }
};
