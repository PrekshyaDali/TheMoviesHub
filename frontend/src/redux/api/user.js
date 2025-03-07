import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: "POST",
                body: data
            })
        }),

        // for logout
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
            }),
        }),
        overrideExisting: false,
    })
})

export  const { useLoginMutation, useLogoutMutation } = userApiSlice;
