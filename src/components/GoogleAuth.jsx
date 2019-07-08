import React, { Component } from 'react'

 class GoogleAuth extends Component {
         state = {isSignedIn: null }
     componentDidMount() {
             window.gapi.load('client:auth2', () => {
               window.gapi.client.init({
                  clientId: '853858493655-747b7ub0m8ol68mfq7h8eqlqimuv1anv.apps.googleusercontent.com',
                    scope: 'email'
            }).then (() => {
                 this.auth = window.gapi.auth2.getAuthInstance();
                 this.setState({ isSignedIn: this.auth.isSignedIn.get()});
                 this.auth.isSignedIn.listen(this.onAuthChange)
            })
         });
     }
     onAuthChange = () => {
       this.setState({ isSignedIn : this.auth.isSignedIn.get()})
     }
     renderAuthButton() {
       if(this.state.isSignedIn === null ) {
         return <div> I don't know if we sign in </div>;
       } else if (this.state.isSignedIn){
        return <div> I am signed in</div>
       } else {
         return <div>i am not signed in</div>
       }
     }
    render() {
    return(
        <div>
          {this.renderAuthButton()}
        </div>
    )
} 

 }

 export default GoogleAuth;