// ─── THEME ────────────────────────────────────────────────
function toggleTheme(){
  var html=document.documentElement;
  var isDark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',isDark?'light':'dark');
  localStorage.setItem('theme',isDark?'light':'dark');
}
(function(){
  var saved=localStorage.getItem('theme');
  var prefersDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
  document.documentElement.setAttribute('data-theme',saved||(prefersDark?'dark':'light'));
})();

// ─── PAGE STATE ───────────────────────────────────────────
var currentPage='found';

function initDefaultPage(){
  var defaultPage=(document.body && document.body.getAttribute('data-default-page'))||'found';
  setPage(defaultPage);
  syncActiveNav(defaultPage);
}

function syncActiveNav(id){
  var map={found:0,infra:1,net:2,cloud:3,sec:4};
  document.querySelectorAll('.sidebar-item').forEach(function(s){s.classList.remove('active')});
  document.querySelectorAll('.cat-chip').forEach(function(c){c.classList.remove('active')});
  document.querySelectorAll('.nav-item').forEach(function(n){n.classList.remove('active')});
  var idx=map[id];
  if(typeof idx==='undefined') return;
  var sidebarItems=document.querySelectorAll('.sidebar-item');
  var chips=document.querySelectorAll('.cat-chip');
  var navItems=document.querySelectorAll('.nav-item');
  if(sidebarItems[idx]) sidebarItems[idx].classList.add('active');
  if(chips[idx]) chips[idx].classList.add('active');
  if(navItems[idx]) navItems[idx].classList.add('active');
}

function setPage(id,el){
  currentPage=id;
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});
  var pg=document.getElementById('page-'+id);
  if(pg) pg.classList.add('active');
  syncActiveNav(id);
  if(el) el.classList.add('active');
}

function setPageDesktop(id,el){
  setPage(id,null);
  document.querySelectorAll('.sidebar-item').forEach(function(s){s.classList.remove('active')});
  if(el) el.classList.add('active');
  // sync chips
  var chips=document.querySelectorAll('.cat-chip');
  var map={found:0,infra:1,net:2,cloud:3,sec:4};
  chips.forEach(function(c){c.classList.remove('active')});
  if(typeof map[id]!=='undefined' && chips[map[id]]) chips[map[id]].classList.add('active');
}

function setPageMobile(id,el){
  setPage(id,null);
  document.querySelectorAll('.nav-item').forEach(function(n){n.classList.remove('active')});
  if(el) el.classList.add('active');
  var chips=document.querySelectorAll('.cat-chip');
  var map={found:0,infra:1,net:2,cloud:3,sec:4};
  chips.forEach(function(c){c.classList.remove('active')});
  if(typeof map[id]!=='undefined' && chips[map[id]]) chips[map[id]].classList.add('active');
}

// ─── CPU VIEW ─────────────────────────────────────────────
function openCat(){
  document.getElementById('main-view').style.display='none';
  document.getElementById('cpu-view').style.display='block';
  document.getElementById('back-btn').style.display='flex';
  setCpuBrand('intel');
}

function showMain(){
  document.getElementById('cpu-view').style.display='none';
  document.getElementById('main-view').style.display='block';
  document.getElementById('back-btn').style.display='none';
}

function setCpuBrand(b){
  document.getElementById('cpu-intel-view').style.display=b==='intel'?'block':'none';
  document.getElementById('cpu-amd-view').style.display=b==='amd'?'block':'none';
  document.getElementById('cpu-bi').className='brand-btn'+(b==='intel'?' intel':'');
  document.getElementById('cpu-ba').className='brand-btn'+(b==='amd'?' amd':'');
  if(b==='intel') setCpuSeg('i','nb');
  else setCpuSeg('a','nb');
}

function setCpuSeg(brand,seg){
  var segs=['nb','pc','sv'];
  var pfx=brand==='i'?'i':'a';
  var btnpfx=brand==='i'?'isg':'asg';
  segs.forEach(function(s){
    var v=document.getElementById(pfx+'-'+s+'-view');
    var b=document.getElementById(btnpfx+'-'+s);
    if(v) v.style.display=s===seg?'block':'none';
    if(b) b.className='seg-btn'+(s===seg?' active':'');
  });
}

// ─── SEARCH ───────────────────────────────────────────────
function doSearch(q){
  var wrap=document.getElementById('search-results-wrap');
  var bwrap=document.getElementById('browse-wrap');
  var res=document.getElementById('search-results');
  var clr=document.getElementById('search-clear');
  clr.className='search-clear'+(q.length>0?' show':'');
  if(!q||q.length<2){wrap.style.display='none';bwrap.style.display='block';return;}
  var ql=q.toLowerCase();
  var hits=SEARCH_INDEX.filter(function(i){
    return i.title.toLowerCase().includes(ql)||i.sub.toLowerCase().includes(ql)||i.tags.includes(ql);
  }).slice(0,12);
  wrap.style.display='block';bwrap.style.display='none';
  if(!hits.length){
    res.innerHTML='<div class="no-results"><div class="no-results-icon">🔍</div>ไม่พบ "'+q+'"<br><small style="color:var(--text3);margin-top:4px;display:block">ลองคำค้นใหม่</small></div>';
    return;
  }
  res.innerHTML=hits.map(function(h){
    var fn=h.id.startsWith('__sheet_')
      ?'openSheet("'+h.id.replace('__sheet_','')+'")':'openPuById("'+h.id+'")';
    return '<div class="card" onclick="'+fn+'"><div class="card-row"><div class="card-info"><div class="card-title">'+h.title+'</div><div class="card-desc">'+h.sub+'</div></div><div class="card-chevron">›</div></div></div>';
  }).join('');
}

function clearSearch(){
  document.getElementById('srch').value='';
  doSearch('');
}

// ─── SHEET / MODAL ────────────────────────────────────────
function openSheet(id){
  var d=SHEETS[id]; if(!d) return;
  document.getElementById('sh-title').textContent=d.t;
  document.getElementById('sh-sub').textContent=d.s;
  document.getElementById('sh-body').innerHTML=d.body();
  document.getElementById('sheet-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeSheet(e){
  if(e.target===document.getElementById('sheet-overlay')){
    document.getElementById('sheet-overlay').classList.remove('open');
    document.body.style.overflow='';
  }
}

function openPuById(id){
  var d=PU[id]; if(!d) return;
  var b='';
  if(d.specs){
    b+='<div class="spec-grid">';
    d.specs.forEach(function(r){b+='<div class="spec-card"><div class="spec-lbl">'+r[0]+'</div><div class="spec-val">'+r[1]+'</div></div>';});
    b+='</div>';
  }
  if(d.use) b+='<div class="use-box"><div class="use-lbl">Use Case</div><div class="use-val">'+d.use+'</div></div>';
  if(d.sales) b+='<div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+d.sales+'</div></div>';
  document.getElementById('sh-title').textContent=d.t;
  document.getElementById('sh-sub').textContent=d.s;
  document.getElementById('sh-body').innerHTML=b;
  document.getElementById('sheet-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

var SEARCH_INDEX=[];
Object.keys(PU).forEach(function(k){
  var d=PU[k];
  SEARCH_INDEX.push({id:k,title:d.t,sub:d.s,tags:(d.t+' '+(d.specs?d.specs.map(function(s){return s[0]+' '+s[1]}).join(' '):'')+' '+(d.use||'')+' '+(d.sales||'')).toLowerCase()});
});
Object.keys(SHEETS).forEach(function(k){
  var d=SHEETS[k];
  SEARCH_INDEX.push({id:'__sheet_'+k,title:d.t,sub:d.s,tags:(d.t+' '+d.s).toLowerCase()});
});

// ─── KEYBOARD SHORTCUT ────────────────────────────────────
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    var overlay=document.getElementById('sheet-overlay');
    if(overlay.classList.contains('open')){
      overlay.classList.remove('open');
      document.body.style.overflow='';
    }
  }
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){
    e.preventDefault();
    document.getElementById('srch').focus();
    document.getElementById('srch').select();
  }
});

// ─── SWIPE TO CLOSE SHEET ─────────────────────────────────
var sheetPanel=document.getElementById('sheet-panel');
var startY=0;
sheetPanel.addEventListener('touchstart',function(e){startY=e.touches[0].clientY;},{passive:true});
sheetPanel.addEventListener('touchend',function(e){
  var dy=e.changedTouches[0].clientY-startY;
  if(dy>80){
    document.getElementById('sheet-overlay').classList.remove('open');
    document.body.style.overflow='';
  }
},{passive:true});

initDefaultPage();
