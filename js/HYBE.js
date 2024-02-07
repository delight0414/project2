window.addEventListener("load", function(){
	let mobileTab=document.getElementById("tab");
	let mobileMenu=document.getElementById("mobile");
	let body=document.querySelector("body");
	let dim=document.querySelector(".dim");

	let video=this.document.getElementById("main_video");
	video.addEventListener("loadeddata", function(){
		main_video.play();
	});
	video.addEventListener("ended", function(){
		main_video.play();
	});


	mobileTab.addEventListener("click", function(e){
		e.preventDefault();

		if(!e.currentTarget.classList.contains("on")){
			e.currentTarget.classList.add("on");  
			gsap.fromTo(mobileMenu, {display:"block", width:0}, {width:"50%", duration: 0.1});
			// body.classList.add("fixed");
			body.classList.add("stop-scrolling");
			dim.classList.add("active");
		}
		else {
			e.currentTarget.classList.remove("on");  
			gsap.to(mobileMenu, {width:0, duration: 0.1});
			// body.classList.remove("fixed");
			body.classList.remove("stop-scrolling");
			dim.classList.remove("active");
		}
	});

	let topBtn=document.querySelector(".top_btn");
	let sec02Swiper;

	function resizeTrigger(){
		let winw=window.innerWidth;

		if(winw >= 720){
			if(body.classList.contains("fixed")){
				mobileTab.classList.remove("on");
				gsap.to(mobileMenu, {width:0, duration: 0.1});
				body.classList.remove("fixed");
				dim.classList.remove("active");
			}

			if(sec02Swiper){
				sec02Swiper.destroy(false, false);
				sec02Swiper=null;
			}
		}
		else{
			if(!sec02Swiper){
				sec02Swiper=new Swiper(".sec02_swiper", {
					slidesPerView: 'auto',
					initialSlide : 0,
					observer: true,
					observeParents: true,
					loop:true,
					on: {
						destroy: function(){
							sec02Swiper.slideToLoop(0);
						}
					}
				});
			}
		}
	}

	function scrollTrigger(){
		let winh=window.pageYOffset;
		if(winh >= 200){
			topBtn.style.display="block";
		}
		else{
			topBtn.style.display="none";
		}
	}

	resizeTrigger();
	scrollTrigger();

	window.addEventListener("resize", resizeTrigger);
	window.addEventListener("scroll", scrollTrigger);

	topBtn.addEventListener("click", function(e){
		e.preventDefault();
		gsap.to(window, {scrollTo:0, duration: 0.3});
	});

	let privacy=document.querySelector("#footer .inner > ul > li:first-child");
	let privacy2Depth=privacy.children[1];

	privacy.addEventListener("click", function(e){
		e.preventDefault();

		if(privacy2Depth.style.display === "block"){
			gsap.to(privacy2Depth, {opacity: 0, duration: 0.3, onComplete: function(){
				privacy2Depth.removeAttribute("style");
			}});
		}
		else {
			gsap.fromTo(privacy2Depth, {display:"block", opacity: 0}, {opacity: 1, duration: 0.2});
		}
	});
});