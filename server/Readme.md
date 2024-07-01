Deployed backend Link: https://movie-catalog-app-web.netlify.app/

API CONTRACT:

POST /api/v1/signup

    Creates a new User and returns the new object.

    Data Params:
    {
        email: string,
        password: string
    }

POST /api/v1/login

    Creates a new User and returns the new object.

    Data Params:
    {
        email: string,
        password: string
    }

GET /api/v1/
    
    Returns all users in the system.

    Data Params: 
    None
    
    Content:
    [
        {
            movie_url: string,
            title: string,
            poster: string,
            release_year: number,
            length_in_min: number,
            imdb_rating: number,
            rating_count: number,
            plot: string,
            directors: string,
            writers: string,
            stars: string,
            genres: string
        }
    ]