import React from 'react';
import './Navbar.css';
import Contact from './Contact';



const Person1 = {
    avatar: "https://media.istockphoto.com/photos/textured-dark-vignette-black-background-picture-id675020930?k=6&m=675020930&s=612x612&w=0&h=lfCmhoQSv6J8g82J8BxOMHL3Yn0ncswNtug-pclJ0DI=",
    name: "Je sais pas",
    online: true,
}


const Person2 = {
    avatar: "https://media.istockphoto.com/photos/textured-dark-vignette-black-background-picture-id675020930?k=6&m=675020930&s=612x612&w=0&h=lfCmhoQSv6J8g82J8BxOMHL3Yn0ncswNtug-pclJ0DI=",
    name: "Je sais",
    online: false,
}

const Person3 = {
    avatar: "https://media.istockphoto.com/photos/textured-dark-vignette-black-background-picture-id675020930?k=6&m=675020930&s=612x612&w=0&h=lfCmhoQSv6J8g82J8BxOMHL3Yn0ncswNtug-pclJ0DI=",
    name: "Paul",
    online: false,
}

const Person4 = {
    avatar: "https://media.istockphoto.com/photos/textured-dark-vignette-black-background-picture-id675020930?k=6&m=675020930&s=612x612&w=0&h=lfCmhoQSv6J8g82J8BxOMHL3Yn0ncswNtug-pclJ0DI=",
    name: "David",
    online: true,
}

const Person5 = {
    avatar: "https://media.istockphoto.com/photos/textured-dark-vignette-black-background-picture-id675020930?k=6&m=675020930&s=612x612&w=0&h=lfCmhoQSv6J8g82J8BxOMHL3Yn0ncswNtug-pclJ0DI=",
    name: "Léa",
    online: false,
}


const tab = [Person1, Person2, Person3, Person4, Person5];

const ContactList = () => {
    return(
        <ul className="liste">
            {
                tab.map(contact => <li><Contact {...contact}/></li>)
            }
        </ul>

    );
}    

export default ContactList;
