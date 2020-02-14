import React from "react";
import SkillCard from './SkillCard/SkillCard';
import skills from '../JSON/skills.json';

function AllSkills() {
    return (
        skills.map(skl => {
            return (
                    <SkillCard
                        skill={skl.skillName}
                        img={skl.img}
                    />
            )
        })
    )
}
    
export default AllSkills;