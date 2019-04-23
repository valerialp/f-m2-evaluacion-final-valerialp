"use strict";let favoriteProgram=[];favoriteProgram=JSON.parse(localStorage.getItem("fav"));const inputSearchEl=document.querySelector(".search-bar"),buttonSearchEl=document.querySelector(".btn-search"),listResultEl=document.querySelector(".search-list"),listFavEl=document.querySelector(".fav-list");function handlerButtonClick(){listResultEl.innerHTML="",""===inputSearchEl.value?showAllProgram():showSearchProgram()}function showAllProgram(){fetch("http://api.tvmaze.com/shows").then(t=>t.json()).then(function(t){for(let e=0;e<t.length;e++){const s=t[e],{name:n}=s,l=document.createElement("li");l.setAttribute("class","list-li");const r=document.createElement("h2");r.setAttribute("class","title-program");const a=document.createTextNode(n),c=document.createElement("img");if(c.setAttribute("class","image-program"),c.setAttribute("alt",n),null===s.image){const t="https://via.placeholder.com/210x295/ffffff/666666/?text=TV";c.setAttribute("src",t)}else{const{image:{medium:t}}=s;c.setAttribute("src",t)}r.appendChild(a),l.appendChild(r),l.appendChild(c),listResultEl.appendChild(l)}const e=document.querySelectorAll(".list-li");for(let t=0;t<e.length;t++)e[t].addEventListener("click",s);function s(t){const e=t.currentTarget,s=e.outerText,n=e.lastChild.src;let l={name:s,image:n};if(favoriteProgram.push(l),localStorage.setItem("fav",JSON.stringify(favoriteProgram)),e.classList.toggle("favorite"),e.classList.contains("favorite")){const t=document.createElement("li");t.setAttribute("class","list-li-fav");const e=document.createElement("h2");e.setAttribute("class","title-program-fav");const l=document.createElement("img");l.setAttribute("class","image-program-fav"),l.setAttribute("alt",s),l.setAttribute("src",n);const r=document.createElement("button");r.setAttribute("type","button"),r.setAttribute("class","btn-reset"),e.innerHTML=s,t.appendChild(e),t.appendChild(r),t.appendChild(l),listFavEl.appendChild(t)}}})}function showSearchProgram(){const t=inputSearchEl.value;fetch("http://api.tvmaze.com/search/shows?q="+t).then(t=>t.json()).then(function(t){for(let e=0;e<t.length;e++){const s=t[e],{show:{name:n}}=s,l=document.createElement("li");l.setAttribute("class","list-li");const r=document.createElement("h2");r.setAttribute("class","title-program");const a=document.createTextNode(n),c=document.createElement("img");if(c.setAttribute("class","image-program"),c.setAttribute("alt",n),null===s.show.image){const t="https://via.placeholder.com/210x295/ffffff/666666/?text=TV";c.setAttribute("src",t)}else{const{show:{image:{medium:t}}}=s;c.setAttribute("src",t)}r.appendChild(a),l.appendChild(r),l.appendChild(c),listResultEl.appendChild(l)}const e=document.querySelectorAll(".list-li");for(let t=0;t<e.length;t++)e[t].addEventListener("click",n);const s=[];function n(){const t=event.currentTarget,e=t.outerText,n=t.lastChild.src;let l={name:e,image:n};if(s.push(l),localStorage.setItem("fav",JSON.stringify(s)),t.classList.toggle("favorite"),t.classList.contains("favorite")){const t=document.createElement("li");t.setAttribute("class","list-li-fav");const s=document.createElement("h2");s.setAttribute("class","title-program-fav");const l=document.createElement("img");l.setAttribute("class","image-program-fav"),l.setAttribute("alt",e),l.setAttribute("src",n);const r=document.createElement("button");r.setAttribute("type","button"),r.setAttribute("class","btn-reset"),s.innerHTML=e,t.appendChild(s),t.appendChild(r),t.appendChild(l),listFavEl.appendChild(t)}}})}buttonSearchEl.addEventListener("click",handlerButtonClick);for(let t=0;t<favoriteProgram.length;t++){const e=favoriteProgram[t],{name:s}=e,{image:n}=e,l=document.createElement("li");l.setAttribute("class","list-li-fav");const r=document.createElement("h2");r.setAttribute("class","title-program-fav");const a=document.createElement("img");a.setAttribute("class","image-program-fav"),a.setAttribute("alt",s),a.setAttribute("src",n);const c=document.createElement("button");c.setAttribute("type","button"),c.setAttribute("class","btn-reset"),r.innerHTML=s,l.appendChild(r),l.appendChild(c),l.appendChild(a),listFavEl.appendChild(l)}const btnReset=document.querySelectorAll(".btn-reset");console.log(btnReset);for(let t=0;t<btnReset.length;t++)btnReset[t].addEventListener("click",handlerButtonReset);function handlerButtonReset(t){t.currentTarget.parentElement.remove()}