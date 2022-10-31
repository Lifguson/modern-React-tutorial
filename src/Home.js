import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

 /* the second argument of useEffect is a dependency array [] which dictates when it should re-render*/

return ( 
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" /> */}
    </div>
    );
}
 
export default Home;