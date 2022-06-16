// open and close modal
function openModal(){
    var modal = document.getElementById("subscribe-modal");
    modal.classList.add("modal-active");
}

function closeModal(){
    var modal = document.getElementById("subscribe-modal");
    modal.classList.remove("modal-active");
}

// toggle like button
var liked = false;
function toggleLike(element){
    if(!liked){
        element.innerHTML = '<i class="fa fa-thumbs-up"></i><b>Liked</b>';
        liked = true;
    }
    else{
        element.innerHTML = '<i class="fa fa-thumbs-o-up"></i><b>Like</b>';
        liked = false;
    }
}

// toggle comments
function toggleComment(element){
    element.parentNode.nextElementSibling.classList.toggle("comment-active"); 
}
