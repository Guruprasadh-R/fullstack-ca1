
import TeamMemberCard from './components/TeamMemberCard.jsx'



const cardData = [
  {name:"john Doe" , description:"software engineer"},
  {name:"sibiraj" , description:"product engineer"},
  {name:" celaster philip" , description:"lead engineer"}
]


function App() {
  return (
    <div className='teamCard'>
      <h1>welcome to our page </h1>
      <div className='cardComponents'>
       {cardData.map((card,index)=>(
          <TeamMemberCard key={index} title={card.name} description={card.description}/>
        ))}

     </div>
      
    </div>
  )
}

export default App
