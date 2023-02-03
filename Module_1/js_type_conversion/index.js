var value;

// Values to Strings
value = String(555)
value = String(true)
value = String(false)
value = String("hello")
value = String(7.5)
value = (33).toString()

// Values to Number
value = "300"

value = Number(value)

value = true
value = Number(value)

value = false
value = Number(value)

// NaN
value = "monday"
value = Number(value)



// parseInt and parseFloat
value = 100.7
value = parseInt(value)

value = "900719925474099267n" // BigInt
value = parseFloat(value)


console.log(value);
console.log(typeof value);