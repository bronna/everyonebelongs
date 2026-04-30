<script>
  export let color;
  export let stem = '#1A6B4A';
  export let size = 44;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';
  const SWT = '0';
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
    <filter id="roughMed" x="-8%" y="-8%" width="116%" height="116%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035 0.045" numOctaves="3" seed="14" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <path d="M20,52 C20,40 20,34 20,28" stroke={SK} stroke-width={SW} stroke-linecap="round" fill="none" filter="url(#rough)"/>
  <path d="M20,38 C14,32 10,26 14,22 C16,20 18,22 20,26" fill={stem} stroke={SK} stroke-width={SWT} stroke-linejoin="round" filter="url(#roughMed)"/>
  <path d="M12,28 C10,18 14,10 20,8 C26,10 30,18 28,28 C26,34 22,36 20,36 C18,36 14,34 12,28 Z"
    fill={color} stroke={SK} stroke-width={SW} stroke-linejoin="round" filter="url(#roughStrong)"/>
  <path d="M20,11 C19,17 18,23 17,28" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
