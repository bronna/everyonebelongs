<script>
  import '../app.css';
  import Nav from '$lib/components/sections/Nav.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
  import FilterDefs from '$lib/components/ui/FilterDefs.svelte';
</script>

<svelte:head>
  <script
    data-goatcounter="https://brianna.goatcounter.com/count"
    async
    src="//gc.zgo.at/count.js"
  ></script>
</svelte:head>

<FilterDefs/>
<Nav/>
<slot/>
<Footer/>
