import axios from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate()

    return (<div className="flex justify-center items-center min-h-screen">
        <div className="max-w-lg w-full px-4 py-8 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
            <div className="mb-4">
                <label htmlFor="title" className="block mb-1 font-semibold">Title:</label>
                <input
                    onChange={(e) => { setTitle(e.target.value) }}
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter title..."
                />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block mb-1 font-semibold">Content:</label>
                <textarea
                    onChange={(e) => { setDescription(e.target.value) }}
                    id="content"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter blog content..."
                    rows={5}
                />
            </div>
            <div>
                <button
                    onClick={async () => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title,
                            content: description
                        }, {
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        })
                        navigate(`/blog/${response.data.id}`)
                    }}
                    className="bg-green-400 text-white px-4 py-2 rounded"
                >
                    Publish
                </button>
            </div>
        </div>
    </div>
    )

}