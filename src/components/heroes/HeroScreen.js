import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from './../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    const { id: heroId } = useParams();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if (history.lenght <= 2) {
            history.push('/');
        }
        else {
            history.goBack();
        }
    }
    const { id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    return (
        <div className="row mt-5 p-4">
            <div className="col-4">
                <img className="img-thumbnail animate__animated animate__fadeInLeft" alt={superhero} src={`../assets/heroes/${id}.jpg`} />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>Firts Appearance:</b> {first_appearance}
                    </li>
                    <li className="list-group-item">
                        <b>Characters:</b> {characters}
                    </li>
                </ul>
                <button className="btn btn-outline-info" onClick={handleReturn}>Back</button>
            </div>

        </div>
    )
}
