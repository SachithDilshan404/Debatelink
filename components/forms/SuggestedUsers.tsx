import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import UserArea from "../cards/UserArea";

async function SuggestedUsers() {

    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(user.id);

    //Fetch users
    const result = await fetchUsers({
        userId: user.id,
        pageNumber: 1,
        pageSize: 20
        
    })
    
    return (
        <section className="head-text mb-10">
      
        <div className="mt-14 flex flex-col gap-9">
            {result.users.length === 0 ? (
                <p className="no-result">No Users</p>
            ): (
                <>
                {result.users.map((person) => (
                    <UserArea
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    username={person.username}
                    imgUrl={person.image}
                    personType='User'
                    />
                ))}
                </>
            )}
        </div>
        </section>

        
    )
}

export default SuggestedUsers;