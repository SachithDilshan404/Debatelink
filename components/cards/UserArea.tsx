"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

interface Props {
    id: string;
    name: string;
    username: string;
    imgUrl: string;
    personType: string;
}

const UserArea = ({
    id,
    name,
    username,
    imgUrl,
    personType
}: Props) => {
    const router = useRouter();
    return (
        <article className="user-card">
            <div className="user-card_avatar">
                <div className="relative h-12 w-12">
                    <Image
                    src={imgUrl}
                    alt="logo"
                    width={48}
                    height={48}
                    className="rounded-full cursor-pointer"
                    onClick={() => router.push(`/profile/${id}`)}
                    />
                </div>
                
                <div className="flex-1 text-ellipsis">
                    <h4 className="text-base-semibold text-light-1" >{name}</h4>
                    <p className="text-small-medium text-gray-1">@{username}</p>
                </div>
            </div>
           
        </article>
    )
}

export default UserArea;