var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var thumbnails;
function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
//function addThumbClickHandler(thumb) {
//  'use strict';

/*alert(thumb);
  /*thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);});*/
//thumb.addEventListener('click', function mismatchThumbs(){
//'use strict';
//var thumbindex = thumbnails.indexOf(thumb);
//var randthumb = thumbnails[Math.floor(Math.random()*thumbnails.length)];
//var randthumbindex=thumbnails.indexOf(randthumb);
//event.preventDefault();
//if(thumbindex!=randthumbindex){
//setDetailsFromThumb(randthumb);
//thumb.addEventListener('click',function reset(){
//  event.preventDefault();
//  setDetailsFromThumb(thumb);
//});
//}else{
//mismatchThumbs();
//}
//resetThumb();
//});//{
//var randthumb=thumbnails[Math.floor(Math.random()*thumbnails.length)];
//event.preventDefault();
//setDetailsFromThumb(randthumb);
//});
//}
function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(e) {
        e.preventDefault();
        mismatchThumbs(thumb);
        //alert(randthumb);
    });
    // {
    //  event.preventDefault();
    //  setDetailsFromThumb(thumb);
    //});
}

function mismatchThumbs(thumb) {
    var thumbindex = thumbnails.indexOf(thumb);
    var randthumb = thumbnails[Math.floor(Math.random() * thumbnails.length)];
    var randthumbindex = thumbnails.indexOf(randthumb);
    if (thumbindex != randthumbindex) {
        setDetailsFromThumb(randthumb);
      }
      else {
        mismatchThumbs(thumb);
    }
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}
resetThumb();
initializeEvents();


/* Mismatch and Reset*/


function resetThumb() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(reset);
}


function reset(thumb) {
    'use strict';
    //var img = document.getElementByClassName('thumbnail-img');
    var thumb_img = thumb.querySelector('.thumbnail-img');
    var src = thumb_img.getAttribute('src');
    thumb.setAttribute('data-image-url', src);
}
//function reset(thumb){
//  thumbnails = getThumbnailsArray();
//  thumbnails.forEach(setDetailsFromThumb(thumb));
//}
