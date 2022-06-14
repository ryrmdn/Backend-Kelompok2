// const { Product } = require('../models')

module.exports = class {
    static async addProduct(req, res) {
        try {
            // const cekData = await this.addProduct.findOne({ where: {product_name: req.body.name} })

            // if(cekData) {
            //     res.status(400).send({
            //         status: 400,
            //         message: 'Produk sudah terdaftar!'
            //     })
            // }

            // else {
                // const result = await Product.create({
                //     user_id: ,
                //     product_name: ,
                //     product category: ,
                //     product_desc: ,
                //     product_price: ,
                //     product_img: ,
                //     location: ,
                //     status:
                // })

                res.status(201).json({
                    status: 201,
                    message: 'Data product telah disimpan!',
                    data: req.body
                })
            // }
        }

        catch(err) {
            res.send(err)
        }
    }
}