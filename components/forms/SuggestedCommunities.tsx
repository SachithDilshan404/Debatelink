import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchCommunities } from "@/lib/actions/community.actions";
import CommunityCard from "@/components/cards/CommunityCard";
import CommunityArea from "../cards/CommunityArea";

async function SuggestedCommunities() {

    

    //Fetch Communities
    const result = await fetchCommunities({
        searchString: '',
        pageNumber: 1,
        pageSize: 20
    })
    
    return (
        <section className="head-text mb-10">
        {/*Search bar*/}
        <div className="mt-14 flex flex-col gap-9">
            {result.communities.length === 0 ? (
                <p className="no-result">No communities</p>
            ): (
                <>
                {result.communities.map((community) => (
                    <CommunityArea
                    key={community.id}
                    id={community.id}
                    name={community.name}
                    username={community.username}
                    imgUrl={community.image}
                    
                    />
                ))}
                </>
            )}
        </div>
        </section>

        
    )
}

export default SuggestedCommunities;
