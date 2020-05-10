const IMAGES = document.querySelectorAll("img"); //array of all images
const SIZES = {  //organizes image size by data type to provide easy accessibility
    showcase = "100vw",
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px", 
    story: "(max-width: 799px) 100vw, 670px",
};

function makeSrcset(imgSrc) {
    let markup = []; //set for different sized versions of same image
    let width = 400; //image size

    for(let i = 0; i<5; i++) { //runs 5 times for 5 different image types
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width += 400;
    }

    return markup.join(); //returns comma separated list
}

for(let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");//obtains source of all images
    imgSrc = imgSrc.slice(0, -8); //can now customize image size
    let srcset = makeSrcset(imgSrc);
    IMAGES[i].setAttribute("srcset", srcset); //creates attribute representing source set of possible versions
    console.log(imgSrc);

    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type]; //obtains the correct size based on data-type in SIZES
    IMAGES[i].setAttribute("sizes", sizes); //creates attribute representing size specifications

}