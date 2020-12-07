let previewSection = document.getElementsByClassName("preview-section").item(0);
let previewPic = document.getElementById("preview-pic");

document.getElementById("preview-pic").addEventListener("click", hidePreviewSection);

function imageClicked(imageDiv) {
    console.log("this was clicked"+imageDiv.src);
    previewSection.style.transform = "scale(1)";
    previewPic.src = imageDiv.src;
}

function hidePreviewSection() {
    console.log("hiding preview section");
    previewSection.style.transform = "scale(0)";
}

// function previewSectionSetActive(activeState) {
//     if (activeState) {
//         previewSection.hidden = false;
//     }
// }

