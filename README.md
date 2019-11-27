## REMONI JS

(Express JS, Node JS) Record HTTP Request Live On Your Website

## How to Use

    npm i remoni


**Use Remoni on Express**

    const express = require('express')
    const remoni = require('remoni')

    const app = express()
    app.use(remoni.record) // start record api request

**Get Your Request Monitor**

    remoni.get(data=>{
	    console.log(data) // will get all monitoring data
    })

Monitoring data will looks like

    [
	    {
	      reqFrom: 'someweb.com/profile',
	      reqTo: 'yourweb.com/api/profile',
	      time: 1574838961085
	    },
	    {
	      reqFrom: 'otherweb.com',
	      reqTo: 'yourweb.com/api/myapi.json',
	      time: 1574839736272
	    }
	    // And other request
    ]

That is an example of results.


The data will continue to grow according to request. You can save it to database, or whatever you want.
