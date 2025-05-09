const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: Authorization,
    }
};

async function getTrendingMoviesPreview(){
    const res=await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    const data=await res.json();

    const movies=data.results;
    
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer=document.querySelector(".trending-section .trending-movie-list")
        const movieCard=document.createElement("div");
        movieCard.classList.add("movie-card");
        
        const movieImg=document.createElement("img");
        movieImg.classList.add("movie-card-img");
        movieImg.setAttribute("alt",movie.title);
        movieImg.setAttribute("src","https://image.tmdb.org/t/p/w300"+movie.poster_path);

        const movieTitle=document.createElement("h4");
        movieTitle.classList.add("movie-card-title");
        movieTitle.textContent=movie.title;
    

        movieCard.appendChild(movieImg);
        movieCard.appendChild(movieTitle);
        trendingPreviewMoviesContainer.appendChild(movieCard);
    });

    
}

getTrendingMoviesPreview()