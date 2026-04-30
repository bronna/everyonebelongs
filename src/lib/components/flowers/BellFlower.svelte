<script>
  export let color;
  export let size = 36;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';
</script>

<svg viewBox="0 0 40 60" width={size * 0.75} height={size}
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
  </defs>
  <path d="M20,8 C20,14 20,20 20,28" stroke={SK} stroke-width={SW} stroke-linecap="round" fill="none" filter="url(#rough)"/>
  <path d="M20,28 C14,28 9,33 9,39 C9,47 14,54 20,55 C26,54 31,47 31,39 C31,33 26,28 20,28 Z"
    fill={color} stroke={SK} stroke-width={SW} stroke-linejoin="round" filter="url(#roughStrong)"/>
  <path d="M13,42 Q20,38 27,42" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.5" stroke-linecap="round" filter="url(#rough)"/>
</svg>
