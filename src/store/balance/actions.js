export const deposit = depositAmount => ({
  type: "balance/deposit",
  payload: depositAmount
})

export const reset = () => ({
  type: "balance/reset"
})