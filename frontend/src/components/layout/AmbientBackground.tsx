import {motion} from 'framer-motion';

const reactions = [
  {label:'like', text:'♡', left:'8%', delay:0, size:'text-3xl'},
  {label:'spark', text:'✦', left:'18%', delay:2.2, size:'text-xl'},
  {label:'career', text:'↗', left:'31%', delay:4.1, size:'text-2xl'},
  {label:'chat', text:'•', left:'47%', delay:1.4, size:'text-4xl'},
  {label:'shine', text:'✧', left:'63%', delay:3.4, size:'text-2xl'},
  {label:'boost', text:'♡', left:'78%', delay:5.1, size:'text-xl'},
  {label:'coin', text:'✦', left:'91%', delay:1.1, size:'text-3xl'},
];

export function AmbientBackground(){
  return <div className="ambient-stage" aria-hidden="true">
    <motion.div className="ambient-orbit ambient-orbit-one" animate={{rotate:360}} transition={{duration:34,repeat:Infinity,ease:'linear'}} />
    <motion.div className="ambient-orbit ambient-orbit-two" animate={{rotate:-360}} transition={{duration:46,repeat:Infinity,ease:'linear'}} />
    <div className="ambient-mesh" />
    {reactions.map(item=><span key={item.label} className={`ambient-reaction ${item.size}`} style={{left:item.left,animationDelay:`${item.delay}s`}}>{item.text}</span>)}
    <div className="ambient-grid" />
  </div>;
}