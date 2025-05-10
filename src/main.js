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

    const highlightMovie=document.querySelector(".highlight-img");
    const highlightMovieTitle=document.querySelector(".highlight-tittle");
    const highlightMoviePopularity=document.querySelector(".raiting");
    const highlightMovieOverview=document.querySelector(".highlight-description");

    highlightMovie.setAttribute("src","https://image.tmdb.org/t/p/original"+movies[0].poster_path);
    highlightMovieTitle.textContent=movies[0].title;
    highlightMoviePopularity.textContent=movies[0].vote_average;
    highlightMovieOverview.textContent=movies[0].overview;
    
    movies.slice(1).forEach(movie => {
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

async function getCategoriesMoviesPreview(){
    const res=await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    const data=await res.json();

    const categories=data.genres;
    
    categories.forEach(categorie => {
        const CategoriesListPreview=document.querySelector(".categories-list")
        const categoriesItem=document.createElement("span");
        categoriesItem.classList.add("categories-item");

        categoriesItem.innerHTML=categorie.name;
    
        CategoriesListPreview.appendChild(categoriesItem);
    });

    
}

async function getPlayingMoviesPreview(){
    const res=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const data=await res.json();

    const movies=data.results;
    
    movies.forEach(movie => {
        const playingPreviewMoviesContainer=document.querySelector(".playing-section .playing-movie-list")
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
        playingPreviewMoviesContainer.appendChild(movieCard);
    });

    
}

async function getUpcomingMoviesPreview(){
    const res=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const data=await res.json();

    const movies=data.results;
    
    movies.forEach(movie => {
        const upcomingPreviewMoviesContainer=document.querySelector(".upcoming-section .upcoming-movie-list")
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
        upcomingPreviewMoviesContainer.appendChild(movieCard);
    });

    
}

getTrendingMoviesPreview();
getCategoriesMoviesPreview();
getUpcomingMoviesPreview();
getPlayingMoviesPreview();