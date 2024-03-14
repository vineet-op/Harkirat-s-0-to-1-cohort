import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 29 April 2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 font-medium">
                        Author
                    </div>
                    <div>
                        <div className="flex">
                            <div className="pr-5 flex flex-col justify-center">
                                <Avatar name={blog.author.name || "Anonymous"} />
                            </div>
                            <div className="mt-8">
                                <div className="text-xl font-bold ">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    random catch phrase to catch user attention
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div >
}