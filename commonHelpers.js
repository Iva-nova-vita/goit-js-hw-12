import{a as L,i as b,S as w}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const _="43802191-554d301bd26f1aa24348b3f09";async function y(i,r,t){let e=`https://pixabay.com/api/?${new URLSearchParams({key:_,q:i,orientation:"horizontal",safesearch:!0,per_page:r,page:t})}`;return(await L(e)).data}function o(i){b.show({message:i,color:"red",timeout:2e3,position:"topRight"})}function g(i){return i.reduce((r,t)=>r+=`<li class="card">
                <a href="${t.largeImageURL}">
                    <img class="card__img" src="${t.webformatURL}" alt="${t.tags}"/>

                    <div class="card__info">
                        <div class="card__likes">
                            <div class="title">likes</div>
                            <div class="number">${t.likes}</div>
                        </div>
                        <div class="card__views">
                            <div class="title">views</div>
                            <div class="number">${t.views}</div>
                        </div>
                        <div class="card__comments">
                            <div class="title">comments</div>
                            <div class="number">${t.comments}</div>
                        </div>
                        <div class="card__downloads">
                            <div class="title">downloads</div>
                            <div class="number">${t.downloads}</div>
                        </div>
                    </div>
                </a>
            </li>
        `,"")}const h=document.querySelector(".form"),f=document.querySelector(".cards"),d=document.querySelector(".loader"),a=document.querySelector(".load-more"),m=15;let c=1,v=null,l="",p;h.addEventListener("submit",i=>{if(i.preventDefault(),l=h.elements.search.value.trim(),!l){o("Sorry, the query field can not be empty");return}f.innerHTML="",d.classList.remove("is-hidden"),a.classList.add("is-hidden"),y(l,m,1).then(r=>{if(v=Math.ceil(r.totalHits/m),!r.hits.length){o("Sorry, there are no images matching your search query. <br>Please try again!");return}const t=g(r.hits);if(f.insertAdjacentHTML("afterbegin",t),p=new w(".cards a",{captionsData:"alt"}),c>=v){o("We're sorry, but you've reached the end of search results.");return}a.classList.remove("is-hidden"),c++}).catch(r=>console.log(r)).finally(()=>d.classList.add("is-hidden")),h.reset()});a.addEventListener("click",i=>{d.classList.remove("is-hidden"),a.classList.add("is-hidden"),y(l,m,c).then(r=>{if(!r.hits.length){o("Sorry, there are no images matching your search query. <br>Please try again!");return}const t=g(r.hits);f.insertAdjacentHTML("beforeend",t),p.refresh();const e=document.querySelector(".card").getBoundingClientRect().height;if(window.scrollBy({top:2*e,behavior:"smooth"}),c>=v){o("We're sorry, but you've reached the end of search results.");return}c++,a.classList.remove("is-hidden")}).catch(r=>console.log(r)).finally(()=>{d.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
