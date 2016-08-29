## Component Heirarchy

**AppContainer**
 - Header
 - Messages
 - Footer

**AuthFormContainer**
 - AuthForm

**LoansContainer**
 - Loans
  * LoanSummaryComponent
 - ContributionLightbox

**LoanContainer**
 - ContributionLightbox

**Checkout**
 - ConfirmComponent
 - DonateComponent
 - BillingComponent
 - SubmitComponent

**Submitted**
 - Submitted

**Portfolio**
 - ContributionTable
 - TotalContributions
 - DueContributions


## Routes

|Path   | Component   | 
|-------|-------------|
| "/register" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/logout" | "AuthFormContainer" |
| "/loans" | "LoansContainer" |
| "/loan/:id" | "LoanContainer" |
| "/checkout" | "CheckoutContainer" |
| "/checkout/confirm" | "CheckoutContainer" |
| "/checkout/donate" | "CheckoutContainer"
| "/checkout/billing" | "CheckoutContainer" |
| "/checkout/submit" | "CheckoutContainer" |
| "/submitted" | "SubmittedContainer" |
| "/portfolio" | "PortfolioContainer" |




