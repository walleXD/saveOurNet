import { findRepresentatives } from "lib/types"
import { Observable } from "rxjs/Observable"
import { NavigationActions } from "react-navigation"

import {
  setCongressman,
  setSenators,
  toggleLoadingStatus,
  setError
} from "actions/search"
import api from "api"

// TODO: Fix error handling
export default [
  (action$, store) =>
    action$
      .ofType(findRepresentatives)
      .flatMap(() => {
        const { search: { address } } = store.getState()
        const addressInput = `
          ${address.Street}
          ${address.City}
          ${address.State}
          ${address.Zipcode}
        `
        return api(addressInput).json()
      })
      .flatMap(response => {
        const { offices, officials } = response
        const senators = offices[0].officialIndices.map(
          index => officials[index]
        )
        const congressman = offices[1].officialIndices.map(
          index => officials[index]
        )
        return [
          setSenators(senators),
          setCongressman(congressman),
          toggleLoadingStatus(),
          NavigationActions.navigate({
            routeName: "Found"
          })
        ]
      })
      .catch(error => setError(error.message))
]
