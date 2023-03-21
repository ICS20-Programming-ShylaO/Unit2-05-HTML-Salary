// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

//constants
const TAX = 0.1805

// This function calculates the pay and deducts taxes

function calculatePay () {
  // User Input
  let hours = document.getElementById('hours').value
  let hourly_pay = document.getElementById('hourly_pay').value

  // To calculate the pay and the tax
  let total_pay = hours * hourly_pay
  let tax = TAX * total_pay
  let profit = total_pay - tax

  // display the results
  document.getElementById('total_pay').innerHTML = "Your pay will be $" + total_pay.toFixed(2)
  document.getElementById('tax').innerHTML = "The government will take $" + tax.toFixed(2)
  document.getElementById('profit').innerHTML = "With the tax deduction, you come to a total of $" + profit.toFixed(2)
}