(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{a55b:function(e,s,a){"use strict";a.r(s);var o=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"my-5 container"},[a("h1",[e._v("Login")]),a("form",{on:{submit:function(s){return s.preventDefault(),e.loginUser(s)}}},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}}),a("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[e._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Ingresar")])])])},t=[],l=a("2591"),n={name:"Login",data:function(){return{email:"",password:""}},methods:{loginUser:function(){var e=this;this.email&&this.password.length>=6?l["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(s){console.log(s.user.uid),console.log(s.user.photoURL),console.log(s.user.email),console.log(s.user.displayName),console.log(s.user.emailVerified),console.log("login"),e.$router.push({name:"Home"})})).catch((function(e){console.error(e.code),console.error(e.message)})):console.log("no se puede")},recuperarEmail:function(){l["a"].auth().sendPasswordResetEmail(this.email).then((function(){console.log("correo enviado.")})).catch((function(e){console.error(e)}))}}},i=n,r=a("2877"),m=Object(r["a"])(i,o,t,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=Login.c8e609b9.js.map