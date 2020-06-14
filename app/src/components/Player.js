import React from 'react'


const Player = props => {
console.log(props)
    return (
        <div className='container'>
            <h1>{props.player.name}</h1>
            <div className='borderDiv'>
            
                <img className='playerIcon' src={props.player.icon} />
                <img className='playerBorder' src={props.player.levelIcon} />
              
                <img className='prestigeIcon' src={props.player.prestigeIcon} />
                <p className='playerLevel'>{props.player.level}</p>
            
            </div>
            
            
            

            {props.player.ratings.map(rank => {
                if(rank.role === 'tank' ) {
                    const roleIcon = <img  src={rank.roleIcon}/>
                    return (
                    <div className='divIcon'>
                        <p> {roleIcon}{rank.role} {rank.level}</p>
                        <img className='rankIcon' src={rank.rankIcon}/>
                    </div>
                    )
                }
                else if(rank.role === 'support') {
                    const roleIcon = <img src={rank.roleIcon}/>
                    return (
                    <div className='divIcon'>
                        <p> {roleIcon}{rank.role} {rank.level}</p>
                        <img className='rankIcon' src={rank.rankIcon}/>
                    </div>
                    )
                }
                else if(rank.role === 'damage') {
                    const roleIcon = <img src={rank.roleIcon}/>
                    return (
                    <div className='divIcon'>
                        <p> {roleIcon}{rank.role} {rank.level}</p>
                        <img className='rankIcon' src={rank.rankIcon}/>
                    </div>
                    )
                }
                else {
                    return <p>No Rank Found</p>
                }
            })}


            
        </div>
    )
}


export default Player