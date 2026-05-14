import districts from '../../data/districts.json';
import geography from '../../data/geography.json';
import crosswalk from '../../data/crosswalk.json';

export function load({ url }) {
  return { districts, geography, crosswalk, selectedId: url.searchParams.get('district') };
}
