const dialog = document.getElementById("rsvp_pop")
const wrapper = document.querySelector(".wrapper")
function showRSVPDialog(){
    dialog.showModal()
}
function closeRSVPDialog(){
    dialog.close()
}

dialog.addEventListener("click", (e) => {
    if(!wrapper.contains(e.target)){
        dialog.close()
    }
})
