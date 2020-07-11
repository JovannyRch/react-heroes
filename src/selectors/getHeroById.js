import { heroes } from '../data/heroes';

export const getHeroById = (id) => {
    return heroes.filter(item => item.id === id);

};