<script>
  import Pansy from '../flowers/Pansy.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Sunflower from '../flowers/Sunflower.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import BellFlower from '../flowers/BellFlower.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import PoppyFlower from '../flowers/PoppyFlower.svelte';

  export let opacity = 1;
  export let height = 60;

  const MEADOW_LIGHT = [
    { C: Pansy,       color:"#C084B8", center:"#F5AB54", size:38, x:10,  r:0,   o:0.9 },
    { C: Tulip,       color:"#EE5A36",                   size:44, x:28,  r:0,   o:0.9 },
    { C: Daisy,       color:"#F0F0E8", center:"#F5AB54", size:34, x:48,  r:20,  o:0.9 },
    { C: Cosmos,      color:"#7DBDE5", center:"#fff",    size:30, x:70,  r:-10, o:0.9 },
    { C: PoppyFlower, color:"#E8373A", center:"#2b1d0e", size:32, x:88,  r:15,  o:0.9 },
    { C: BellFlower,  color:"#9B6FD4",                   size:36, x:108, r:-5,  o:0.9 },
    { C: WildFlower,  color:"#F5AB54", center:"#EE5A36", size:34, x:128, r:10,  o:0.9 },
    { C: Sunflower,   color:"#F7D06E", center:"#7B3F00", size:36, x:165, r:0,   o:0.9 },
    { C: Pansy,       color:"#7DBDE5", center:"#F0F0E8", size:28, x:186, r:30,  o:0.85 },
    { C: Daisy,       color:"#EE5A36", center:"#F5AB54", size:30, x:205, r:-15, o:0.9 },
    { C: Tulip,       color:"#CFA4CC",                   size:40, x:220, r:0,   o:0.9 },
    { C: Cosmos,      color:"#E8373A", center:"#F5AB54", size:28, x:240, r:5,   o:0.9 },
    { C: BellFlower,  color:"#4AABDE",                   size:32, x:258, r:-8,  o:0.85 },
    { C: WildFlower,  color:"#9B6FD4", center:"#F0F0E8", size:32, x:276, r:-20, o:0.9 },
    { C: PoppyFlower, color:"#F5AB54", center:"#EE5A36", size:34, x:295, r:10,  o:0.9 },
  ];

  $: flowers = [...MEADOW_LIGHT, ...MEADOW_LIGHT.map(f => ({ ...f, x: f.x + 310 }))];
</script>

<div style="position:relative;height:{height}px;overflow:visible;pointer-events:none;">
  {#each flowers as f, i}
    <div style="position:absolute;bottom:0;left:{f.x}px;transform:rotate({f.r || 0}deg);opacity:{(f.o || 0.7) * opacity}">
      <svelte:component this={f.C} color={f.color} center={f.center} size={f.size}/>
    </div>
  {/each}
</div>
