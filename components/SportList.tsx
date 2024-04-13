import {teamTagFactory} from "@/src/models/TeamTagModel";
import SportTeams from "@/components/SportTeams";


export default async function SportList() {
    const teamTags = await teamTagFactory().index()

    console.log("teams: ", teamTags)

    const components = teamTags.map((teamTag) => {
        return (
            <SportTeams
                key={teamTag.id}
                tag={teamTag}
            />
        )
    })

    return (
        <>
            {components}
        </>
    )
}