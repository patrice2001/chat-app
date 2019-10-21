import React from 'react';
import './Navbar.css';


class Contact extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          online: props.online,
      }
  }


  EventClick = () =>{
    const change = !this.state.online;
    this.setState({online: change});
  } 


  render() {
      return (

          <div onClick ={this.EventClick} className="Contact">

              <img className="avatar" src={this.props.avatar} />

              <div className="status">
                  <p className="name">{this.props.name}</p>
                  <p>{this.state.online ? "online" : "offline"}</p>

                  {this.state.online ? (

                      <span className="status-online" />
                  ) : (
                          <span className="status-offline" />

                      )}
              </div>
          </div>


      )
  }
}

export default Contact;

// const Contact = ({ avatar, name, online, }) => {
//   return (
//     <div>
//       <div className="Contact">

//         <img className="avatar" src={avatar} />

//         <div className="status">
//           <p className="name">{name}</p>
//           <p className="status-text">{online ? "online" : "offline"}</p>

//           {online ? (

//             <span className="status-online" />
//           ) : (
//               <span className="status-offline" />

//             )}
//         </div>

//       </div>
//     </div>
//   );
// }


// export default Contact;