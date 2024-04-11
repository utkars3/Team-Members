import TeamMemberCard from './TeamMemberCard'
const TeamMembers=({employees,selectedTeam,handleEmployeeCardClick})=>{
  return (
    employees.map((employee) => (
      <TeamMemberCard key={employee.id} employee={employee} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick}></TeamMemberCard>
    ))
  )
}
export default TeamMembers