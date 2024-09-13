import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";
import {BASE_URL} from "../constants"

//we can do this and then inject the endpoint in another file
//another alternative will be making all the endpoints herea s well 
const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});
export const apiSlice = createApi({
    baseQuery,
    endpoints:()=>({}),
})