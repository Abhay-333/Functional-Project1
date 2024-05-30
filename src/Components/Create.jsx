import React, { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState();

    return (
        <form className="flex items-center flex-col p-[5%] w-screen h-screen">
            <h1 className="text-[3vw] w-[50%]">Add New Product</h1>
            <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                className="mb-5 bg-zinc-200 px-3 py-2 rounded-lg text-[1.5vw] w-[50%]"
            />
        </form>
    );
};

export default Create;
