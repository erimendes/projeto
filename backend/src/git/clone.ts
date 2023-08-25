import { simpleGit } from 'simple-git';
import { BASE_FOLDER, PREFIX } from '../constants';

export function clone(repository: string):boolean {
    try {
        const git = simpleGit(`${BASE_FOLDER}`, { binary: 'git' });
    
        git.clone(`${PREFIX}${repository}.git`);
        
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
