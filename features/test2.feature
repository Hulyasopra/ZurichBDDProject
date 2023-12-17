Feature: As a user I should be able to  Pedir Cita

Scenario: Asking Appointment Successfully
Given User navigates to Zurich Application url
And Clicks on "Aceptar todas las cookies" button
And clicks on "Te llamamos gratis" button
When User enters Nombre "Test QA Zurich" and Telefono de contacto  "123456789"
And User selects time as "17" 
And User checks "Acepto los terminos legales" checkbox
And user clicks on Pedir Cita submit button
Then User verifies "¡Enhorabuena!" success message