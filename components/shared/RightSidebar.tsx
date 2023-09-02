import SuggestedCommunities from "../forms/SuggestedCommunities";
import SuggestedUsers from "../forms/SuggestedUsers";

function RightSidebar() {
    return (
        <section className="custom-scrollbar rightsidebar">
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Suggested Communities</h3>
                <div className="custom-scrollbar">
                    <SuggestedCommunities/>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
                <div className="custom-scrollbar">               
                    <SuggestedUsers/>
                </div> 
                
            </div>
        </section>
    )
}

export default RightSidebar;