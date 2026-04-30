<script>
  export let color = '#CFA4CC';
  export let size = 30;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';
</script>

<svg viewBox="0 0 50 60" width={size} height={size * 1.1}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  <defs>
    <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04 0.04" numOctaves="3" seed="2" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="roughStrong" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03 0.05" numOctaves="4" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="roughMed" x="-8%" y="-8%" width="116%" height="116%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035 0.045" numOctaves="3" seed="14" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <path d="M25,40 C25,30 25,20 25,12" stroke={SK} stroke-width={SW} stroke-linecap="round" fill="none" filter="url(#rough)"/>
  <circle cx="25" cy="20" r="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
  <circle cx="14" cy="33" r="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#roughMed)"/>
  <circle cx="36" cy="33" r="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#roughMed)"/>
</svg>
