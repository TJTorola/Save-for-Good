# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/user` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `LoginForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Contributions

* `getContributions`
  0. called from successfully submitting new contribution.
  0. `GET /api/user/contribution` is called.
  0. `recieveContributions` is set as the callback.
* `recieveContributions`
  0. invoked in API callback.
  0. `ContributionsReducer` sets user contributions to new array.


## Message Cycles

### Error API Response Actions
* `setMessages`
  0. invoked from all API callbacks with a non-empty message array
  0. the `MessageReducer` appends the given messages
* `removeMessage`
  0. invoked on setTimeout callbacks from messages with a timeout, or by the user closing a message component
  0. the `MessageReducer` removes `Message` with the given ID

## Loan Cycles

### Loan Collection Cycles
* `getLoans`
  0. invoked from entry into the `Loans` page
  0. `GET /api/loans?before=foo` is called. (Where foo is the newest loan we want)
  0. `recieveLoans` is set as the success callback.
* `recieveLoans`
  0. invoked in API callback.
  0. `LoanReducer` appends loans to loans array.

### Single Loan Cycles
* `getLoan`
  0. invoked from entry into a `Loan` page
  0. `GET /api/loans/:id` is called.
  0. `recieveLoan` is set as the success callback.
  0. `LoanReducer` sets loan to be null.
* `recieveLoan`
  0. invoked in API callback.
  0. sets the the loan object to the given loan.

## Checkout Cycles

### Contributions
* `addContribution`
  0. invoked from `AddContribution` lightbox.
  0. `ContributionsReducer` Appends Contribution
* `editContribution`
  0. invoked from `AddContribution` lightbox or checkout page.
  0. `ContributionsReducer` modifies Contribution.
* `removeContribution`
  0. invoked from `CheckoutConfirm` component.
  0. `ContributionsReducer` removes Contribution.

### Donations
* `setDonation`
  0. invoked from `CheckoutDonate` component.
  0. `DonationReducer` sets contribution.

### Billing Info
* `setName`
  0. invoked from `CheckoutBilling` component.
  0. `BillingReducer` sets Name.
* `setNumber`
  0. invoked from `CheckoutBilling` component.
  0. `BillingReducer` sets Number.
* `setCCV`
  0. invoked from `CheckoutBilling` component.
  0. `BillingReducer` sets CCV.
* `setZip`
  0. invoked from `CheckoutBilling` component.
  0. `BillingReducer` sets Zip.
* `clearBilling`
  0. invoked from successfully submitted order.
  0. sets billing info to a clear form.

### Stripe
* `submitStripeInfo`
  0. invoked from `CheckoutSubmit` component.
  0. posts to Stripe API for token.
  0. `recieveStripeToken` is set as success callback.
* `recieveStripeToken`
  0. invoked from API callback.
  0. `StripeReducer` sets token.
  0. `POST /api/user/contributions` is called.
  0. `clearBilling` is called on success.
  0. `getContributions` is called on success.

