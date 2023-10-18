import { createSlice,  createAsyncThunk   } from "@reduxjs/toolkit";

export const addUser= createAsyncThunk("user/addUser", async(values)=>{
    return fetch("https://kacyber.io/api/user/waitlist", { method:"POST",
    headers:{Accept:"application/json", "Content-Type":"application/json"} ,
    body: JSON.stringify({
         firstname: values.firstname,
         surname: values.surname,
         email: values.email,
         phoneNumber: values.phoneNumber,
         NinNumber: values.NinNumber,
         selectedOption: values.selectedOption,
    })

    }).then((res)=> res.json());

});


const userSlice= createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:[],
        error:'', 
        isSuccess:''  
     },

    /// reducer call here
    extraReducers:builder=>{
       

        // add user 
        builder.addCase(addUser.pending, state=>{
            state.loading= true
            state.error= ''
        });
        builder.addCase(addUser.fulfilled, (state, action)=>{
             state.loading=false
             state.user=[]
             state.isSuccess=action.payload
        });

        builder.addCase(addUser.rejected, (state, action)=>{
            state.loading= false
            state.user=[]
            state.error= action.error.message

        });

      
       
    }

    /// end reduce
    
})
export default userSlice.reducer; 
