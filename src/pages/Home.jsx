import React from "react";
import "./Home.css";
import "./Footer.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { fetchMovies } from "./tmdb";



export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await fetchMovies();
            setMovies(data);
        };
        loadMovies();
    }, []);

    return (<>

        <Navbar />
        <div className="home">
            <div className="hero">
                <div className="hero-content">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <div className="hero-buttons">
                        <button className="btn"> Watch Now</button>
                        <button className="btn btn-outline">My list</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <h2>Trending Now</h2>
                <div className="movie-row">
                    {movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            <p>{movie.title}</p>
                        </div>
                    ))}
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                    <div className="movie-card"></div>
                </div>
            </div>

            <div className="row-2">
                <h2>More Reasons to Register</h2>
                <div className="reason-row">
                    <div className="reason-card"><h1>Enjoy on your Tv</h1>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p> </div>
                    <div className="reason-card"><h1>Enjoy on your Tv</h1>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p> </div>
                    <div className="reason-card"><h1>Enjoy on your Tv</h1>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p> </div>
                    <div className="reason-card"><h1>Enjoy on your Tv</h1>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p> </div>
                </div>
            </div>


            <Footer />
        </div>
    </>
    )
}