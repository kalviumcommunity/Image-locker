var moongose=require("mongoose");
const schema=moongose.Schema

const userDetails=new schema({
    id:{type:Number},
    name:{type:String},
    lastname:{type:String},
    email : {type:String},
    Title:{type:String},
    imageLinks:{type:String},
    CreatedBy:{type:String}
},{
        timestamps: true
    });


    const UserDetails = moongose.model('userDetails', userDetails);

    module.exports = UserDetails;