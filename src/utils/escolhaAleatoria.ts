import { Member } from '../@types/members'
import { sort } from './sort'

export type ThemeSelected =  {theme:string,email:string,name:string}

export const selectThemes = (THEMES:string[],MEMBERS:Member[])=>{
    let result:ThemeSelected[] = []
    const members = sort(MEMBERS) as Member[]
    const themes = sort(THEMES) as string[]
    for (let i = 0; i < members.length; i++) {
        const member = members[i]
        const theme = themes[i]
        
        result.push({
            theme,
            ...member  
        })
       }
    return result
}
