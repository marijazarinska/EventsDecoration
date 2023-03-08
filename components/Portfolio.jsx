import React from "react";
import Image from "next/image";

const Portfolio = () => {
    return(
        <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-2xl">Work with love</h1>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                    <Image src='https://images.unsplash.com/photo-1608825154649-2e9bb4cd4211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='/' width='477' height='251'  />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1521886580989-e18b74350ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="/" width='215' height='217' layout="responsive" objectFit="cover"/>
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1487530903081-59e0e3331512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="/" width='215' height='217' layout="responsive" objectFit="cover"/>
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="/" width='215' height='217' layout="responsive" objectFit="cover"/>
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1473973916745-60839aebf06b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="/" width='215' height='217' layout="responsive" objectFit="cover"/>
                </div>
            </div>
        </div>
    )
}
export default Portfolio