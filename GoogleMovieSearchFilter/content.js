const movieList = $(".MiPcId.mlo-c");

if (movieList.length > 0){
    for (let i = 0; i < movieList.length; i++){
        const title = movieList[i].childNodes[0].getAttribute("aria-label");

        //TODO change below conditional to whether API call for iMDB movie rating returns lower rating than acceptable
        if (title == "Moana" || title == "The Lion King"){
            movieList[i].style.display = "none";
        }
    }
}
else {
    console.log("Couldn't find any google movie results...");
}
