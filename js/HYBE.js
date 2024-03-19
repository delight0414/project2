window.addEventListener("load", function(){
	let video=this.document.getElementById("main_video");
	video.addEventListener("loadeddata", function(){
		main_video.play();
	});
	video.addEventListener("ended", function(){
		main_video.play();
	});

	let n=0;
	let t=0;
	let topPos=0;

	let gnb=document.getElementById("gnb");
	let gnbList=gnb.firstElementChild.children;

	let mobileGnb=document.getElementById("mobile");
	let mobileGnbList=mobileGnb.firstElementChild.children;

	let sectionList=document.querySelectorAll("section");

	// let pageList=[]; //
	// pageList[0]=document.getElementById("main");

	// for(let i=0; i<sectionList.length; i++){
	// 	pageList.push(sectionList[i]);
	// }

	// console.log(pageList);

	let mobileTab=document.getElementById("tab");
	let mobileMenu=document.getElementById("mobile");
	let body=document.querySelector("body");
	let dim=document.querySelector(".dim");

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
				body.classList.remove("stop-scrolling");
				dim.classList.remove("active");
			}

			if(sec02Swiper){
				sec02Swiper.destroy(false, false);
				sec02Swiper=null;
				document.querySelector(".swiper-wrapper").removeAttribute("style");
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
		let t=window.scrollY;
		if(t < sectionList[1].offsetTop){
			n=0;
		}
		else if(t < sectionList[2].offsetTop){
			n=1;
		}
		else if(t < sectionList[3].offsetTop){
			n=2;
		}
		else if(t < sectionList[4].offsetTop){
			n=3;
		}
		else if(t < sectionList[5].offsetTop){
			n=4;
			if(window.innerHeight+t === document.body.scrollHeight){
                n=5;
            }
		}
		else {
			n=5;
		}

		for(let i=0; i<gnbList.length; i++){
			if(i === n){
				gnbList[i].classList.add("on");
				mobileGnbList[i].classList.add("on");
			}
			else{
				gnbList[i].classList.remove("on");
				mobileGnbList[i].classList.remove("on");
			}
		}

		if(t >= 200){
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

	for(let i=0; i<gnbList.length; i++){
		gnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			n=i;
			topPos=sectionList[n].offsetTop;

			gsap.to(window, {scrollTo: topPos, duration: 0.4});
		});

		mobileGnbList[i].addEventListener("click", function(e){
			e.preventDefault();

			n=i;
			topPos=sectionList[n].offsetTop;

			mobileTab.classList.remove("on");
			gsap.to(mobileMenu, {width:0, duration: 0.1});
			body.classList.remove("stop-scrolling");
			dim.classList.remove("active");

			gsap.to(window, {scrollTo: topPos, delay: 0.4, duration: 0.4});
		});
	}

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
	AOS.init({
		easing: "ease-in-out-sine",
		once: true
	});
});