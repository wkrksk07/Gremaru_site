(function(){
  var root=document.documentElement;
  var themeBtn=document.querySelector('[data-theme-toggle]');
  function paint(){
    var dark=root.dataset.theme==='dark';
    if(themeBtn){
      themeBtn.setAttribute('aria-pressed',dark?'true':'false');
      themeBtn.setAttribute('aria-label',dark?'다크 테마 사용 중, 라이트로 전환':'라이트 테마 사용 중, 다크로 전환');
      themeBtn.querySelector('[data-sun]').hidden=dark;
      themeBtn.querySelector('[data-moon]').hidden=!dark;
    }
  }
  if(themeBtn){
    themeBtn.addEventListener('click',function(){
      var next=root.dataset.theme==='dark'?'light':'dark';
      root.dataset.theme=next;
      try{localStorage.setItem('theme',next);}catch(e){}
      paint();
    });
  }
  paint();
  var toggle=document.querySelector('[data-nav-toggle]');
  var menu=document.querySelector('[data-menu]');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var open=menu.getAttribute('data-open')==='true';
      menu.setAttribute('data-open',open?'false':'true');
      toggle.setAttribute('aria-expanded',open?'false':'true');
    });
    menu.addEventListener('click',function(e){
      if(e.target.tagName==='A'){menu.setAttribute('data-open','false');toggle.setAttribute('aria-expanded','false');}
    });
  }
})();
