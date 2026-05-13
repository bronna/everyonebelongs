import districts from '$lib/data/districts.json';
import geography from '$lib/data/geography.json';
import crosswalk from '$lib/data/crosswalk.json';

export function load() {
  return { districts, geography, crosswalk };
}
