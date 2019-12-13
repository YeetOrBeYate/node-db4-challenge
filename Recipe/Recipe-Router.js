const express = require('express');
const Qs = require('./Recipe-Model');
const router = express.Router();

router.get('/', (req,res)=>{
    Qs.getRecipes()
    .then((recs)=>{
        res.status(201).json({recs})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.get('/:id/list', (req,res)=>{
    const id = req.params.id;

    Qs.getShoppingList(id)
    .then((list)=>{
        res.status(200).json({list})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({err})
    })
})

router.get('/:id/instructions', (req,res)=>{
    const id = req.params.id;

    Qs.getInstructions(id)
    .then((list)=>{
        res.status(201).json({list})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

module.exports = router;