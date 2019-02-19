const Mock = require('mockjs')
const base = 'http://localhost:8081'
const data = require('../json/about.json')

// var data ={
// 	"code":"success"
// }

Mock.mock(base+'/api/login','get',data)

Mock.mock(base+'/api/forgetpassword','get',{
    'name':'@name',
    'age|1-100':100,
    'color':'@color'
})

Mock.mock(base+'/api/threemonth','get',{
   "code":"success",
   "data":{
    "bid_amount":"554749745.00",
    "bid_user":"13918"
   }
})
