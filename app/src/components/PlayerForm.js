import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'

const PlayerForm = (props) => {

    const initialPlayer = {
        battleTag: 'Vippsi',
        battleId: '1982',
        platform: 'pc',
        region: 'us'

    }
    const [ player, setPlayer ] = useState(initialPlayer)

    const handleChanges = e => {
        const name = e.target.name
        const value = e.target.value

        setPlayer({...player, [name]: value})
    }

    const handleGetData = e => {
        e.preventDefault()
        props.getData(player)
        setPlayer(initialPlayer)
    }


    
    return (
        <div>
            <form onSubmit={handleGetData}>
                <fieldset>
                    <legend>Find a player:</legend>
                <label> Battle Tag
                    <input
                    type='text'
                    name='battleTag'
                    placeholder='Please enter your BattleTag'
                    value={player.battleTag}
                    onChange={handleChanges}
                    />
                </label>

                <label>
                    <input
                    type='text'
                    name='battleId'
                    placeholder= 'Please enter your Battle ID'
                    value={player.battleId}
                    onChange={handleChanges}
                    />
                </label>

                <select value={player.region}  name='region' onChange={handleChanges}>
                    <option>Please select a region</option>
                    <option value='us'>US</option>
                    <option value='eu'>EU</option>
                    <option value='asia'>Asia</option>
                </select>

                <select value={player.platform} name='platform' onChange={handleChanges}>
                    <option>Please select a platform</option>
                    <option value='pc'>PC</option>
                    <option value='ps4'>PS4</option>
                    <option value='xbox'>Xbox</option>
                </select>
                <button onClick={handleGetData}>Click Me</button>
                </fieldset>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { getData })(PlayerForm)