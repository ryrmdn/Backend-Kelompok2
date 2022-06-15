const { Product } = require('../models')

module.exports = class {
    static async addProduct(req, res) {
        try {
            const cekData = await Product.findOne({ where: {product_name: req.body.product_name} })

            if(cekData) {
                res.status(400).send({
                    status: 400,
                    message: 'Nama produk tidak boleh sama!'
                })
            }

            else {
                const result = await Product.create({
                    user_id: req.body.user_id,
                    product_name: req.body.product_name,
                    product_category: req.body.product_category,
                    product_desc: req.body.product_desc,
                    product_price: req.body.product_price,
                    product_img: req.body.product_img,
                    location: req.body.location,
                    status: req.body.status
                })

                res.status(201).json({
                    status: 201,
                    message: 'Data produk telah disimpan!',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editProduct(req, res) {
        const cekData = await Product.findOne({ where: {id: req.params.id} })

        if(!cekData) {
            res.status(400).send({
                status: 400,
                message: 'Produk tidak ditemukan!'
            })
        }

        else {
            try {
                await Product.update({
                    user_id: req.body.user_id,
                    product_name: req.body.product_name,
                    product_category: req.body.product_category,
                    product_desc: req.body.product_desc,
                    product_price: req.body.product_price,
                    product_img: req.body.product_img,
                    location: req.body.location,
                    status: req.body.status
                }, { where: {id: req.params.id} })

                res.status(201).json({
                    status: 201,
                    message: "Informasi produk telah diperbarui!"
                })
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }
}