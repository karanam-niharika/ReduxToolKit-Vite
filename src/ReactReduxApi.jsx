import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const mainData = {
    user : [],
    status : 'True',
    message : '',
}


 export let fetchingData = createAsyncThunk('user/fetch',async () => {

    try {
        let dataFetch = await fetch('https://jsonplaceholder.typicode.com/users')
        let res =  await dataFetch.json()
       // console.log(res)
        return res

        
    } catch (error) {

     throw error
        
    }
})

const sliceData = createSlice({
    name : 'data',
    initialState : mainData,
    reducers : {},
   
    extraReducers:builder => {
        builder.addCase(fetchingData.pending , (state,action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchingData.fulfilled , (state,action) => {
           // console.log(action.payload)
            state.status = 'Completed Successfully'
            state.user = action.payload

        })
        builder.addCase(fetchingData.rejected , (state,action) => {
            state.status = 'Error'
        })
    }

})

let storingDAta = configureStore({
    reducer: {
        first : sliceData.reducer
        
    }
})

export default storingDAta 