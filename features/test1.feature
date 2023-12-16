Feature: As a user I should be able to  Pedir Cita

Scenario: Asking Appointment
Given User navigates to Zurich Application url
And Clicks on "Aceptar todas las cookies" button
And clicks on "Te llamamos gratis" button
When User enters "Test QA Zurich" and checks "Acepto los terminos legales" checkbox
And user clicks on Pedir Cita submit button
Then User verifies "Debes introducir un teléfono de contacto." error message

