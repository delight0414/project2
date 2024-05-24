## 🚩Project - HYBE

#### 📰 Intro 
HTML, SCSS, Javascript로 개발한 개인프로젝트입니다. GSAP Scrolltrigger를 사용하여 네비게이션 클릭했을 때 해당 섹션으로 넘어가는 UI를 구현하였습니다. Swiper.js에서 destroy()라는 함수를 사용해 특정 해상도에서만 작동되도록 했습니다. 
##
#### 👩‍💻 Stack 
<div>
  <img src="https://img.shields.io/badge/html-e34f26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
</div>
<div>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</div>
<div>
  <img src="https://img.shields.io/badge/gsap-0AE448?style=for-the-badge&logo=gsap&logoColor=white">
  <img src="https://img.shields.io/badge/swiper.js-6332F6?style=for-the-badge&logo=aos&logoColor=white">
  <img src="https://img.shields.io/badge/aos-1FA2ED?style=for-the-badge&logo=aos&logoColor=white">
</div>

##
#### 💻 Code review
🔸 해상도 720px 미만일 경우 Swiper가 작동되게 했다.
```javascript
function resizeTrigger(){
  let winw=window.innerWidth;

  if(winw >= 720){
// 해상도가 720 이상인데 swiper가 돌고 있다면 작동 멈추기
    if(sec02Swiper){
      sec02Swiper.destroy(false, true);
      // 첫번째 params는 Swiper를 삭제할지 말지 false로 설정하면 슬라이더가 유지됨
      // 두번째 params는 슬라이더에 적용된 스타일을 삭제할지 말지 true로 설정하면 스타일 제거됨
      sec02Swiper=null;
    }
  }
  else{
// 해상도가 720 미만 인데 swiper가 돌고 있지 않다면 작동 시작하기
    if(!sec02Swiper){
      sec02Swiper=new Swiper(".sec02_swiper", {
        .
        .
        .
```
