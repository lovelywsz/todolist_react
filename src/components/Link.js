import React  from 'react';

//如果active被点击状态时显示文本，如果不是则显示A标签
const Link = ({active,children,onClick}) => {
  if(active){
    return <span>{children}</span>
  }
  return(
    <a
      href="#"
      onClick={e=>{
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  )
}
export default Link