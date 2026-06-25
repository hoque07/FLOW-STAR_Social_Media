import {create} from 'zustand';import {persist} from 'zustand/middleware';
type ThemeState={mode:'dark'|'light';toggleMode:()=>void;setMode:(mode:'dark'|'light')=>void};
export const useThemeStore=create<ThemeState>()(persist(set=>({mode:'dark',toggleMode:()=>set(s=>({mode:s.mode==='dark'?'light':'dark'})),setMode:(mode)=>set({mode})}),{name:'flow-star-theme'}));
