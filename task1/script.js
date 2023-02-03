//1. Grab the input value and print it

const getInput = (a) => {
   let input = document.getElementById("input").value;
    console.log(input);
    getName(input);
};

document.querySelector(".input-search").addEventListener("keyup", (e) => {
    let input = document.querySelector("input").value;
    // If the key ENTER is pressed....
    if (e.which === 13) {
        getName(input);
    }
});

// Interacting with the Giphy API
const getName = (item) => {
    const query = item.split(" ").join("+");

    //2. Do the data stuff with API
    const url =
        "https://api.giphy.com/v1/gifs/search?q=" +
        query +
        "&api_key=b11HdOMgaljN360FcyhSLpDQ4plP203S&limit=5";

    // AJAX Request
    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", (e) => {
        const data = e.target.response;
        pushToDom(data);
    });
};

//3. Show the GIF's
const pushToDom = (input) => {
    const response = JSON.parse(input);

    const container = document.querySelector(".js-container");

    const result = document.querySelector(".results");


    const imageUrls = response.data;

    imageUrls.forEach((image) => {
        const src = image.images.fixed_height.url;

        result.innerHTML = src.length + "gifs found";
        container.innerHTML += '<img src="' + src + "\" class='container-image'>";
    });

    const clear = (item) => {
        item.innerHTML = "";
    };
};