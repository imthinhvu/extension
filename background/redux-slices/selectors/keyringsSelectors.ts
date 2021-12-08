import { createSelector } from "@reduxjs/toolkit"
import { RootState } from ".."

export const selectIsCurrentAccountSigner = createSelector(
  (state: RootState) =>
    state.keyrings.keyrings.flatMap((keyring) => keyring.addresses),
  (state: RootState) => state.ui.currentAccount,
  (addresses, selectedAccount) => addresses.includes(selectedAccount.address)
)

export const selectKeyringStatus = createSelector(
  (state: RootState) => state.keyrings.status,
  (status) => status
)

export const selectSigningAddresses = createSelector(
  (state: RootState) =>
    state.keyrings.keyrings.flatMap((keyring) => keyring.addresses),
  (addresses) => addresses
)