import client from './client'
const { req, apiClient } = client

type emailForm = {
  name: string
  email: string
  purpose: string
  message: string
}

export default {
  sendEmail({ data }: { data: emailForm }) {
    return req(apiClient.post('main/email', data))
  },
  subscribe(email: string) {
    return req(apiClient.post('subscribe', { email_address: email }))
  },
}
