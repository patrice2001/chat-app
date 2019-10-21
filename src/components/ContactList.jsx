import React from 'react';
import './Navbar.css';
import Contact from './Contact';

const List = [
    {
      name: 'Matcoco',
      avatar: 'https://avatars2.githubusercontent.com/u/45208376?s=460&v=4',
      online: true,
    },
    {
      name: 'Baptiste',
      avatar: 'https://randomuser.me/api/portraits/men/70.jpg',
      online: false,
    },
    {
      name: 'Paul',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true,
    },
    {
      name: 'Virginie',
      avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
      online: false,
    },
    {
      name: 'Alexandra',
      avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
      online: false,
    }
  ];
  
  const DisplayList = () =>(
    List.map(props =>(
       <Contact
       name = {props.name}
       avatar = {props.avatar}
       online = {props.online}
       />
    ))

  )


export default DisplayList;
