import { createApi, fetchBaseQuerty } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	baseQuery: fetchBaseQuerty({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: 'main',
	tagTypes: [],
	endpoints: (build) => ({
		postAiText: build.mutation({
			query: (payload) => ({
				url: 'openai/text',
				method: 'POST',
				body: payload
			})
		})
	})
})

export const { usePostAiTextMutation } = api