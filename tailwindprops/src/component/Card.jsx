import React from "react";

function Card({username, post, myNum}) {

    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-10" >
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1618939404235-8747e5c37089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2dyYW1lcnxlbnwwfHwwfHx8MA%3D%3D" alt="" width="384" height="512"/>
            <div className="pt-6 text-center space-y-4">
                <blockquote>
                    {myNum}
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, tempora!
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    {username}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    {post}
                </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card