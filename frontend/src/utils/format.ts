export const compactNumber=(value:number)=>Intl.NumberFormat('en',{notation:'compact',maximumFractionDigits:1}).format(value);
export const timeAgo=(iso:string)=>{const diff=Date.now()-new Date(iso).getTime();const m=Math.max(1,Math.floor(diff/60000));if(m<60)return `${m}m`;const h=Math.floor(m/60);if(h<24)return `${h}h`;return `${Math.floor(h/24)}d`};
export const isVerified=(followers:number)=>followers>=10000;
