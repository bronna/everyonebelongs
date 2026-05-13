/** @param {string} id @param {any[]} districts */
export function getDistrictById(id, districts) {
  return districts.find((d) => d.id === id) ?? null;
}

/** @param {string} odeId @param {any[]} crosswalk */
export function getGeoidForDistrict(odeId, crosswalk) {
  return crosswalk.find((c) => c.ode_id === odeId)?.geoid ?? null;
}

/** @param {string} geoid @param {any[]} crosswalk */
export function getOdeIdForGeoid(geoid, crosswalk) {
  return crosswalk.find((c) => c.geoid === geoid)?.ode_id ?? null;
}

/** @param {string} odeId @param {any[]} geography @param {any[]} crosswalk */
export function getGeoEntry(odeId, geography, crosswalk) {
  const geoid = getGeoidForDistrict(odeId, crosswalk);
  if (!geoid) return null;
  return geography.find((g) => g.geoid === geoid) ?? null;
}

/** @param {string} odeId @param {any[]} districts @param {any[]} geography @param {any[]} crosswalk */
export function getNeighbors(odeId, districts, geography, crosswalk) {
  const geo = getGeoEntry(odeId, geography, crosswalk);
  if (!geo) return [];
  return geo.neighbors
    .map((neighborGeoid) => {
      const neighborOdeId = getOdeIdForGeoid(neighborGeoid, crosswalk);
      return neighborOdeId ? getDistrictById(neighborOdeId, districts) : null;
    })
    .filter(Boolean);
}

const HIGH_SUPPORT = ['autism', 'intellectual_disability', 'traumatic_brain_injury', 'deaf_blind', 'multiple_disabilities'];
const MEDIUM_SUPPORT = ['emotional_disturbance', 'hearing_impairment', 'visual_impairment', 'orthopedic_impairment'];
const LOW_SUPPORT = ['specific_learning_disability', 'speech_language', 'developmental_delay', 'other_health_impairment'];

/**
 * Returns support tier percentages and category lists for a district.
 * @param {any} district
 */
export function computeSupportTiers(district) {
  const cats = district.disability_categories ?? {};

  const sum = (keys) => keys.reduce((acc, k) => acc + (cats[k] ?? 0), 0);

  const high = { pct: sum(HIGH_SUPPORT), categories: HIGH_SUPPORT.filter((k) => cats[k] > 0) };
  const medium = { pct: sum(MEDIUM_SUPPORT), categories: MEDIUM_SUPPORT.filter((k) => cats[k] > 0) };
  const low = { pct: sum(LOW_SUPPORT), categories: LOW_SUPPORT.filter((k) => cats[k] > 0) };

  return { high, medium, low };
}

/** Readable category labels */
export const CATEGORY_LABELS = {
  specific_learning_disability: 'Specific learning disability',
  speech_language: 'Speech or language impairment',
  other_health_impairment: 'Other health impairment',
  autism: 'Autism',
  developmental_delay: 'Developmental delay',
  intellectual_disability: 'Intellectual disability',
  emotional_disturbance: 'Emotional disturbance',
  hearing_impairment: 'Hearing impairment',
  orthopedic_impairment: 'Orthopedic impairment',
  visual_impairment: 'Visual impairment',
  traumatic_brain_injury: 'Traumatic brain injury',
  multiple_disabilities: 'Multiple disabilities',
  deaf_blind: 'Deaf-blind'
};
