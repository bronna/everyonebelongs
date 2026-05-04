<script>
  import '../app.css';
  import Nav from '$lib/components/sections/Nav.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
  import FilterDefs from '$lib/components/ui/FilterDefs.svelte';
</script>

<FilterDefs/>
<Nav/>
<slot/>
<Footer/>
