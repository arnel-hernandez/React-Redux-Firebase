import React, { Component } from 'react'
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { Redirect } from "react-router-dom";

//REDUX
import { connect } from 'react-redux';
//

//FIREBASE
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { projects, auth, notifications } = this.props

    if(!auth.uid) return <Redirect to='/signin/' />

    return (
      <div className="dashboard container">
          <div className="row">
              <div className="col s12 m6"> 
                <ProjectList projects={projects} /> 
              </div>
              <div className="col s12 m5 offset-m1"> 
                <Notifications notifications={notifications}/>
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)

// const Dashboard = (props) => {
//     console.log(props)
//     const { projects } = props
//     return (
//     <div className="dashboard container">
//         <div className="row">
//             <div className="col s12 m6"> 
//               <ProjectList projects={projects} /> 
//             </div>
//             <div className="col s12 m5 offset-m1"> 
//               <Notifications/> 
//             </div>
//         </div>
//     </div>
//   )
// }

// CONNECT FUNCTION WAS NOT WORKING WITH CLASS COMPONENT