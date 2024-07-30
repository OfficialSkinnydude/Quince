function showRSVPDialog() {
    dialog.style.opacity = 1;
    dialog.style.pointerEvents = "auto";
    dialog.showModal(); // Show the dialog (optional)
}

function closeRSVPDialog() {
    dialog.style.opacity = 0;
    dialog.style.pointerEvents = "none";
    dialog.close(); // Close the dialog (optional)
}
