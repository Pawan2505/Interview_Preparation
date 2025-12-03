import { ADDUSER,EDITUSER,DELETEUSER } from "./Action";

const initialState = [
     {id:1,username:"Pawan Maurya",email:"pawanaktu@gmail.com"},
     {id:2,username:"Manish Mishra",email:"manish@gmail.com"},
]


const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADDUSER:
            return {
                ...state, user:action.payload
            }
        case EDITUSER:
            return{...state, user:}
    }
}