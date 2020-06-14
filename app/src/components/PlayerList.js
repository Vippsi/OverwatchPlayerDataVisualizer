import React from 'react'
import { connect } from 'react-redux'
import Player from './Player'

const players = [
    // {
    //     "competitiveStats": {
    //         "awards": {
    //             "cards": 8,
    //             "medals": 113,
    //             "medalsBronze": 29,
    //             "medalsSilver": 55,
    //             "medalsGold": 29
    //         },
    //         "games": {
    //             "played": 67,
    //             "won": 34
    //         }
    //     },
    //     "endorsement": 3,
    //     "endorsementIcon": "https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_3",
    //     "gamesWon": 617,
    //     "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/730f47aaf7a8c356df146c1201779dd2687d9c81c79bd7b67294f0728337a8c1.png",
    //     "level": 97,
    //     "levelIcon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b00b8cab530e98c378de2f3e8834d92ee41b4cd7b118179a8ecbccee83c8104.png",
    //     "name": "Vippsi#1982",
    //     "prestige": 1,
    //     "prestigeIcon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8de2fe5d938256a5725abe4b3655ee5e9067b7a1f4d5ff637d974eb9c2e4a1ea.png",
    //     "private": false,
    //     "quickPlayStats": {
    //         "awards": {
    //             "cards": 172,
    //             "medals": 1997,
    //             "medalsBronze": 640,
    //             "medalsSilver": 745,
    //             "medalsGold": 611
    //         },
    //         "games": {
    //             "played": 0,
    //             "won": 494
    //         }
    //     },
    //     "rating": 1827,
    //     "ratingIcon": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png",
    //     "ratings": [
    //         {
    //             "level": 1763,
    //             "role": "damage",
    //             "roleIcon": "https://static.playoverwatch.com/img/pages/career/icon-offense-6267addd52.png",
    //             "rankIcon": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png"
    //         },
    //         {
    //             "level": 1892,
    //             "role": "support",
    //             "roleIcon": "https://static.playoverwatch.com/img/pages/career/icon-support-46311a4210.png",
    //             "rankIcon": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png"
    //         }
    //     ]
    // },

    // {
    //     "competitiveStats": {
    //         "awards": {
    //             "cards": 13,
    //             "medals": 114,
    //             "medalsBronze": 37,
    //             "medalsSilver": 35,
    //             "medalsGold": 42
    //         },
    //         "games": {
    //             "played": 38,
    //             "won": 21
    //         }
    //     },
    //     "endorsement": 3,
    //     "endorsementIcon": "https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_3",
    //     "gamesWon": 1520,
    //     "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a0f89851fd5baf237e98c03ca27b3fe5b28f73f5122e304ff584d0a148baaba7.png",
    //     "level": 63,
    //     "levelIcon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e8b7df4b88998380658d49d00e7bc483c740432ac417218e94fab4137bec4ae0.png",
    //     "name": "desypher#11852",
    //     "prestige": 4,
    //     "prestigeIcon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bc80149bbd78d2f940984712485bce23ddaa6f2bd0edd1c0494464ef55251eef.png",
    //     "private": false,
    //     "quickPlayStats": {
    //         "awards": {
    //             "cards": 802,
    //             "medals": 6710,
    //             "medalsBronze": 1847,
    //             "medalsSilver": 2055,
    //             "medalsGold": 2809
    //         },
    //         "games": {
    //             "played": 0,
    //             "won": 1226
    //         }
    //     },
    //     "rating": 2415,
    //     "ratingIcon": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png",
    //     "ratings": [
    //         {
    //             "level": 2424,
    //             "role": "tank",
    //             "roleIcon": "https://static.playoverwatch.com/img/pages/career/icon-tank-8a52daaf01.png",
    //             "rankIcon": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png"
    //         },
    //         {
    //             "level": 2534,
    //             "role": "damage",
    //             "roleIcon": "https://static.playoverwatch.com/img/pages/career/icon-offense-6267addd52.png",
    //             "rankIcon": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-PlatinumTier.png"
    //         },
    //         {
    //             "level": 2288,
    //             "role": "support",
    //             "roleIcon": "https://static.playoverwatch.com/img/pages/career/icon-support-46311a4210.png",
    //             "rankIcon": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png"
    //         }
    //     ]
    // }
]
const PlayerList = ({players}) => {

    return (
        <>
        {players.map(player => (
            <Player player={player}/>
        ))}
        </>
    )
}
const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, {})(PlayerList)