const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("../helper/jwt");

module.exports = class {
  //   static async getUsers(req, res, next) {
  //     try {
  //       const users = await User.findAll();
  //       // console.log(result);
  //       res.status(200).send({
  //         status: 200,
  //         data: users,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       res.status(500).send(error);
  //     }
  //   }
  static getUsers(req, res, next) {
    User.findAll()
      .then((result) => {
        console.log(result);
        res.status(200).send({
          status: 200,
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  }

  static async Register(req, res, next) {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword)
      return res.status(400).send({
        message: "password tidak cocok",
      });

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      const response = await User.create({
        name: name,
        email: email,
        password: hashPassword,
      });
      res.status(201).send({
        status: 201,
        message: "Berhasil Register",
        data: response,
      });
    } catch (error) {
      res.status(500).send(error);
      //   console.log(error);
    }
  }
  static async Login(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        res.status(404).send({
          status: 404,
          message: "user Not Found!",
        });
      }
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        // password ditabase
        user.password
      );
      if (!isValidPassword) {
        res.status(404).send({
          status: 400,
          message: "Email and Password not match!",
        });
      }
      const token = jwt.generateToken({
        email: user.email,
        password: user.password,
      });
      const secureuser = user.dataValues;
      delete secureuser.password;
      res.status(200).send({
        status: 200,
        message: "user Found",
        data: {
          user: {
            secureuser,
            password: "secret",
          },
          token: token,
        },
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
