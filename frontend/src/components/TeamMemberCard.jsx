import  "./TeamCard.css"

const  TeamMemberCard = ({title,description}) => {
  return (
    <div className="Card">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default TeamMemberCard


