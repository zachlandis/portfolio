import React, { useState } from 'react';
import FunFacts from './FunFacts';

function AboutMe() {
    const [homeLife, setHomeLife] = useState(true);
    const [reasonForCareerChange, setReasonForCareerChange] = useState(true);
    const [goals, setGoals] = useState(true);
    const [problemSolving, setProblemSolving] = useState(true);
    const [stayCurrent, setStayCurrent] = useState(true);
    const [funFacts, setFunFacts] = useState(true)

    const getCardClassName = (state) => state ? 'about-zach-card' : 'about-zach-card about-zach-card-top';

    return (
        <div>
            <div>
                <h1>Who is Zach Landis?</h1>
                <p>Click on each card to learn more.</p>
            </div>
            <div className='about-zach-card-container'>
                <div 
                    className={getCardClassName(homeLife)}
                    onClick={() => setHomeLife(!homeLife)}
                >
                    {homeLife ? <p>What is Zach's lifestyle like?</p> : 
                        <p>Zach and his partner are proud parents to two lovely daughters. They enjoy spending their time outdoors and traveling together as a family. During his personal time, Zach enjoys building applications, gardening, and playing FPS video games.</p>
                    }
                </div>
                <div 
                    className={getCardClassName(reasonForCareerChange)}
                    onClick={() => setReasonForCareerChange(!reasonForCareerChange)}
                >
                    {reasonForCareerChange ? <p>Why did Zach decide to change career paths and become a developer?</p> : 
                        <p>Zach's passion for coding was ignited when he embarked on a project to revamp a business through no-code automations, crafting streamlined workflows and enhancing efficiency. This experience left him wanting to dive deeper, leading him to successfully complete a full-stack software engineering bootcamp. Now, Zach is eager step into the next phase of his career in a field that truly excites him.</p>
                    }
                </div>
                <div 
                    className={getCardClassName(goals)}
                    onClick={() => setGoals(!goals)}
                >
                    {goals ? <p>What are Zach's professional goals?</p> : 
                        <p>Zach is seeking a role that challenges him and offers opportunities for advancement within a company that prides itself on a positive culture and values its employees. He aims to find a place where he can deeply engage with his work and build a long-lasting career.</p>
                    }
                </div>
                <div 
                    className={getCardClassName(problemSolving)}
                    onClick={() => setProblemSolving(!problemSolving)}
                >
                    {problemSolving ? <p>How does Zach approach problem-solving in software engineering?</p> : 
                        <p>Zach tackles software development challenges with a systematic approach, breaking down complex problems into manageable parts and leveraging extensive research and community insights. He values teamwork, frequently collaborating with colleagues to explore diverse solutions. Embracing an iterative process, Zach refines solutions through continuous testing and feedback, ensuring efficiency and effectiveness. His problem-solving strategy is defined by analytical thinking, a collaborative spirit, and a commitment to ongoing improvement, viewing each challenge as a growth opportunity.</p>
                    }
                </div>
                <div 
                    className={getCardClassName(stayCurrent)}
                    onClick={() => setStayCurrent(!stayCurrent)}
                >
                    {stayCurrent ? <p>How does Zach stay current with technology trends and continue learning in the field of software development?</p> : 
                        <p>Zach stays current with technology trends through a combination of online learning, engaging with developer communities, and hands-on projects. He regularly explores new courses, participates in forums, reads tech blogs, and contributes to open-source projects. This approach not only keeps him informed about the latest developments but also allows him to apply new knowledge in practical settings, ensuring continuous professional growth.</p>
                    }
                </div>
                <div 
                    className={getCardClassName(funFacts)}
                    onClick={() => setFunFacts(!funFacts)}
                >
                    {funFacts ? <p>What innovative technology or trend excites Zach the most about the future of software development, and how does he plan to be involved with it?</p> : 
                    <p>Zach is particularly enthusiastic about the potential of Artificial Intelligence (AI) and its capacity to revolutionize workflows. His passion lies in designing automated systems that enhance productivity even during off-hours, and the integration of AI has significantly elevated these systems' capabilities. By harnessing AI, Zach aims to innovate and streamline operations, making them not only more efficient but also more intelligent. He plans to stay at the forefront of this trend by continually experimenting with AI technologies in his projects, staying updated with the latest advancements, and actively contributing to AI-driven initiatives. This commitment not only reflects his ambition to lead in the application of AI within software development but also his dedication to exploring how AI can redefine the future of work.</p>
                    }
                </div>
                <FunFacts />
            </div>
        </div>
    );
}

export default AboutMe;
