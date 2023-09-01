"use client"

import { addLikeTothread } from "@/lib/actions/thread.actions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LikeThread = ({
    likes,
    threadId,
    userId
}:{
    likes:Array<any>,
    threadId: string,
    userId: string
}) => {
    const pathname= usePathname()

    const currentUserLiked= likes.includes(userId);
    
    return (
        <>
            <div onClick={async () => {
                await addLikeTothread(threadId,userId,pathname)
            }}>
                <Image
                    src={
                        currentUserLiked ? '/assets/heart-filled.svg': '/assets/heart-gray.svg'
                    }
                    alt='heart'
                    width={24}
                    height={24}
                    className='cursor-pointer object-contain'

                />
            </div>
            <p className="mt-1 text-subtle-medium text-gray-1">
                {likes.length}
            </p>
        </>
    )
}

export default LikeThread;