import http from './helper'

export const getContext = (params = {}) => {
    return http.get(`/api/context`, params)
}
