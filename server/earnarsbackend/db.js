const mysql = require('mysql')

 const db = mysql.createPool({
    connectionLimit:90,
   host: "localhost",
   user: "root",
     password: "Kingsley369",
     database: "betproject"
   
})

// db.getConnection((err,connection)=>{
//    if(err){
//       console.log(err)
//    }else{
//       const pat = "ALTER TABLE users MODIFY COLUMN account_number VARCHAR(255)"
//       db.query(pat, (err, result) => {
//          if (err) {
//             console.log(err)
//          }else{

//             return console.log("table created")
//          }
//       })
//       connection.release();
//    }
// })

module.exports = {db}




