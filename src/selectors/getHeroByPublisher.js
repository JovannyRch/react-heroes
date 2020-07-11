import { heroes } from '../data/heroes';

export const getHeroByPublisher = (publisher) => {
    return heroes.filter(item => item.publisher === publisher);

};