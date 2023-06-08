const tbody = document.querySelector('tbody')

const myData = [
	{
		"name": "Dean Valencia",
		"phone": "1-239-350-0327",
		"email": "tellus.aenean@hotmail.ca",
		"address": "Ap #988-140 Odio Rd.",
		"postalZip": "41101",
		"region": "Sucre",
		"country": "Russian Federation"
	},
	{
		"name": "Christopher Hull",
		"phone": "1-644-321-8279",
		"email": "diam.lorem@icloud.org",
		"address": "188-4492 Ac Street",
		"postalZip": "01757",
		"region": "Central Visayas",
		"country": "South Africa"
	},
	{
		"name": "Bruce Parker",
		"phone": "(138) 621-8758",
		"email": "non.enim.commodo@outlook.ca",
		"address": "P.O. Box 286, 5145 Pede. Street",
		"postalZip": "121631",
		"region": "Punjab",
		"country": "Australia"
	},
	{
		"name": "Ann Crane",
		"phone": "(978) 267-6787",
		"email": "nunc.lectus.pede@aol.net",
		"address": "5879 Lectus, Avenue",
		"postalZip": "4363",
		"region": "Andalucía",
		"country": "Singapore"
	},
	{
		"name": "Xantha Case",
		"phone": "(534) 274-9121",
		"email": "aliquam@icloud.net",
		"address": "Ap #564-3228 Nec St.",
		"postalZip": "441146",
		"region": "Azad Kashmir",
		"country": "Vietnam"
	}
]

const spanList = document.querySelectorAll('span')
// Get the first object in the myData Array
// and get the keys
const getKeys = () => Object.keys(myData[0])

// Use the id of the th to attach an event
// listener to each one of the table 
// headers
getKeys().forEach(key => {
	document.getElementById(key)
		.addEventListener('click', () => arraySort(key) )
})

// Nested array of values
let myValuesArray = myData.map(row => {
	return Object.values(row).map(val => `<td>${val}</td>`)
})

let myValues = ''

// convert the nested array to a string
// and put in in myValues.
myValuesArray.forEach(arr => {
	myValues += `<tr>${arr.join('')}</tr>`
})


tbody.innerHTML =  myValues

const assending = {name: false, phone: false, email: false, address: false, postalZip: false, region: false, country: false}

const arraySort = (keyValue) => {
	spanList.forEach(span => span.style.display = 'none')
	document.querySelectorAll('th')
	.forEach(th => th.style.backgroundColor = '#116D6F')
	for(const [key, value] of Object.entries(assending)) {
		if (key === keyValue) {
			// toggle assending key and 
			// sort
			assending[key] = !assending[key]
			document.getElementById(key)
			.style.backgroundColor = '#CD1818'
			const compareFn = (a, b) => {
				if (a[keyValue] < b[keyValue]) {
					return -1
				}
				if (a[keyValue] > b[keyValue]) {
					return +1
				}
				return 0
			}
			if (assending[key]) {
				document.getElementsByClassName(`${key.toLowerCase()}-down`)[0]
				.style.display = 'inline'
				mySortedData = myData.sort(compareFn)
			} else {
				document.getElementsByClassName(`${key.toLowerCase()}-up`)[0]
				.style.display = 'inline'
				mySortedData = myData.sort((a, b) => -compareFn(a, b))
			}
			// Update the myValuesArray with the sorted data
			myValuesArray = mySortedData
				.map(row => {
					return Object.values(row)
					.map(val => `<td>${val}</td>`)
				})
				myValues = ''
				// convert the nested array to a string and put 
				// it in myValues
				myValuesArray
					.forEach(arr => myValues += `<tr>${arr.join('')}</tr>`)
					tbody.innerHTML = myValues
		} else {
			// ensure previous values that 
			// were set to true are set 
			// back to false
			assending[key] = false
		}
	}
}