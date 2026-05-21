import{a as m,S as f,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="55951286-327cba65600a8883f26a5072e";async function y(a){const t="https://pixabay.com",o="/api/",s=new URLSearchParams({key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${o}?${s}`;return(await m.get(e)).data}const l=document.querySelector(".gallery"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const t=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:i,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r}</p>
            <p><b>Views</b> ${i}</p>
            <p><b>Comments</b> ${u}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",t),g.refresh()}function b(){l.innerHTML=""}const c=document.querySelector(".loader"),L=document.querySelector(".form");L.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(t){b(),c.classList.remove("hidden");try{const o=await y(t);if(o.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o.hits)}catch(o){console.error(o),n.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{c.classList.add("hidden")}}});
//# sourceMappingURL=index.js.map
