const { mongoose } = require('.././config/db');
const bcrypt=require('bcrypt')



let userSchema=new mongoose.Schema(
    {
    
        firstname:  {
            type: String,
            required : true,
            trim:true,
            
        },
        lastname:  {
            type: String,
            required : true,
            trim:true,
            
        },
        email:  {
            type: String,
            required : true,
            trim:true,
            lowercase:true
            
        },
        username: {
            type: String,
            required : true,
            trim:true,
            
        },
        password:  {
            type: String,
            required : true,
            trim:true,
            
            
        },
        role: {
            type: String,
            enum:['admin','teacher','student'],
            default: 'student',
            
            
        }

    },
    {
        timestamps : true ,
        // toJSON:{virtual :true},
        // toObject:{virtual :true}
    }
)

// userSchema.virtual('pasword').set(function(pasword){
//     this.password_hash=bcrypt.hashSyn(pasword,10);
// })



const User=mongoose.model('User',userSchema);


exports.User=User;