// hide call bar while the contact form is on screen
const cb = document.getElementById('callbar');
const cs = document.getElementById('contact');
if(cb && cs && 'IntersectionObserver' in window){
  new IntersectionObserver(([e])=>{
    cb.classList.toggle('hide', e.isIntersecting);
  },{threshold:.15}).observe(cs);
}

// compact nav on scroll
const navEl = document.querySelector('nav');
if(navEl) addEventListener('scroll', () => navEl.classList.toggle('compact', scrollY > 40), {passive:true});

// hero rain: storm rolls in, the roof sheds it, sky clears. desktop only.
const rainC = document.getElementById('rain');
const noMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if(rainC && !noMotion && matchMedia('(min-width:761px)').matches){
  const ctx = rainC.getContext('2d');
  let W, H, raf, visible = true, last = performance.now();
  const fit = () => { W = rainC.width = rainC.offsetWidth; H = rainC.height = rainC.offsetHeight; };
  fit(); addEventListener('resize', fit, {passive:true});
  const N = 70, slant = 0.22;
  const drops = Array.from({length:N}, () => ({x:Math.random()*1.1*innerWidth, y:Math.random()*innerHeight, l:14+Math.random()*22, s:520+Math.random()*340}));
  const intensity = t => { const p = (t/1000) % 26; if(p<5) return p/5; if(p<13) return 1; if(p<19) return 1-(p-13)/6; return 0; };
  const step = t => {
    const dt = Math.min(.05, (t-last)/1000); last = t;
    const k = intensity(t);
    ctx.clearRect(0,0,W,H);
    if(k > 0){
      ctx.strokeStyle = 'rgba(236,230,218,.32)'; ctx.lineWidth = 1; ctx.beginPath();
      for(let i = 0; i < Math.floor(N*k); i++){
        const d = drops[i];
        ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - d.l*slant, d.y + d.l);
        d.y += d.s*dt; d.x -= d.s*slant*dt;
        if(d.y > H){ d.y = -30; d.x = Math.random()*(W+120); }
      }
      ctx.stroke();
    }
    if(visible) raf = requestAnimationFrame(step);
  };
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if(visible){ last = performance.now(); raf = requestAnimationFrame(step); }
    else cancelAnimationFrame(raf);
  }).observe(rainC);
}

// gallery lightbox
const lb = document.getElementById('lightbox');
if(lb){
  const tiles = [...document.querySelectorAll('.gal a')];
  const img = document.getElementById('lbimg'), cap = document.getElementById('lbcap');
  let idx = 0, lastFocus = null;
  const show = i => {
    idx = (i + tiles.length) % tiles.length;
    const t = tiles[idx], ti = t.querySelector('img');
    img.src = ti.src; img.alt = ti.alt; cap.textContent = t.dataset.cap || '';
  };
  const open = i => { lastFocus = document.activeElement; show(i); lb.classList.add('open'); document.body.style.overflow = 'hidden'; document.getElementById('lbx').focus(); };
  const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; if(lastFocus) lastFocus.focus(); };
  tiles.forEach((t, i) => t.addEventListener('click', e => { e.preventDefault(); open(i); }));
  document.getElementById('lbx').addEventListener('click', close);
  document.getElementById('lbp').addEventListener('click', () => show(idx-1));
  document.getElementById('lbn').addEventListener('click', () => show(idx+1));
  lb.addEventListener('click', e => { if(e.target === lb) close(); });
  addEventListener('keydown', e => {
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowLeft') show(idx-1);
    if(e.key === 'ArrowRight') show(idx+1);
  });
}

// crew video: play only while on screen, honor reduced motion
const cv = document.getElementById('crewVideo');
if(cv){
  if(noMotion){
    cv.setAttribute('controls','');
  } else {
    cv.play().catch(()=>{});
    if('IntersectionObserver' in window){
      new IntersectionObserver(([e])=>{
        if(e.isIntersecting){ cv.play().catch(()=>{}); }
        else cv.pause();
      },{threshold:.25}).observe(cv);
    }
  }
}

// subtle 3D tilt on shingle spec cards
if(matchMedia('(pointer:fine)').matches && !noMotion){
  document.querySelectorAll('.mat').forEach(c => {
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect();
      const px = (e.clientX - r.left)/r.width - .5, py = (e.clientY - r.top)/r.height - .5;
      c.style.transition = 'transform .08s';
      c.style.transform = `perspective(900px) rotateX(${(-py*2.6).toFixed(2)}deg) rotateY(${(px*2.6).toFixed(2)}deg)`;
    });
    c.addEventListener('pointerleave', () => {
      c.style.transition = 'transform .5s ease';
      c.style.transform = 'none';
    });
  });
}

// scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// conversational two-step form
const qf = document.getElementById('quoteForm');
if(qf){
  const steps = qf.querySelectorAll('.step');
  const fstep = document.getElementById('fstep');
  const fchip = document.getElementById('fchip');
  const fchip2 = document.getElementById('fchip2');
  const fsvc  = document.getElementById('fsvc');
  const fage  = document.getElementById('fage');
  const widths = {1:'33.34%', 2:'66.67%', 3:'100%'};
  const go = n => {
    steps.forEach(s => s.classList.toggle('active', +s.dataset.step === n));
    if(fstep) fstep.textContent = '0' + n;
    const fbar = document.getElementById('fbar');
    if(fbar) fbar.style.width = widths[n];
  };
  qf.querySelectorAll('.step[data-step="1"] .opt').forEach(b => b.addEventListener('click', () => {
    fsvc.value = b.dataset.val;
    fchip2.textContent = b.dataset.val;
    go(2);
  }));
  qf.querySelectorAll('.step[data-step="2"] .opt').forEach(b => b.addEventListener('click', () => {
    fage.value = b.dataset.val;
    fchip.textContent = fsvc.value + ' · ' + b.dataset.val;
    go(3);
    const fn = document.getElementById('fn');
    if(fn) fn.focus({preventScroll:true});
  }));
  document.getElementById('fback2').addEventListener('click', () => go(1));
  document.getElementById('fback3').addEventListener('click', () => go(2));
  qf.addEventListener('reset-steps', () => go(1));
}

// contact form -> Formspree (stays on page)
if(qf){
  qf.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const btn = qf.querySelector('button[type=submit]');
    const original = btn.textContent;
    btn.disabled = true; btn.textContent = 'Sending…';
    const data = Object.fromEntries(new FormData(qf).entries());
    try{
      const res = await fetch('/api/contact', {
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify(data)
      });
      if(res.ok){ qf.reset(); btn.textContent = 'Request Sent ✓'; qf.dispatchEvent(new Event('reset-steps')); }
      else { btn.disabled = false; btn.textContent = 'Try again or call 318-613-0072'; }
    }catch{ btn.disabled = false; btn.textContent = 'Try again or call 318-613-0072'; }
  });
}
