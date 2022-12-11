# Stev232sPasswordGenerator

## Description

This password generator will generator a random password of 8-128 characters. The generator will create a password based off of user input. This input will contain requests for lower case letters, upper case letters, numbers, and/or special characters. The input will also require length of password.<br>

## Acceptance Criteria

GIVEN I need a new, secure password<br>
*WHEN I click the button to generate a password*<br>
__THEN__ I am presented with a series of prompts for password criteria<br>
*WHEN prompted for password criteria*<br>
__THEN__ I select which criteria to include in the password<br>
*WHEN prompted for the length of the password*<br>
__THEN__ I choose a length of at least 8 characters and no more than 128 characters<br>
*WHEN asked for character types to include in the password*<br>
__THEN__ I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters<br>
*WHEN I answer each prompt*<br>
__THEN__ my input should be validated and at least one character type should be selected<br>
*WHEN all prompts are answered*<br>
__THEN__ a password is generated that matches the selected criteria<br>
*WHEN the password is generated*<br>
__THEN__ the password is either displayed in an alert or written to the page<br>