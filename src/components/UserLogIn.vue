<template>
    <div>
        <h1>this is log in page</h1>

        <br>
        <br> <br>
        <button @click="handelGoogleSineIN">Log in With google</button>
    </div>
</template>

<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../FireBase/firebase.init'


//
const Googleprovider = new GoogleAuthProvider();
const GetAuth = getAuth(app)
//

function handelGoogleSineIN() {
    signInWithPopup(GetAuth, Googleprovider)

        .then((result) => {
            const user = result.user
            console.log(user);
        })
        .catch((error) => {
            const ErrorCode = error.code
            console.log(ErrorCode);
        })

}




</script>

<style lang="scss" scoped></style>