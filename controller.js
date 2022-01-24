savedList = []

module.exports = {
save: (req,res)=>{
savedList.push(req.body.name)
res.status(200).send(savedList)

}
}