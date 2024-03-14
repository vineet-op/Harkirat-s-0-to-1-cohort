import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/BlogSkeleton"

export const Blogs = () => {
    const { Loading, Blogs } = useBlogs();

    if (Loading) {

        return <div>
            <div>
                <Appbar />
            </div>
            <div>
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />

            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="m-5">
                {
                    Blogs.map(blog => (
                        <BlogCard
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"29 April 2003"}
                        />
                    ))
                }

            </div>
        </div>
    </div>
}