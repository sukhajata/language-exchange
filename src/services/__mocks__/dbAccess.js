import lan_english from './en.translations';
import lan_thai from './th.translations';
import settings from '../config/settings';

export function getLanguage() {
    const language = settings.firstLanguage === 'th' ? lan_thai : lan_english;
    return language;
}