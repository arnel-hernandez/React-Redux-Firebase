
//TRADITIONAL ACTION OF REDUX
// export const createProject = (project) => {
//     return {
//         type: 'ADD_PROJECT',
//         project: project
//     }
// }

//WITH THUNK
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //MAKE ASYNC CALL TO DATABASE
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        console.log(profile)
        const authorID = getState().firebase.auth.uid;
        console.log(authorID)
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorID: authorID,
            createdAt: new Date()
            
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
        
    }
};