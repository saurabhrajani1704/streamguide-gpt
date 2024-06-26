{movies.map((movie)=>(
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}