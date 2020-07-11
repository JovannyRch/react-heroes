import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';

export const HeroList = ({ publisher }) => {
    const heroes = getHeroByPublisher(publisher);
    return (
        <ul>
            {
                heroes.map(h => (
                    <li key={h.id}>{h.superhero}</li>
                ))
            }
        </ul>
    )
}
