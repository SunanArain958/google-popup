function SignLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth()
        .signInWithPopup(provider)
        .then((snap) => {
            console.log(snap.user)
            console.log(snap.user.email)
            console.log(snap.user.displayName)
            console.log(snap.user.photoURL)






        })
        .catch((e) => {
            console.log(e)
        })
}
