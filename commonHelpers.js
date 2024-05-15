import{a as p,i as g,S as b}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const L="43802191-554d301bd26f1aa24348b3f09";async function w(t,s,o){let e=`https://pixabay.com/api/?${new URLSearchParams({key:L,q:t,orientation:"horizontal",safesearch:!0,per_page:s,page:o})}`;return(await p(e)).data}function l(t){g.show({message:t,color:"red",timeout:2e3,position:"topRight"})}function _(t){return t.reduce((s,o)=>s+=`<li class="card">
                <a href="${o.largeImageURL}">
                    <img class="card__img" src="${o.webformatURL}" alt="${o.tags}"/>

                    <div class="card__info">
                        <div class="card__likes">
                            <div class="title">likes</div>
                            <div class="number">${o.likes}</div>
                        </div>
                        <div class="card__views">
                            <div class="title">views</div>
                            <div class="number">${o.views}</div>
                        </div>
                        <div class="card__comments">
                            <div class="title">comments</div>
                            <div class="number">${o.comments}</div>
                        </div>
                        <div class="card__downloads">
                            <div class="title">downloads</div>
                            <div class="number">${o.downloads}</div>
                        </div>
                    </div>
                </a>
            </li>
        `,"")}const n=document.querySelector(".form"),v=document.querySelector(".cards"),f=document.querySelector(".loader"),d=document.querySelector(".load-more"),h=15;let i=1,m=null,u="",P=new b(".cards a",{captionsData:"alt"});n.addEventListener("submit",t=>{if(t.preventDefault(),u=n.elements.search.value.trim(),!u){l("Sorry, the query field can not be empty");return}v.innerHTML="",i=1,n.reset(),y()});d.addEventListener("click",()=>{y();const s=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"})});function y(){f.classList.remove("is-hidden"),d.classList.add("is-hidden"),w(u,h,i).then(t=>{if(m=Math.ceil(t.totalHits/h),!t.hits.length){l("Sorry, there are no images matching your search query. <br>Please try again!");return}const s=_(t.hits);if(v.insertAdjacentHTML("beforeend",s),P.refresh(),i>=m){l("We're sorry, but you've reached the end of search results.");return}d.classList.remove("is-hidden"),i++}).catch(t=>console.log(t)).finally(()=>{f.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
