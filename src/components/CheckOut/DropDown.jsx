import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse;


const items = [
    {
        key: '1',
        label: 'PayPal',
        h1 : "Summary",
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nihil neque quisquam aut repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab quis, iste harum ipsum hic, nemo qui!',
        showArrow : false,
      },
      {
        key: '2',
        label: 'Credit Card',
        h1 : "Summary",
        children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nihil neque quisquam aut repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab quis, iste harum ipsum hic, nemo qui!",
        showArrow: false,
      },
]

const DropDown = () => {
    const onChange = (key) =>{
        console.log(key)
    }
  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange} className="drop-down-card"  >
        {items.map(item =>
            <Panel header={<h3>{item.label}</h3>} key={item.key}>
                <span>{item.h1}</span>
                <p>{item.children}</p>
            </Panel>)}
    </Collapse>
  )
}

export default DropDown