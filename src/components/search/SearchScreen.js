import React, { useState, useMemo } from 'react'
import queryString from 'query-string'

import { HeroCard } from '../heroes/HeroCard'
import { getHeroByName } from '../../selectors/getHeroByName';
import { useLocation } from 'react-router-dom';


export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search);

    const [value, setValue] = useState(q);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (value) {
            //Buscar
            history.push(`?q=${value}`);
        }
    };

    const heroes = useMemo(() =>
        getHeroByName(q)
        , [q]);

    return (
        <div className="container">
            <h1>Search screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form className="form-group" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={value}
                            onChange={({ target }) => { setValue(target.value) }
                            }
                            placeholder="Write your hero..."
                            className="form-control"
                        />
                        <button className="btn btn-outline-primary btn-block mt-3">
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (!q) && <div className="alert alert-info"> Make a search...</div>
                    }
                    {
                        (q && !heroes.length) && <div className="alert alert-danger"> No results</div>
                    }
                    {
                        heroes.map(hero => <HeroCard {...hero} key={hero.id} />)
                    }
                </div>
            </div>
        </div>
    )
}
