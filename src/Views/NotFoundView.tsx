import React from 'react'
import { match } from 'react-router-dom'

interface Props {
  match: match
}

export const NotFoundView: React.FC<Props> = ({ match }) => {
  return <div className="section">{JSON.stringify(match)} Not Found!</div>
}
