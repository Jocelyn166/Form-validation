# Form-validation
Use two ligthweight ways to validate forms on the FrontEnd.
First: 
The Incredibly Easy Way: Constraint Validation: a combination of semantic input types (for example, <input type="email">) and validation attributes (such as required and pattern), browsers can natively validate form inputs and alert users when they’re doing it wrong.
For example:Basic Text Validation,Validating Numbers,Validating Email Addresses and URLs and Validating Dates.

Second:
The Constraint Validation API.Constraint validation is done through the Constraint Validation API either on a single form element or at the form level, on the <form> element itself. The constraint validation is done in the following ways:
By a call to the checkValidity() or reportValidity() method of a form-associated DOM interface, (HTMLInputElement, HTMLSelectElement, HTMLButtonElement, HTMLOutputElement or HTMLTextAreaElement), which evaluates the constraints only on this element, allowing a script 
to get this information. The checkValidity() method returns a Boolean indicating whether the element's value passes its constraints. (This is typically done by the user-agent when determining which of the CSS pseudo-classes, :valid or :invalid, applies.) In contrast, 
the reportValidity() method reports any constraint failures to the user.
By a call to the checkValidity() or reportValidity() method on the HTMLFormElement interface.
By submitting the form itself.

I found following articles are very helpful:
https://css-tricks.com/form-validation-part-1-constraint-validation-html/#aa-basic-text-validation
https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation
