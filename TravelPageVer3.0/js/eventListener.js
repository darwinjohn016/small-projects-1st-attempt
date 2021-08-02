function addGlobalEventListener(type,selector,callback)
{
  document.addEventListener(type,e=>
  {
    if(e.target.matches(selector)) callback(e);
  })
}

function addWindowEventListener(type,callback)
{
  window.addEventListener(type,e=>
  {
    callback(e);
  })
}

export{addGlobalEventListener,addWindowEventListener};