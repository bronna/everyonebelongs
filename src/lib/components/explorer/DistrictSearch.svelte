<script>
  /** @type {{ districts: any[], onSelect: (id: string) => void, initialName?: string }} */
  let { districts, onSelect, initialName = '' } = $props();

  let query = $state(initialName);
  let open = $state(false);
  let highlighted = $state(0);
  let inputEl = $state(null);

  const filtered = $derived(
    query.trim().length === 0
      ? []
      : districts
          .filter((d) => d.name.toLowerCase().includes(query.trim().toLowerCase()))
          .slice(0, 8)
  );

  $effect(() => {
    if (filtered.length > 0) {
      open = true;
      highlighted = 0;
    } else {
      open = false;
    }
  });

  function select(district) {
    onSelect(district.id);
    query = district.name;
    open = false;
  }

  function handleKeydown(e) {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlighted = Math.min(highlighted + 1, filtered.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlighted = Math.max(highlighted - 1, 0);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[highlighted]) select(filtered[highlighted]);
    } else if (e.key === 'Escape') {
      open = false;
    }
  }

  function handleWindowClick(e) {
    if (inputEl && !inputEl.closest('.search-wrapper')?.contains(e.target)) {
      open = false;
    }
  }
</script>

<svelte:window onclick={handleWindowClick} />

<div class="search-wrapper">
  <div class="search-row">
    <input
      bind:this={inputEl}
      class="search-input"
      type="text"
      placeholder="Find your school district…"
      autocomplete="off"
      bind:value={query}
      onkeydown={handleKeydown}
      onfocus={() => { if (filtered.length > 0) open = true; }}
      role="combobox"
      aria-label="Search for a school district"
      aria-expanded={open}
      aria-controls="district-listbox"
      aria-autocomplete="list"
    />
    <button class="search-icon" aria-hidden="true" tabindex="-1">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="2"/>
        <path d="M13 13l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  {#if open && filtered.length > 0}
    <ul id="district-listbox" class="dropdown" role="listbox">
      {#each filtered as district, i}
        <li
          class="option"
          class:highlighted={i === highlighted}
          role="option"
          aria-selected={i === highlighted}
          onmousedown={() => select(district)}
          onmouseenter={() => (highlighted = i)}
        >
          {district.name}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .search-wrapper {
    position: relative;
    max-width: 560px;
    margin: 0 auto;
  }

  .search-row {
    display: flex;
    align-items: stretch;
  }

  .search-input {
    flex: 1;
    font-family: 'DM Sans', sans-serif;
    font-size: 17px;
    font-weight: 400;
    padding: 16px 20px;
    border: 2px solid var(--near-black);
    border-right: none;
    background: #fff;
    color: var(--near-black);
    outline: none;
    box-shadow: 3px 3px 0 var(--near-black);
    transition: box-shadow 0.1s;
  }

  .search-input:focus {
    box-shadow: 4px 4px 0 var(--deep-forest);
    border-color: var(--deep-forest);
  }

  .search-input::placeholder {
    color: rgba(34, 34, 34, 0.38);
  }

  .search-icon {
    display: flex;
    align-items: center;
    padding: 0 18px;
    background: var(--deep-forest);
    border: 2px solid var(--near-black);
    color: #f7f3ed;
    cursor: default;
    box-shadow: 3px 3px 0 var(--near-black);
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: #fff;
    border: 2px solid var(--near-black);
    box-shadow: 4px 4px 0 var(--near-black);
    list-style: none;
    margin: 0;
    padding: 4px 0;
    z-index: 50;
    max-height: 320px;
    overflow-y: auto;
  }

  .option {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    padding: 12px 20px;
    cursor: pointer;
    color: var(--near-black);
    transition: background 0.08s;
  }

  .option.highlighted {
    background: var(--sky-blue);
    color: var(--near-black);
  }

  @media (max-width: 600px) {
    .search-input {
      font-size: 16px;
      padding: 14px 16px;
    }
  }
</style>
