import {useEffect} from 'react';import Chat from './Chat';import {useChatStore} from '../store/chatStore';import {usePageTitle} from '../hooks/usePageTitle';
export default function Groups(){usePageTitle('Groups');const setActiveChat=useChatStore(s=>s.setActiveChat);useEffect(()=>{setActiveChat('chat2')},[setActiveChat]);return <Chat/>}
