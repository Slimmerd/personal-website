type TAboutme = {
    heading_text: string,
    desc_text?: string
    arr_desc_text?: Array<string>,
    arr_arr_desc_text?: Array<Array<string>>
}

export const AboutMeInfo: Array<TAboutme> = [
    {
        heading_text: "👨🏻‍💻 About me:",
        desc_text: "My name is Daniil I am a Computer Science student. I am passionate about software development, willing to learn and do what it takes to achieve goals. I have experience in full-stack development. I am currently seeking a Software Engineering Internship. Feel free to reach out to me."
    },
    {
        heading_text: "🔩 Languages:",
        arr_desc_text: ["JavaScript", "TypeScript", "Python", "C#"]
    },
    {
        heading_text: "🧰 Technologies:",
        arr_arr_desc_text: [["React", "Redux", "Next.js", "HTML", "CSS", "Styled-Components"], ["Node.js", "Express", "REST API", "GraphQL"]]
    }
]