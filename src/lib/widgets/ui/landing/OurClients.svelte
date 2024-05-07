<script>
	// import { logos } from '$lib/shared';
</script>

<div class='wrap'>
<article class="gallery w-full px-20">
  <a href='/' target='_blank'>
<img src="" />
  </a>
  <blockquote class="quote spacer">
    <span>Without music, life would be a mistake.</span>
    <cite>&mdash;Friedrich Nietzsche</cite>
  </blockquote>
  <img src="https://assets.codepen.io/1506195/unsplash-music-1.avif" alt="duo singing" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-2.avif" alt="crowd cheering" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-3.avif" alt="singer performing" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-4.avif" alt="singer fistbumping crowd" />
  <div class="spacer"></div>
  <img src="https://assets.codepen.io/1506195/unsplash-music-5.avif" alt="crowd cheering" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-6.avif" alt="crowd in a concert" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-7.avif" alt="woman singing" />
  <div class="spacer"></div>
  <div class="spacer"></div>
  <img src="https://assets.codepen.io/1506195/unsplash-music-13.avif" alt="Person playing a cello" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-11.avif" alt="Kiss playing" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-9.avif" alt="young man singing" />
  <div class="spacer"></div>
  <img src="https://assets.codepen.io/1506195/unsplash-music-10.avif" alt="woman singing" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-12.avif" alt="man playing drums" />
</article>


</div>


<style> 
 .wrap {
	 margin: 0;
	 min-height: 100vh;
	 display: grid;
	 place-items: center;
}
 .gallery {
	 display: grid;
	 grid-template-columns: repeat(4, 1fr);
	 grid-auto-rows: 100px;
	 gap: 0px 20px;
	 /* width: clamp(70vmin, 900px, 90%); */
}
 .gallery:has(img:hover) img:not(:hover) {
	 filter: brightness(0.35);
}
 .gallery img {
	 object-fit: cover;
	 width: 100%;
	 height: 100%;
	 clip-path: polygon(0 20px, 100% 0, 100% calc(100% - 20px), 0 100%);
	 transition: clip-path 0.5s, transform 0.5s, filter 0.75s;
	 transform: scale(1);
}
 .gallery img:nth-child(3n):not(:nth-last-child(-n + 4)) {
	 grid-row: span 2;
}
 .gallery img:nth-child(14n):not(:nth-last-child(-n + 4)) {
	 grid-row: span 2;
}
 .gallery img:hover {
	 transform: scale(1.3);
	 z-index: 1;
	 width: 100%;
	 aheight: auto;
	 aaspect-ratio: 1;
	 clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	 transition: clip-path 0.5s, transform 0.5s, filter 0.5s;
}
 .gallery .spacer {
	 background: #c00;
	 clip-path: polygon(0 20px, 100% 0, 100% calc(100% - 20px), 0 100%);
	 box-sizing: border-box;
}
 .gallery .quote {
	 grid-row: span 3;
	 margin: 0;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	 padding: 20px;
	 color: #eee;
	 font-family: Montserrat;
	 font-size: 0.9em;
}
 .gallery .quote span {
	 text-wrap: balance;
	 margin: 0 auto 15px auto;
	 max-width: 80%;
	 line-height: 1.5;
}
 .gallery .quote span::before {
	 content: '"';
	 font-size: 4em;
	 font-family: Georgia, "Palatino Linotype", "Times New Roman", serif;
	 vertical-align: middle;
	 line-height: 0;
	 color: #fff 8;
}
 @media all and (max-width: 700px) {
	 .gallery {
		 grid-template-columns: repeat(3, 1fr);
	}
}
 @media all and (max-width: 500px) {
	 .gallery {
		 grid-template-columns: repeat(2, 1fr);
	}
}
 @media all and (max-width: 400px) {
	 .gallery {
		 grid-template-columns: repeat(1, 1fr);
	}
}
 

</style> 
