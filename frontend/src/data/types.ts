export type DemoUser={id:string;username:string;name:string;role:string;avatar:string;cover:string;followers:number;following:number;posts:number;engagement:number;skills:string[];location:string;bio?:string};
export type DemoPost={id:string;authorId:string;text:string;image:string;videoUrl?:string;likes:number;shares?:number;comments:{id:string;username:string;text:string;createdAt?:string}[];createdAt:string;tags:string[]};
export type DemoStory={id:string;authorId:string;image:string;caption:string;createdAt:string;viewed:boolean};
export type DemoChat={id:string;title:string;avatar:string;isGroup?:boolean;unread:number;last:string};
export type DemoMessage={id:string;chatId:string;sender:string;text:string;time:string;mine?:boolean};
export type DemoJob={id:string;title:string;company:string;logo:string;location:string;type:string;salary:string;match:number;skills:string[];description:string};
export type DemoApplication={id:string;jobId:string;name:string;email:string;cover:string;status:'submitted'|'reviewing'|'shortlisted';createdAt:string};
export type DemoNotification={id:string;type:'like'|'follow'|'job'|'coin'|'verify';text:string;createdAt:string;read:boolean};