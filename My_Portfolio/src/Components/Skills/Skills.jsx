import React from 'react'
import skills from '../../data/skills.json'
import { getPhotoUrl } from '../../utils'
import './Skills.css';

export const Skills = () => {
    return (
        <section className='container' id='skills'>
            <h2 className="title">Skills</h2>
            <div className='content'>
                <div className='skills'>{
                    skills.map((skill, id) => {
                        return <div key={id} className='skill'>
                            <div className='skillImgContainer'><img src={getPhotoUrl(skill.imageSrc)} alt={skill.title} className='skillsIcon' /></div>
                            <p>{skill.title}</p>
                        </div>
                    })
                }
                </div>
            </div>

        </section>
    )
}
