import {teamTagFactory} from "@/src/models/TeamTagModel";
import SportTeams from "@/components/SportTeams";


export default async function SportList() {
    const teamTags = await teamTagFactory().index()

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