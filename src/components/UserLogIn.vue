<template>
    <div>
        <h1>this is log in page</h1>

        <br>
        <br> <br>
        <button @click="handelGoogleSineIN">Log in With google</button>
        <br>
        <button v-if="name" @click="handelSignOut">Sign out</button>
    </div>

    <div>
        <h4>name:{{ name?.displayName }}</h4>
        <img :src="name?.photoURL" alt="">
        <h3>email:{{ name?.email }}</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from '../FireBase/firebase.init'


//
const Googleprovider = new GoogleAuthProvider();
const GetAuth = getAuth(app)
//
// 
const userinfo = {}
const name = ref('')


function handelGoogleSineIN() {
    signInWithPopup(GetAuth, Googleprovider)

        .then((result) => {
            const user = result.user
            // main data
            //
            userinfo.value = user
            //
            name.value = userinfo.value



            console.log(name.value);
        })
        .catch((error) => {
            const ErrorCode = error.code
            console.log(ErrorCode);
        })

}

function handelSignOut() {
    signOut(GetAuth)
        .then((result) => {
            console.log(result)
            name.value = ''

        })
        .catch((error) => {
            console.log(error);
        })
}



</script>

<style lang="scss" scoped></style>