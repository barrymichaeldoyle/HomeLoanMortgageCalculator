# Home Loan Mortgage Calculator

This is a little home loan calculator tool currently targeted towards the typical South African home buyer. But I have plans to expand it to suite other countries too.

## Current Features

- Affordability Calculator
- Repayments Calculator
- Pay Off Early Scenarios

## Planned Features

- Multi-locale support

### TODO:

Given things like prime interest rates tend to change, I want to add a way for myself to go update those rates in a DB rather than needing to constantly update the codebase. This would also allow me to dynamically add more locales.

There are also certain phrases that tend to be different across locales. E.g. "Home Loan" vs "Mortgage" etc. I'd like to add a way to dynamically update these phrases as well. I'm debating using something like i18n for this or just going with a custom db implementation.
