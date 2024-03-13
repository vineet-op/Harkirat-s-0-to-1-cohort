import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {

    return <div className="flex justify-center">
        <div className="max-w-xl m-5">
            <BlogCard
                authorName={"Vineet"}
                title={"title"}
                content={"Content blog"}
                publishedDate={"29 April 2003"}
            />
            <BlogCard
                authorName={"Vineet"}
                title={"title"}
                content={"Content blog"}
                publishedDate={"29 April 2003"}
            /> <BlogCard
                authorName={"Vineet"}
                title={"title"}
                content={"Content blog"}
                publishedDate={"29 April 2003"}
            /> <BlogCard
                authorName={"Vineet"}
                title={"title"}
                content={"Content blog"}
                publishedDate={"29 April 2003"}
            />
        </div>
    </div>
}