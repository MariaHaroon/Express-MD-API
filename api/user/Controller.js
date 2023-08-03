require("dotenv").config();
const User = require("./model");
const { connect } = require("mongoose");
const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

// signup
const Signup = async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !email || !password) {
        res.status(403).json({
            message: "Missing Required Field"
        })
    }
    else {
        try {
            await connect(process.env.MONGO_URI);
            const checkExist = await User.exists({ email: email });

            if (checkExist) {
                res.json({
                    message: "User Already Exist",
                });
            }
            else {
                await User.create({
                    username, email,
                    password: await hash(password, 12)
                });
                res.status(201).json({
                    message: "Account Created!",
                });
            }
        }
        catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }

};

// login
const Login = async (req, res) => {
    const { password, email } = req.body;

    if (!email || !password) {
        res.status(403).json({
            message: "Missing Required Field"
        })
    }
    else {
        try {
            await connect(process.env.MONGO_URI);
            const checkUser = await User.findOne({ email: email });

            if (!checkUser) {
                res.json({
                    message: "User Not Found",
                });
            }
            else {
                const dcrypt = await compare(password, checkUser.password);

                if (email == checkUser.email && dcrypt) {
                    const token = sign(
                        {
                            username: checkUser.username,
                            id: checkUser._id,
                            email: checkUser.email,
                        },
                        process.env.JWT_SECRET
                    );

                    res.json({
                        message: "Log in Successful",
                        token: token,
                    });
                } else {
                    res.json({
                        message: "Invalid password or email",
                    });
                }
            }
        }
        catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }


};

// update user
const UpdateUser = async (req, res) => {
    const { _id, username, profilepicture } = req.body

    const filter = { _id }
    const update = { username, profilepicture }

    try {
        await connect(process.env.MONGO_URI)
        const users = await User.findOneAndUpdate(filter, update, {
            new: true
        })
        res.status(204).json({
            message: "Profile Updated successfully"
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// delete user
const DeleteUser = async (req, res) => {
    const { _id } = req.body

    try {
        await connect(process.env.MONGO_URI)
        await User.deleteOne({ _id })
        res.json({
            message: "User Removed"
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// get all users
const AllUsers = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const Users = await User.find()
        res.json({
            Users
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// get user by email
const UserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        await connect(process.env.MONGO_URI)
        const Users = await User.find({ email })
        res.json({
            Users
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

// get user by id
const UserByid = async (req, res) => {
    const { _id } = req.query;
    try {
        await connect(process.env.MONGO_URI)
        const Users = await User.find({ _id })
        res.json({
            Users: Users
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

module.exports = { Signup, Login, AllUsers, UserByEmail, UserByid, UpdateUser, DeleteUser };
