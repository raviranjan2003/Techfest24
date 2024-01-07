import User from "../models/user.js";

const markAttendance = async (req, res) => {
    try {
        const regNo = req.params.userid;
        // console.log(regNo);
        User.findOneAndUpdate({ regNo }, { $inc : {techbucks : 10 }}, { upsert : true })
        .then((response) =>{
            // console.log(response);
            res.status(201).json({message : "Attendance marked successfully !"});
        })
        .catch(err => res.status(401).json({err}));

        // userDetails.forEach(item => {
        //     if (item.regNo === regNo) {
        //         item.techbucks += 10;
        //         isMark = true;
        //     }
        // })
        // if (isMark) {
        //     userDetails.save()
        //     .then((response) => {
        //         console.log(response);
        //         res.status(201).json({ message: "Attandace marked successfully !" });
        //     })
        //     .catch(err => res.status(401).json({ err }));
        // }
        // res.send("Mark Attendance hit");
    } catch (error) {
        res.status(404).json({ error, message: "Internal Server Error !" });
    }
}

const getTechbucks = async (req, res) => {
    try {
        const regNo = req.params.userid;

        const userDetails = await User.find({regNo});
        if(userDetails && userDetails.length > 0){
            // console.log("UserDetails ===> "+ userDetails[0].techbucks );
            res.status(200).json({techbucks : userDetails[0].techbucks});
        }else{
            res.status(404).json({error : "No techbucks found !"});
        }
    } catch (error) {
        res.status(404).json({ error, message: "Internal Server Error !" });
    }
}
export  { markAttendance, getTechbucks };