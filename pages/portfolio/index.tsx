import React from 'react'
import {Container, Heading, Tag} from "@chakra-ui/react";
import ProjectCard from "../../components/portfolio/projectCard";

const PortfolioPage = () => {

    return (
        <Container>
            <Heading as={'h2'} mb={4}>My projects</Heading>

            <ProjectCard heading={"RI0FF Expedition website"}
                         delay={0.1}
                         status={<>
                             <Tag colorScheme={"teal"} variant='solid'>Finished</Tag>
                             <Tag variant='solid'>In production</Tag>
                         </>}
                         paragraph={"Created a full-stack bilingual website about the expedition with the dashboard where\n" +
                             "                    administrators can publish and manage a blog, photos and moderate chat messages"}
                         sourceLink={"https://github.com/Slimmerd/RI0Fwebsite"}
                         resultLink={"https://ri0ff.com/"}/>

            <ProjectCard heading={"Amateur radio club website"}
                         delay={0.2}
                         status={<>
                             <Tag colorScheme={"teal"} variant='solid'>Finished</Tag>
                             <Tag variant='solid' colorScheme={"red"}>Not published</Tag>
                         </>}
                         paragraph={"Developed website for Amateur Radio club with server-side rendering and advanced website managing system"}
                         sourceLink={"https://github.com/Slimmerd/hamradio-website"}
                         sourceDisabled={true}
            />

            <ProjectCard heading={"Habit and todo tracker"}
                         delay={0.3}
                         status={<>
                             <Tag colorScheme={"teal"} variant='solid'>Finished</Tag>
                         </>}
                         paragraph={"Developed mobile app for tracking habits and todos"}
                         sourceLink={"https://github.com/Slimmerd/habit_tracker"}
            />


            <ProjectCard heading={"Discord bot"}
                         delay={0.4}
                         status={<>
                             <Tag colorScheme={"teal"} variant='solid'>Finished</Tag>
                             <Tag variant='solid'>In production</Tag>
                         </>}
                         paragraph={"Implemented Discord bot with moderation features and auto-role management tool. New people who joined the server don’t need to wait for the admin to obtain a role. A person can start a vote, and people with chosen a role can approve or decline this request"}
                         sourceLink={"https://github.com/Slimmerd/DiscordBotJS"}
            />

            <ProjectCard heading={"Runner game"}
                         delay={0.5}
                         status={<>
                             <Tag colorScheme={"teal"} variant='solid'>Finished</Tag>
                         </>}
                         paragraph={"Game with endless level generation and memory usage optimisation"}
                         sourceLink={"https://github.com/Slimmerd/Hardle-Conqueror"}
            />
        </Container>
    )
}

export default PortfolioPage