import dayjs from "dayjs"

export const PostDate = (postDate)=>{
    const monthArray = ['janeiro','fevereiro','abril','março','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    const monthIndex = new Date(postDate).getUTCMonth();
    const day = dayjs(postDate).format("DD") 
    const month = monthArray[monthIndex]
    const year = dayjs(postDate).format("YYYY") 
    const formattedDate = `${day} de ${month} de ${year}`
    return(formattedDate)
}
