import ProfileHeader from "@/components/shared/ProfileHeader";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { profileTabs } from "@/constants";
import Image from "next/image";
import ThreadsTab from "@/components/shared/ThreadsTab";
import UserCard from "@/components/cards/UserCard";
import { fetchCommunities } from "@/lib/actions/community.actions";
import CommunityCard from "@/components/cards/CommunityCard";

async function Page() {

    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(user.id);

    //Fetch Communities
    const result = await fetchCommunities({
        searchString: '',
        pageNumber: 1,
        pageSize: 25
    })
    if(!userInfo?.onboarded) redirect('/onboarding');
    return (
        <section className="head-text mb-10">Search
        {/*Search bar*/}
        <div className="mt-14 flex flex-col gap-9">
            {result.communities.length === 0 ? (
                <p className="no-result">No communities</p>
            ): (
                <>
                {result.communities.map((community) => (
                    <CommunityCard
                    key={community.id}
                    id={community.id}
                    name={community.name}
                    username={community.username}
                    imgUrl={community.image}
                    bio={community.bio}
                    members={community.members}
                    />
                ))}
                </>
            )}
        </div>
        </section>

        
    )
}

export default Page;
