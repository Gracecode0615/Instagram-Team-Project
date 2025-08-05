import React from 'react'
import shapeIcon from '../assets/Shape.png';
import "../styles/catergorytab.scss";


const catergories = [
    {icon :shapeIcon, label: 'IGTV'},
    {icon : shapeIcon, label : 'Shop'},
    {icon: shapeIcon, label : 'Style'},
    {icon :shapeIcon, label: 'Sports'},
    {icon : shapeIcon, label : 'Auto'}
]

const CatergoryTab = () => {
  return (
    <div className='catergory-tab' style={{border:'gray'}}>
        {catergories.map((item, index) => (
            <div className='catergory-item' key={index}>
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
            </div>
        ))}

    </div>
  )
}

export default CatergoryTab