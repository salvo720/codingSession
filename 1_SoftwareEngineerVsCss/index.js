// (function test(){})() JS syntax autocall function

(function deleteCssBlurImage(){
	const blurImages = document.querySelectorAll("div[style*='backdrop-filter: blur(19px) saturate(160%);']");
	blurImages.forEach((el)=>{
		el.style="position: absolute; left: 0px; top: 0px; width: 230px; height: 345px;" 
		el.classList = ""
	});
	setTimeout(()=>{ deleteCssBlurImage()},5000);
})()