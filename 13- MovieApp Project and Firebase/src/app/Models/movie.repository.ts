import { Movie } from "./movie";

export class MovieRepository{
    private movies : Movie[];

    constructor() {
        this.movies = [
            { id: 1 ,title: "Apollo 11", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet.", imageUrl:"1.jpeg",isPopular:true, publishedDate: new Date(2010,10.10)},
            { id: 2 ,title: "Berserk", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet.", imageUrl:"3.jpeg",isPopular:true, publishedDate: new Date(2000,10.10)},
            { id: 3 ,title: "Godzilla", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet.", imageUrl:"4.jpeg",isPopular:false, publishedDate: new Date(2012,10.10)},
            { id: 4 ,title: "X-Men", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet.", imageUrl:"2.jpeg",isPopular:false, publishedDate: new Date(2013,10.10)},
            { id: 5 ,title: "Kill Bill", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis possimus sint velit, odit itaque saepe suscipit animi quae porro, consectetur veniam fugit aut. Possimus nulla dolor dolore ex amet.", imageUrl:"5.jpeg",isPopular:true, publishedDate: new Date(2015,10.10)},
        ];
    }

    getAllMovies():Movie[]{
        return this.movies;
    }

    getPopulerMovies():Movie[]{
        return this.movies.filter(x=>x.isPopular);
    }

    getMovieById(id:number) :Movie | undefined {
        return this.movies.find(x=>x.id==id);
    }
}