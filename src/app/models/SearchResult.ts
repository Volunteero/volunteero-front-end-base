import {Event} from './Event';
import { Organisation } from './Organisation';
import { Campaign } from './Campaign';
export interface SearchResult {
    events: Array<Event>;
    organizations: Array<Organisation>;
    campaigns: Array<Campaign>;
}
