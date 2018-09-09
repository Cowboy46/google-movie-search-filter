//TODO: use min movie rating from options and api call for each movie to remove appropriate ones

const movieList = $(".MiPcId.mlo-c")

if (movieList.length > 0){
    movieList[0].style.display = "none";
}
else {
    console.log("Couldn't find any google movie results...");
}
