const  { Router } = require ('express');
const router = new Router();

const routeName = '/products';

//Lista todos os produtos
router.get(routeName, (req, res) => {
    res.json([{ message: "Vai retornar todos os produtos" }]);
});

// Pega os dados de um produto 
router.get(`${routeName}/:id`, (req, res) => {
    res.json({
         message: "Vai retornar os dados de um Produto dado um id",
        id:req.params.id,
     });
});

//Cria um produto
router.post(routeName, ( req, res) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Vai criar um produto',
    });
});

//Edita os dados de um Produto
router.patch(`${routeName}/:id`, (req, res) => {
    res.json({
        message: "Vai editar os dados de umm Produto dado um id",
        id: req.params.id,

    });
});

//Deleta um Produto
router.delete(`${routeName}/:id`, (req, res) => res.status(204).end());


module.exports = router;


