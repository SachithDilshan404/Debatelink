"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  
}

function CommunityArea({ id, name, username, imgUrl }: Props) {
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
                    className="rounded-full "
                    
                    />
                </div>
                
                <div className="flex-1 text-ellipsis">
                    <h4 className="text-base-semibold text-light-1" >{name}</h4>
                    <p className="text-small-medium text-gray-1">@{username}</p>
                </div>
            </div>
           
        </article>
  );
}

export default CommunityArea;