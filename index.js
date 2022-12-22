"use strict";

const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

flights.split("+").forEach(item => {
  const words = item.split(";");
  const line = `${words[0].includes("Delayed") ? "🔴" : ""}${words[0].replaceAll("_", " ")} from ${words[1].slice(0, 3).toUpperCase()} to ${words[2].slice(0, 3).toUpperCase()} (${words[3].replace(":", "h")})`.padStart(44, " ");
  console.log(line);
});
