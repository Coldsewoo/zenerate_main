import client from './client'
const { req, apiClient } = client

type emailForm = {
  name: string
  email: string
  category: string
  message: string
}

export default {
  sendEmail({ data }: { data: emailForm }) {
    return req(apiClient.post('main/email', data))
  },
}
