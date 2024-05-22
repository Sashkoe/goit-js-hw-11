import{S as f,i}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(r){const a=new URLSearchParams({key:"43953718-9ce06f0736fa41b18ed1e7ce5",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function y(r){return r.hits.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:n,comments:u,downloads:p})=>`
          <li class="card">
              <div class="place-for-image">
                  <a href="${o}">
                      <img src="${s}" alt="${e}" class="picture"/>
                  </a>
              </div>
              <div class="info-text">
                  <div class="description">
                      <span class="bold-text">Likes</span>
                      <span class="info-value">${t}</span>
                  </div>
                  <div class="description">
                      <span class="bold-text">Views</span>
                      <span class="info-value">${n}</span>
                  </div>
                  <div class="description">
                      <span class="bold-text">Comments</span>
                      <span class="info-value">${u}</span>
                  </div>
                  <div class="description">
                      <span class="bold-text">Downloads</span>
                      <span class="info-value">${p}</span>
                  </div>
              </div>
          </li>`).join("")}const d=document.querySelector(".loader"),g=document.getElementById("searchForm"),c=document.querySelector(".gallery"),h=new f(".card .place-for-image a",{captions:!0,captionsData:"alt",captionDelay:250});function l(r){d.style.display=r}d.style.display="none";g.addEventListener("submit",v);async function v(r){r.preventDefault(),c.innerHTML="";const a=r.currentTarget.elements.searchInput.value;l("block"),m(a).then(s=>{if(s.total===0)return i.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}),0;c.insertAdjacentHTML("beforeend",y(s)),h.refresh(),r.target.reset()}).catch(s=>{i.error({title:"Error",message:s.message})}).finally(()=>{l("none")})}
//# sourceMappingURL=commonHelpers.js.map
