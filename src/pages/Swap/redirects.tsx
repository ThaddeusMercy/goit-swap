import { Redirect, RouteComponentProps } from 'react-router-dom'

export function RedirectPathToSwapOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/swap' }} />
}
