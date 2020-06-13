import {useState} from 'react';

const useTags = ()=>{//封装一个自定义HOOK
  const [tags,setTags] = useState<{id:number;name:string}[]>([
    {id:1,name:'衣'},
    {id:1,name:'食'},
    {id:1,name:'住'},
    {id:1,name:'行'},
  ]);
  return{tags, setTags}
}

export {useTags}