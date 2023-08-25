import { simpleGit } from 'simple-git';
import { BASE_FOLDER } from '../constants';

export function pull(repository: string):boolean {
    try {
        const git = simpleGit(`${BASE_FOLDER}${repository}`, { binary: 'git' });
    
        git.pull();
        
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
