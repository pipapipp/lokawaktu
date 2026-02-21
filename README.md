#  LokaWaktu

**LokaWaktu** is a lightweight, zero-dependency JavaScript utility library for formatting dates and times into Indonesian standards. Built for performance, readability, and ease of use.

##  Key Features
*  Convert dates into formal Indonesian format (e.g., *Selasa, 27 Januari 2026*).
*  Concise numeric date formatting (e.g., *27/01/2026*).
*  Human-friendly time differences (e.g., *5 menit yang lalu*, *Baru saja*).

##  Getting Started

### Installation
Currently, you can clone this repository and import the utility into your project:

```javascript
const LokaWaktu = require('./src/index');

Usage Examples
1. Get Current Date (Full Indonesian Format)
    console.log(LokaWaktu.now()); 
    // Output: "Selasa, 27 Januari 2026"
2. Format to short numeric
    const date = new Date();
    console.log(LokaWaktu.formatShort(date)); 
    // Output: "27/01/2026"
3. Human-Friendly Relative Time
    // Example: 5 minutes ago
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    console.log(LokaWaktu.formatRelative(fiveMinutesAgo)); 
    // Output: "5 menit yang lalu"
```
##  Project Structure
lokawaktu/

├── src/

│   ├── constants.js   
│   ├── formatter.js  
│   └── index.js     
└── README.md         

##  Contributing
Contributions are welcome! Feel free to open an Issue or submit a Pull Request if you have ideas for new features like "Time in Words" or specialized time zone handling.
