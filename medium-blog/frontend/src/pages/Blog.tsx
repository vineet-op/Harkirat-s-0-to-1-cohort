import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {

    const { id } = useParams()
    const { Loading, blog } = useBlog({
        id: id || ""
    });
    if (Loading || !blog) {
        return <div className="flex flex-col justify-center">
            <div>
                <Appbar />
            </div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />


        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}